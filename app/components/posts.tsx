import Image from "next/image";

export function Posts() {
  const data = [
    { title: "image 1", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 2", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 3", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 4", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 5", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 6", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 7", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 7", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 7", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 7", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 7", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 7", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 7", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 7", imageUrl: "https://picsum.photos/200/300" },
    { title: "image 7", imageUrl: "https://picsum.photos/200/300" },
  ];

  return (
    <div className="grid grid-cols-3 w-full gap-4 h-screen overflow-scroll">
      {data.map((image, index) => (
        <div
          key={image.title + index}
          className="border border-gray-300 rounded overflow-hidden relative"
        >
          <div className="absolute bg-black text-white w-full p-2 bottom-0">
            <h3>{image.title}</h3>
          </div>

          <Image
            className="w-full object-contain"
            alt="Uploaded image 1"
            height="100"
            width="100"
            src={image.imageUrl}
          />
        </div>
      ))}
    </div>
  );
}
