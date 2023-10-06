import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import z from "zod";

import { createAccount } from "@/app/api/account-create";

if (!process.env.GITHUB_ID) {
  throw new Error("Missing env var: GITHUB_ID");
}

if (!process.env.GITHUB_SECRET) {
  throw new Error("Missing env var: GITHUB_SECRET");
}

if (!process.env.VERCEL_ORG_ID) {
  throw new Error("Missing env var: VERCEL_ORG_ID");
}

const GithubUserSchema = z.object({
  id: z.number(),
  name: z.string(),
  organizations_url: z.string(),
  email: z.string(),
});

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ profile }) => {
      const parseResult = GithubUserSchema.safeParse(profile);

      if (parseResult.success) {
        const { organizations_url, id, name, email } = parseResult.data;

        const response = await fetch(organizations_url);
        const orgs: { id: string }[] = await response.json();

        const isVercelMember = orgs.some(
          ({ id }) => String(id) === process.env.VERCEL_ORG_ID
        );

        if (isVercelMember) {
          await createAccount({ githubId: String(id), name, email });

          return true;
        }
      }

      return false;
    },
  },
});

export { handler as GET, handler as POST };
