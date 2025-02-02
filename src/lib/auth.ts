import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const { auth, handlers, signIn } = NextAuth({
  providers: [
    Github,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const email = "admin@admin.com";
        const password = "1234";

        if (credentials.email === email && credentials.password === password) {
          return { email, password };
        } else {
          throw new Error("Invalid credentials.");
        }
      },
    }),
  ],
});
