import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

if (!process.env.GITHUB_ID) {
  throw new Error("Missing env var: GITHUB_ID");
}

if (!process.env.GITHUB_SECRET) {
  throw new Error("Missing env var: GITHUB_SECRET");
}

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
