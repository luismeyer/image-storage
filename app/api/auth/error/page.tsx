import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const message =
    searchParams?.error === "AccessDenied" &&
    "You are not allowed to access this app. You must be part of the @vercel github organization and set your membership to be public.";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <svg
            className=" mx-auto h-12 w-auto"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Oops! Something went wrong.
          </h2>
        </div>
        <div className="mt-2 text-center text-sm text-gray-600">
          {message && <p className="mt-1">{message}</p>}
        </div>
        <div className="flex justify-center">
          <Link className={buttonVariants()} href="/">
            try again
          </Link>
        </div>
      </div>
    </div>
  );
}
