import axios from "axios";

const URL = "http://localhost:9090/contacts"

export const getAllContact=()=> axios.get(`${URL}/`)
export const deleteContact=(id)=> axios.delete(`${URL}/${id}`,id)
export const addContact=(contacts)=> axios.post(`${URL}/`,contacts)
export const updateContact=(id,contacts)=> axios.put(`${URL}/${id}`,contacts)