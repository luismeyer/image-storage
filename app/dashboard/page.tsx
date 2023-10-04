import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { Form } from "../components/form";
import { Posts } from "../components/posts";
import { LogoutButton } from "../components/logout-button";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/");
    return;
  }

  return (
    <main className="h-screen w-screen flex">
      <div className="w-1/2 flex items-center justify-center">
        <Form />

        <LogoutButton />
      </div>

      <section className="w-1/2 bg-gray-200 p-4 overflow-y-auto">
        <Posts />
      </section>
    </main>
  );
}
