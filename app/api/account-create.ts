import { sql } from "@vercel/postgres";

type CreateAccountOptions = {
  name: string;
  githubId: string;
  email: string;
};

export async function createAccount({
  email,
  githubId,
  name,
}: CreateAccountOptions) {
  try {
    const { rowCount } =
      await sql`select 1 from accounts where github_id = ${githubId} limit 1;`;

    if (rowCount > 0) {
      return;
    }

    await sql`INSERT INTO accounts (github_id, name, email) values (${githubId}, ${name}, ${email});`;
  } catch (e) {
    console.log("create user error ", e);
  }
}
