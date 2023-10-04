import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/");
    return;
  }

  return (
    <main className="h-screen">
      <h1>Images</h1>
    </main>
  );
}
