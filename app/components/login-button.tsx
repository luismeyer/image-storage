"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

import { Spinner } from "./spinner";

export function LoginButton() {
  const [loading, setLoading] = useState(false);

  async function login() {
    setLoading(true);

    await signIn("github");
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner size={32} />
      </div>
    );
  }

  return (
    <button
      className="px-4 py-2 mt-2 bg-gray-800 text-white rounded hover:bg-gray-700 w-full"
      disabled={loading}
      onClick={login}
    >
      Sign in with Github
    </button>
  );
}
