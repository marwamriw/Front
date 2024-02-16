import React from 'react'
import './scrolToTopButton.css'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScolToTopButton = () => {
    const scrolToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    }

    return (
    <div>
      <button onClick={scrolToTop} className='scroll-to-top-btn'><MdKeyboardDoubleArrowUp style={{fontSize: '25px'}} /></button>
    </div>
  )
}

export default ScolToTopButton
