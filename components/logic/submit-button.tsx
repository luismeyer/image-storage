"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button disabled={pending} className="gap-2 mt-2" type="submit">
			<span>Submit</span>

			{pending ? (
				<Spinner size={24} color="white" />
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<title>submit icon</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
					/>
				</svg>
			)}
		</Button>
	);
}
