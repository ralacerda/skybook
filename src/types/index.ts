export type SortType = "recent" | "oldest" | "az" | "za";

export type Contact = {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  [key: string]: string | number | undefined;
};

declare module "vue-router" {
  interface RouteMeta {
    depth: number;
    transition?: string;
  }
}
