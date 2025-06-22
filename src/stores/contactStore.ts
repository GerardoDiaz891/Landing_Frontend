import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IContact } from '@/interfaces/IContact'
import { getContacts, createContact } from '@/services/contactService'

export const useContactStore = defineStore('contact', () => {
  const contacts = ref<IContact[]>([])
  const error = ref<string | null>(null)

  const fetchContacts = async () => {
    try {
      contacts.value = await getContacts()
    } catch (err: any) {
      error.value = 'No se pudieron obtener los contactos.'
      console.error(err)
    }
  }

  const addContact = async (data: IContact) => {
    try {
      const newContact = await createContact(data)
      contacts.value.push(newContact)
    } catch (err: any) {
      error.value = 'No se pudo crear el contacto.'
      console.error(err)
    }
  }

  return {
    contacts,
    error,
    fetchContacts,
    addContact,
  }
})
