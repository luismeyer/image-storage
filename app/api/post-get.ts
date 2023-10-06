import { getServerSession } from "next-auth";

import { sql } from "@vercel/postgres";

import { Post } from "./types";

export async function getPost(id: number) {
  const session = await getServerSession();

  if (!session?.user) {
    return;
  }

  try {
    const result =
      await sql<Post>`SELECT * FROM posts WHERE id = ${id} LIMIT 1;`;

    return result.rows[0];
  } catch (error) {
    console.error({ error });

    return;
  }
}
