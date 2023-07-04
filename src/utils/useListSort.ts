import type { SortType, Contact } from "../types";

export function useListSort(array: Contact[], string: SortType) {
  return array.sort((a, b) => {
    switch (string) {
      case "oldest":
        return a.id > b.id ? 1 : -1;
      case "recent":
        return a.id > b.id ? -1 : 1;
      case "az":
        return a.name.localeCompare(b.name);
      case "za":
        return b.name.localeCompare(a.name);
    }
  });
}
