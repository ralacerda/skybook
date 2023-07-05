export type SortType = "recent" | "oldest" | "az" | "za";

export type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  username: string;
  website: string;
};

declare module "vue-router" {
  interface RouteMeta {
    depth: number;
    transition?: string;
  }
}
