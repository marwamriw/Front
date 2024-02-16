import React from 'react';
import "./footer.css";
import {Link} from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutube } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";


const Footer = ({theme,setTheme}) => {

    const toggle_mode = ()=>{
        theme == 'light'? setTheme("dark") : setTheme("light");
    }
    
    return (
        <div className = {`footer ${theme === 'dark' ? 'dark-mode' : ''}`}>
            <div className='sb_footer section_padding'>
                <div className='sb_footer_links'>
                    <div className="sb_footer_links_div">
                    <h4>PET Care</h4>
                        <p>Dedicated to fostering a loving and healthy environment for pets</p>
                        <p>ensuring their well-being and happiness through expert care and compassion</p>
                        <div className='icone'>
                    <Link className='icone-link' to='https://www.facebook.com' ><FaFacebook /></Link> 
                    <Link className='icone-link' to='https://www.instagram.com' ><RiInstagramFill /></Link>
                    <Link className='icone-link' to='https://twitter.com/i/flow/login' ><AiFillTwitterCircle /></Link>
                    <Link className='icone-link' to='https://www.youtube.com' ><SiYoutube /></Link>
                    <Link className='icone-link' to='https://www.linkedin.com' ><FaLinkedin /></Link>
                    </div>
                    </div>
                    <div className="sb_footer_links_div">
                        <h4> INFO</h4>
                        <Link className="linkk" to="/">Home</Link>
                        <Link className="linkk" to="/register">contact</Link>
                        <Link className="linkk" to="/register">register</Link>
                        <Link className="linkk" to="/login">login</Link>
                    </div>
                    <div className='sb_footer_links_div'>
                    <h4>CONTACT INFO</h4>
                    <p> You have any suggestions contact us at:</p>
                    <p><MdOutlineAlternateEmail /> PET@yahoo.com</p>
                    <p> <MdPlace /> Rue-Zbid</p>
                    <p> <BsFillTelephoneInboundFill /> 98 000 000</p>
                </div>
                </div>
                <hr></hr>
                <div className='sb_footer_below'>
                    <div className='sb_footer_copyright'>
                        <p>@{new Date().getFullYear()} <span>PET Care</span>. All right reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
