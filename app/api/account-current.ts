"use server";

import { getServerSession } from "next-auth";

import { sql } from "@vercel/postgres";

import { Account } from "./types";

export async function currentAccount() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    return;
  }

  const { rows } =
    await sql<Account>`select * from accounts where email = ${session.user.email} limit 1;`;

  return rows[0];
}
