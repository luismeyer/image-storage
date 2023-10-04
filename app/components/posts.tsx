import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";

import { list } from "../api/list";

dayjs.extend(relativeTime);

export async function Posts() {
  const posts = await list();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full gap-4 overflow-scroll">
      {posts?.map((image, index) => (
        <div
          key={image.title + index}
          className="border border-gray-300 rounded overflow-hidden relative h-fit"
        >
          <Image
            className="w-full object-contain"
            alt="Uploaded image 1"
            height="300"
            width="200"
            src={image.image}
          />

          <div className="bg-black text-white w-full p-2">
            <span className="text-sm font-thin">
              {image.author} - {dayjs(image.created_at).fromNow()}
            </span>

            <h3 className="text-xl font-bold">{image.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
