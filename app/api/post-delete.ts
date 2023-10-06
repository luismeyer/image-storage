"use server";

import { revalidatePath } from "next/cache";

import { sql } from "@vercel/postgres";

import { currentAccount } from "./account-current";
import { getPost } from "./post-get";

export async function deletePost(id: number): Promise<boolean> {
  const account = await currentAccount();

  const post = await getPost(id);

  if (!account || !post || account.id !== post?.account_id) {
    return false;
  }

  try {
    await sql`DELETE FROM posts WHERE id = ${id};`;

    revalidatePath("/dashboard");
  } catch (error) {
    return false;
  }

  return true;
}
