"use server";

import { getServerSession } from "next-auth";
import z from "zod";

import { put } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

const PostSchema = z.object({
  title: z.string().min(8).max(64),
  image: z.any(),
  author: z.string(),
});

type State = { success: false; error: string } | { success: true } | undefined;

export async function create(
  _prevState: State,
  formData: FormData
): Promise<State> {
  const session = await getServerSession();

  if (!session?.user) {
    return { success: false, error: "Not logged in" };
  }

  try {
    const { image, title, author } = PostSchema.parse({
      author: session.user.name,
      image: formData.get("image"),
      title: formData.get("title"),
    });

    const { url } = await put(image.name, image, { access: "public" });

    await sql`INSERT INTO Posts (Image, Title, Author) VALUES (${url}, ${title}, ${author});`;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const [issue] = error.issues;

      return {
        success: false,
        error: `Problem in field '${issue.path}': ${issue.message}`,
      };
    }

    if (error instanceof Error) {
      return { success: false, error: error.message };
    }

    return { success: false, error: "Something went wrong" };
  }

  revalidatePath("/dashboard");

  return { success: true };
}
