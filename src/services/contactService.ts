import { genericRequest } from '@/utils/genericRequest'

export const getContacts = async () => {
  const response = genericRequest('/contacts', 'GET')
  return response
}

export const createContact = async (data: any) => {
  const response = genericRequest('/contacts', 'POST', data)
  return response
}

export const updateContact = async (id: number, data: any) => {
  const response = genericRequest(`/contacts/${id}`, 'PUT', data)
  return response
}

export const deleteContact = async (id: number) => {
  const response = genericRequest(`/contacts/${id}`, 'DELETE')
  return response
}

