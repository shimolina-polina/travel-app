export interface IBlogPost {
    id: number
    title: string;
    author: string;
    date: string;
    image?: string;
    content: string;
    tags: string[];
  }