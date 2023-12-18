"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

import { Spinner } from "@/components/ui/spinner";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function LogoutButton() {
	const [loading, setLoading] = useState(false);

	async function logout() {
		setLoading(true);

		await signOut();
	}

	return (
		<div className="absolute bottom-5 left-5 w-10 h-10 flex items-center justify-center">
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger onClick={logout}>
						{loading ? (
							<Spinner size={30} />
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								width={40}
								height={40}
							>
								<title>logout icon</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
								/>
							</svg>
						)}
					</TooltipTrigger>

					<TooltipContent>logout</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
