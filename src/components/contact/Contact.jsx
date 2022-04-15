import React from 'react'
import { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { ThemeContext } from '../../context';
import { useContext } from 'react';



const Contact = () => {
    const formRef = useRef()
    const [sent, setSent] = useState(false)

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    const handleSubmit = (e)=>{
        e.preventDefault()

        emailjs.sendForm(
            'service_7evvrkx', 
            'template_tlapaai', 
            formRef.current, 
            'lH-sD0dBEZN3Duv-l'
        )
        .then((result) => {
            console.log(result.text);
            setSent(true)
        }, (error) => {
            console.log(error.text);
        });

    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Let's work together!
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src="/images/mobile.png" alt="" className='c-icon'/>
                        +1 857 498 2982
                    </div>

                    <div className="c-info-item">
                        <img src="/images/email.png" alt="" className='c-icon'/>
                        vora.rocco@gmail.com
                    </div>

                    <div className="c-info-item">
                        <img src="/images/address.png" alt="" className='c-icon'/>
                        11 Bostonia ave Brighton Ma. 02135
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>Keep in touch!</b> Feel free to reach out to me for more information on career opportunities, my work or to simply connect!
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && '#333'}} 
                        type="text" 
                        placeholder='Name' name='user_name'/>
                    <input style={{backgroundColor: darkMode && '#333'}} 
                        type="text" 
                        placeholder='Subject' name='user_subject'/>
                    <input style={{backgroundColor: darkMode && '#333'}} 
                        type="text" 
                        placeholder='Email' name='user_email'/>
                    <textarea style={{backgroundColor: darkMode && '#333'}} 
                        rows="5"
                        placeholder='Message'
                        name='message'/>
                    <button className='growbt'>Submit</button>
{/* message after email sent */}
                    {sent && "Your message is sent! Thank you :)"}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact 