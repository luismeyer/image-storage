"use client";

import { signIn } from "next-auth/react";

export function LoginButton() {
  return (
    <button
      className="px-4 py-2 mt-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      onClick={() => signIn("github")}
    >
      Sign in with Github
    </button>
  );
}
