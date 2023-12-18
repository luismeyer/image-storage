import { getServerSession } from "next-auth";

import { sql } from "@vercel/postgres";

import { FrontPost, JoinedPost } from "./types";

export async function listPosts(): Promise<FrontPost[] | undefined> {
	const session = await getServerSession();

	if (!session?.user) {
		return;
	}

	try {
		const { rows } = await sql<JoinedPost>`
      SELECT posts.*, accounts.name as author_name FROM posts LEFT JOIN accounts ON account_id = accounts.id
      ORDER BY created_at DESC LIMIT 20 OFFSET 0;
    `;

		return rows.map((row) => ({
			...row,
			account_name: row.author ?? row.author_name,
		}));
	} catch (error) {
		console.error({ error });
	}
}
