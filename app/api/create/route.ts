import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

import { sql } from "@vercel/postgres";

export const PostSchema = z.object({
  title: z.string().min(1).max(64),
  image: z.any(),
  author: z.string(),
});

export async function POST(request: NextRequest) {
  const session = await getServerSession();

  if (!session?.user) {
    return NextResponse.json({ message: "Not logged in" }, { status: 401 });
  }

  const data = await request.formData();

  const input = PostSchema.parse({
    author: session.user.name,
    image: data.get("image"),
    title: data.get("title"),
  });

  try {
    const imageUrl = "https://picsum.photos/200/300";

    await sql`INSERT INTO Posts (Image, Title, Author) VALUES (${imageUrl}, ${input.title}, ${input.author});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ message: "OK" });
}