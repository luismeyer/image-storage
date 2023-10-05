import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

if (!process.env.GITHUB_ID) {
  throw new Error("Missing env var: GITHUB_ID");
}

if (!process.env.GITHUB_SECRET) {
  throw new Error("Missing env var: GITHUB_SECRET");
}

if (!process.env.VERCEL_ORG_ID) {
  throw new Error("Missing env var: VERCEL_ORG_ID");
}

type Org = {
  id: number;
  login: string;
};

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    signIn: async ({ profile }) => {
      if (
        profile &&
        "organizations_url" in profile &&
        typeof profile.organizations_url === "string"
      ) {
        const response = await fetch(profile.organizations_url);
        const orgs: Org[] = await response.json();

        return orgs.some(
          ({ id, login }) =>
            login === "vercel" && String(id) === process.env.VERCEL_ORG_ID
        );
      }

      return false;
    },
  },
});

export { handler as GET, handler as POST };
