export function Form() {
  return (
    <form className="grid w-full max-w-sm items-center gap-1.5">
      <h1 className="text-3xl text-gray-800 mb-4">Create an image post</h1>

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
      />

      <label
        htmlFor="image-input"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-1"
      >
        Upload Image
      </label>

      <input
        required
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
        accept="image/*"
        id="image-input"
        type="file"
      />

      <button
        className="px-4 py-2 mt-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
