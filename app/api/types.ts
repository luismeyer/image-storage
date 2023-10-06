export type Post = {
  title: string;
  image: string;
  id: number;
  created_at: Date;
  account_id: number | null;
  author: string | null;
};

export type JoinedPost = Post & {
  author_name: string | null;
};

export type FrontPost = {
  id: number;
  title: string;
  image: string;
  created_at: Date;
  account_name: string | null;
  account_id: number | null;
};

export type Account = {
  id: number;
  email: string;
  name: string;
  github_id: string;
};
