import React, { useState } from 'react'
import { addContact, getAllContact, updateContact } from './service'
import ShowAllContact from './components/ShowAllContact'
import AddContactForm from './components/AddContactForm'

const App = () => {

  const [contact, setContact] = useState([])
  const [editContact, setEditContact] = useState(null)

  const handleGetAllContact = async () => {

    try {
      const getRes = await getAllContact();
      setContact(getRes.data)
    } catch (getError) {
      console.log(getError)
    }
  }


  const acceptData = async (contacts) => {
    try {
      const addResponse = await addContact({
        ...contacts,
        id: Number(contacts.id)
      })
      setContact((prev) => [...prev, addResponse.data])
    } catch (addError) {
      console.log(addError)
    }
  }

  const handleUpdate= async (contacts)=>{
    try{
      const updateResponse = await updateContact(contacts.id,contacts)

      setContact((prev)=>
        prev.map((item)=>
        item.id === contacts.id ? updateResponse.data :item
        )
      )

      setEditContact(null)
    } catch(updateError){
      console.log(updateError)
    }
  }
  return (
    <div>
      <button onClick={handleGetAllContact}>Get All Contact</button>
      <ShowAllContact sendContact={contact} setContact={setContact} setEditContact={setEditContact}/>

      <AddContactForm acceptData={acceptData} sendDataToForm = {editContact} handleUpdate={handleUpdate} />
    </div>
  )
}

export default App