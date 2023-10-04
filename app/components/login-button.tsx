"use client";

import { signIn } from "next-auth/react";

export function LoginButton() {
  return (
    <button
      className="bg-black text-white p-2 rounded-md w-full text-center text-sm"
      onClick={() => signIn("github")}
    >
      Sign in with Github
    </button>
  );
}
