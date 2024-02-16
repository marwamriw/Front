import React , { useRef } from 'react'
import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
e.preventDefault();

        emailjs.sendForm('service_9nw0mbk', 
        'template_4qlc747',
            form.current, 
            'gAlZSEMllQS57jFDB')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            toast.success('message send successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
            <ToastContainer/>
        <div className='container-contact'>
        <div className='left-contact'>
            <h5>JOIN OUR NEWSLETTER</h5>
            <p>Use our contact form for all information requests or<br/>
                contact us directly using the contact information below
            </p>
            <p><BsFillTelephonePlusFill /> (+216) 98 000 000</p>
            <p><MdOutlineMail />Petcare@yahoo.com</p>
            <p> <MdPlace /> Rue-Zbid-Bekalta-Monastir 5090</p> 
        </div>
        <StyledContactForm>
            <form ref={form} onSubmit={sendEmail}>
            <h2 className='title-form'>CONTACT US</h2>
            <label></label>
                <input type="text" name="user_name"  placeholder='Enter your name' />
                <label></label>
                    <input type="email" name="user_email" placeholder='Enter a valid email address'/>
                    <label></label>
                    <textarea name="message" placeholder='Enter your message' />
                        <input type="submit" value="SEND" />
                </form>
        </StyledContactForm>
        </div> 

        </div>
    )
}
    const StyledContactForm = styled.div`
    width: 800px;

    height : 400px;
    margin-bottom : 220px;

    form {
        margin-top : 80px;
        display: flex;
    align-items: center;
    flex-direction: column;
        width: 100%;
        font-size: 16px;

        input {
        margin-top : 30px;
        width: 500px;
        height: 35px;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);

        &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
        }
}

textarea {
        max-width: 500px;
        min-width: 250px;
        width: 100%;
        max-height: 150px;
        min-height: 100px;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);

        &:focus {
            border: 2px solid rgba(0, 206, 158, 1);
        }
    }

        label {
        margin-top: 1rem;
}

        input[type="submit"] {
        margin-top: 2rem;
        cursor: pointer;
        background: hsl(264, 30%, 30%);
        color: white;
        border: none; 
        border-radius : 10px;}
        @media only screen and (max-width: 768px) {
            width: 90%;
            margin-bottom: 120px;
    
            form {
                input {
                    width: 90%;
                }
    
                textarea {
                    min-width: 90%;
                }
            }
        }
    
        @media only screen and (max-width: 576px) {
            width: 90%;
            margin-bottom: 80px;
    
            form {
                input {
                    width: 90%;
                }
    
                textarea {
                    min-width: 90%;
                }
            }
      };`
  export default Contact
  