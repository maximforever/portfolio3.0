export interface Project {
  title: string;
  link: string;
  description: string;
  stack?: string[];
}

export type Page = "initial" | "about" | "projects" | "writing";