import React, {useState} from 'react'
import './comments.css'
import {toast} from 'react-toastify'

const Comments = () => {
    const [text,  setText] = useState("")

    //form handler submit
        const handlerSubmit = (e) =>{
        e.preventDefault();
        if(text.trim ==="") return toast.error("please write something");
        console.log({text})

    }
    return (
        <div>
            <form className='commentForm' onSubmit={handlerSubmit}>
                <input 
                    type='text' placeholder='Add a comment' 
                    className='commentInput'
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
                    <button type='submit' className='commentButton'>
                    Comment
                    </button>
            </form>

        </div>
)
}

export default Comments
