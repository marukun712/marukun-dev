export type Image = {
  url: string;
  height: number;
  width: number;
};

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export type ProjectData = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  startDate: string;
  url: string;
  images: Image[];
  description: string;
};

export type PostData = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: Category[];
};

export type ProfileData = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  icon: {
    url: string;
    height: number;
    width: number;
  };
  profile: string;
};

export type Projects = {
  contents: ProjectData[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type Posts = {
  contents: PostData[];
  totalCount: number;
  offset: number;
  limit: number;
};
