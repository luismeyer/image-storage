import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Link from "next/link";

import { list } from "@/app/api/list";
import { buttonVariants } from "@/components/ui/button";

dayjs.extend(relativeTime);

export async function Posts() {
  const posts = await list();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full gap-4 overflow-scroll">
      {posts?.map(({ title, image, author, created_at }, index) => (
        <div
          key={title + index}
          className="group border border-gray-300 rounded overflow-hidden relative h-fit shadow-lg"
        >
          <Image
            className="w-full object-contain"
            alt="Uploaded image 1"
            height="300"
            width="200"
            src={image}
          />

          <div className="bg-black text-white w-full p-2">
            <span className="text-sm font-thin">
              {author} - {dayjs(created_at).fromNow()}
            </span>

            <h3 className="text-xl font-bold">{title}</h3>
          </div>

          <Link
            href={image}
            download
            className={buttonVariants({
              variant: "outline",
              size: "icon",
              className:
                "absolute top-2 right-2 shadow-md group-hover:visible invisible",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
