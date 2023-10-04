import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data } = useSession();

  if (data?.user) {
    return (
      <div>
        Signed in as {data.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
