"use client";

import { SessionProvider } from "next-auth/react";
import LoginButton from "./login-button";

export function App() {
  return (
    <SessionProvider>
      <div className="w-full h-full flex items-center justify-center">
        <h1>Luis Images</h1>

        <LoginButton />
      </div>
    </SessionProvider>
  );
}
