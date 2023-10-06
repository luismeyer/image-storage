import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Link from "next/link";

import { currentAccount } from "@/app/api/account-current";
import { listPosts } from "@/app/api/posts-list";
import { buttonVariants } from "@/components/ui/button";

import { DeleteButton } from "./delete-button";

dayjs.extend(relativeTime);

export async function Posts() {
  const posts = await listPosts();

  const account = await currentAccount();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full gap-4 ">
      {posts?.map(
        ({ id, title, image, created_at, account_id, account_name }) => (
          <div
            key={id}
            className="group border border-gray-300 rounded-lg relative h-fit drop-shadow-md overflow-hidden"
          >
            <Image
              className="w-full object-contain"
              alt={title}
              height="300"
              width="200"
              src={image}
            />

            <div className="bg-black text-white w-full p-2">
              <span className="text-sm font-thin">
                {account_name} - {dayjs(created_at).fromNow()}
              </span>

              <h3 className="text-xl font-bold">{title}</h3>
            </div>

            <div className="group-hover:visible invisible absolute top-2 right-2 flex gap-2">
              {account?.id === account_id && <DeleteButton id={id} />}

              <Link
                href={image}
                download
                className={buttonVariants({
                  size: "icon",
                  className: "drop-shadow-lg",
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
          </div>
        )
      )}
    </div>
  );
}
