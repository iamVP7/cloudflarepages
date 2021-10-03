import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.NEXAUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXAUTH_GITHUB_CLIENT_SEC,
    }),
    // ...add more providers here
  ],
})