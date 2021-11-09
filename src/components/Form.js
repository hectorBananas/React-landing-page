import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const Form = () => {
    function sendEmail(e){
        e.preventDefault()

        emailjs.sendForm()
    }

    return (
        <div >
            <h2>Platicanos sobre tu vaje</h2>
            <form onSubmit={sendEmail}>
                <label>Nombre</label>
                <input 
                type="text"
                name="name" 
                required
                />
                <label>Email</label>
                <input 
                type="email" 
                required
                />
                <label>Mensaje</label>
                <textarea name='message' rows='4' />
                <input 
                type="submit" 
                value='Send'
                />
            </form>
        </div>
    )
}

export default Form
