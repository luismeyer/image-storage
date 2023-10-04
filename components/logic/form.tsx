"use client";

import { useEffect, useRef } from "react";
import { experimental_useFormState as useFormState } from "react-dom";
import toast, { Toaster } from "react-hot-toast";

import { create } from "@/app/api/create";

import { Inputs } from "./inputs";
import { SubmitButton } from "./submit-button";

export function Form() {
  const form = useRef<HTMLFormElement>(null);

  const [state, formAction] = useFormState(create, undefined);

  useEffect(() => {
    if (!state) {
      return;
    }

    if (state?.success) {
      form.current?.reset();
      toast.success("Image uploaded successfully!");
    } else {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form
      ref={form}
      className="grid w-full max-w-sm items-center gap-1.5"
      action={formAction}
    >
      <Toaster position="top-left" />

      <h1 className="text-3xl text-gray-800 mb-4">Create an Image post</h1>

      <Inputs />

      <SubmitButton />
    </form>
  );
}
