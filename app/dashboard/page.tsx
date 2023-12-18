import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { Form } from "@/components/logic/form";
import { LogoutButton } from "@/components/logic/logout-button";
import { Posts } from "@/components/logic/posts";

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

			<section className="w-1/2 p-4 overflow-y-auto vercel-fade">
				<Posts />
			</section>
		</main>
	);
}
