import React, { useEffect, useState } from 'react'

const AddContactForm = ({ acceptData, sendDataToForm, handleUpdate }) => {

    const [form, setForm] = useState({ id: "", name: "", email: "", mobile: "" })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        if (sendDataToForm) {
            setForm(sendDataToForm)
        }
    }, [sendDataToForm])

    const handleSubmit = (e) => {

        e.preventDefault();

        if (sendDataToForm) {
            handleUpdate(form)
        } else {

            acceptData(form)
        }


        setForm({ id: "", name: "", email: "", mobile: "" })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                ID : <input type="text" value={form.id} name='id' onChange={handleChange} />
                Name : <input type="text" value={form.name} name='name' onChange={handleChange} />
                Emal : <input type="text" value={form.email} name='email' onChange={handleChange} />
                mobile : <input type="text" value={form.mobile} name='mobile' onChange={handleChange} />{"  "}

                <button type='submit'>{sendDataToForm ? "Update Contact" : "Add Contact"}</button>
            </form>
        </div>
    )
}

export default AddContactForm