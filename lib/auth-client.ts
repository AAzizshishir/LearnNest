// import { router } from "better-auth/api";
import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: process.env.BASE_URL || "http://localhost:3000",
});

// await authClient.signOut({
//   fetchOptions: {
//     onSuccess: () => {
//       router.push("/login"); // redirect to login page
//     },
//   },
// });

export const { signIn, signUp, signOut, useSession } = createAuthClient();
