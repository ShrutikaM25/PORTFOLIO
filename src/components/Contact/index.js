import Loader from 'react-loaders';
import './index.scss';
import Sidebar from '../Siddebar';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeout = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => clearTimeout(timeout);
      }, []);

      const sendEmail = (e) =>{
        e.preventDefault()

        emailjs
      .sendForm('Gmail', 'template_gsy3h6l', refForm.current, 'y2KpeEJQi5UOoUPKg')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
      }

    return (
        <>
        <div className='container contact-page'>
            <Sidebar/>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15}/>
                </h1>
                <p>
                    I am interested in freelance opportunities - especially ambitious or 
                    large projects. However, if you have other request or question, 
                    please don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name = 'name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name = 'email' placeholder='E-mail' required/>
                            </li>
                            <li>
                                <input placeholder= 'Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value= 'SUBMIT'/>
                            </li>
                        </ul>
                    </form>

                </div>

            </div>
            <div className='info-map'>
                Shrutika Malve,
                <br/>
                India
                <br/>
                Pune, Maharashtra <br/>
                <span>
                    shrutikam03@gmail.com
                </span>
            </div>
        </div>
            <Loader type='pacman'/>
        </>
    );
}

export default Contact;