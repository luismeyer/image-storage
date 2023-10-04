import Image from "next/image";
import { list } from "../api/list";

export async function Posts() {
  const posts = await list();

  return (
    <div className="grid grid-cols-3 w-full gap-4 h-screen overflow-scroll">
      {posts?.map((image, index) => (
        <div
          key={image.title + index}
          className="border border-gray-300 rounded overflow-hidden relative h-fit"
        >
          <div className="absolute bg-black text-white w-full p-2 bottom-0">
            <h3>{image.title}</h3>
          </div>

          <Image
            className="w-full object-contain"
            alt="Uploaded image 1"
            height="300"
            width="200"
            src={image.image}
          />
        </div>
      ))}
    </div>
  );
}
