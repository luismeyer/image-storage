"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function Inputs() {
  const { pending } = useFormStatus();

  return (
    <>
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="title"
      >
        Title
      </label>

      <input
        required
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Choose a title for your post"
        id="title"
        type="text"
        name="title"
        disabled={pending}
      />

      <label
        htmlFor="image"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-1"
      >
        Upload Image
      </label>

      <input
        required
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
        accept="image/*"
        id="image"
        type="file"
        name="image"
        disabled={pending}
      />
    </>
  );
}
