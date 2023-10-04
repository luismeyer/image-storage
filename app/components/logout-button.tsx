"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

import { Spinner } from "./spinner";

export function LogoutButton() {
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);

    await signOut();
  }

  return (
    <button
      disabled={loading}
      className="absolute bottom-2 left-2 text-center"
      onClick={logout}
    >
      {loading ? <Spinner size={24} /> : "Sign out"}
    </button>
  );
}
