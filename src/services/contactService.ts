import { genericRequest } from '@/utils/genericRequest'

export const getContacts = async () => {
  const response = genericRequest('/contacts', 'GET')
  return response
}

export const createContact = async (data: any) => {
  const response = genericRequest('/contacts', 'POST', data)
  return response
}
