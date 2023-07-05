import { defineStore } from "pinia";
import type { Contact } from "../types";

const url = "https://jsonplaceholder.typicode.com/users";
// Utilize o link abaixo para similar erros na API
// const url = "https://httpstat.us/500";

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
  state: () => ({ ...contacts, lastId: 10 }),
  actions: {
    getContactById(id: number) {
      const foundContact = this.list.find(
        (contact: Contact) => contact.id == id
      );
      if (!foundContact) {
        throw new Error("Contact ID not found");
      }
      return foundContact as Contact;
    },
    removeById(id: number) {
      this.list = this.list.filter((contact: Contact) => contact.id != id);
    },
    updateById(id: number, newValue: Contact) {
      // Aqui o assign() faz o papel de mudar o valor
      // das chaves, adicionando as que faltam
      Object.assign(this.getContactById(id), newValue);
    },
    createContact(details: Contact) {
      this.list.push(details);
      this.lastId++;
    },
  },
});
