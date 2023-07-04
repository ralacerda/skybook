import { defineStore } from "pinia";

const url = "https://jsonplaceholder.typicode.com/users";
// const url = "https://httpstat.us/404";

async function fetchContacts() {
  try {
    const result = await fetch(url);

    if (!result.ok) {
      return {
        error: `Response Error: Code ${result.status}`,
        list: [],
      };
    }

    const json = await result.json();

    return { error: null, list: json };
  } catch (error) {
    return { error, list: [] };
  }
}

const contacts = await fetchContacts();

export const useContactsStore = defineStore("contacts", {
  state: () => contacts,
});
