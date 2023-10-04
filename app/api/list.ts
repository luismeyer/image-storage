import { getServerSession } from "next-auth";

import { sql } from "@vercel/postgres";

type Post = {
  title: string;
  image: string;
  author: string;
};

export async function list() {
  const session = await getServerSession();

  if (!session?.user) {
    return;
  }

  try {
    const result =
      await sql<Post>`SELECT * FROM posts ORDER BY created_at DESC LIMIT 20 OFFSET 0;`;

    return result.rows;
  } catch (error) {
    console.error({ error });

    return;
  }
}
