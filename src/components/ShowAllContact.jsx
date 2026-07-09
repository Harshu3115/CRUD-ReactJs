import React from 'react'
import { deleteContact } from '../service'

const ShowAllContact = ({ sendContact,setContact,setEditContact }) => {

    const handleDelete = async(id)=>{
        try{
            const deleteResponce = await deleteContact(id);

            setContact((prev)=>prev.filter((contact)=>contact.id !== id))

        }catch(deleteError){
            console.log(deleteError)
        }
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile No</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        sendContact.length > 0 ? (
                            sendContact.map((contact) => (
                                <tr key={contact.id}>
                                    <td>{contact.id}</td>
                                    <td>{contact.name}</td>
                                    <td>{contact.mobile}</td>
                                    <td>{contact.email}</td>

                                    <td>
                                        <button onClick={()=>handleDelete(contact.id)}>Delete</button>
                                    </td>

                                    <td>
                                        <button onClick={()=>setEditContact(contact)}>Edit Contact</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>No Contacts found</td>
                            </tr>
                        )


                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowAllContact