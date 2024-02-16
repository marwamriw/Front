import React from 'react'
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import swal from  'sweetalert';

import './commentsList.css'

const CommentsList = () => {

    //delete comment
    const  handeldeletComment =() =>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }
     //update comment
        const  handeleUpdateComment =() =>{
        swal({
            title: "Are you sure?",
            text: "Once updated, you will be appear the updated!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willUpdate) => {
            if (willUpdate) {
                swal("Poof! Your imaginary file has been updated!", {
                icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }
    return (
    <div className='commentsList'>
        <h4 className='commentsListCount'>2 Comments</h4>
                    <div className='commentItem'> 
                        <div className='commentItemInfo'>
                            <div className='commentItemUsername'>
                            MARWA boukhris
                        </div>
                        <div className="commentDate">
                            16 hours ago
                        </div>
                    </div>
                    <p className='commentItemText'>hello this is amazing</p>
                    <div className='commentItemIconWrapper'>
                    <MdEdit onClick={handeleUpdateComment} style={{ color:"green" , fontSize:"20px"}} />
                    <AiFillDelete onClick={handeldeletComment} style={{color:"#a21414", fontSize:"20px"}} />
                    </div>

        </div>
        <div className='commentItem' > 
                    <div className='commentItemInfo'>
                        <div className='commentItemUsername'>
                            SAFA boukhris
                        </div>
                        <div className="commentDate">
                            20 hours ago
                        </div>
                    </div>
                    <p className='commentItemText'>hi it is beautiful</p>
                    <div className='commentItemIconWrapper'>
                    <MdEdit onClick={handeleUpdateComment}  style={{ color:"green" , fontSize:"20px"}}/>
                    <AiFillDelete onClick={handeldeletComment} style={{color:"#a21414" , fontSize:"20px"}}/>
                    </div>

        </div>
    </div>
)
}

export default CommentsList
