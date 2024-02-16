import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { useParams } from 'react-router-dom';
import { updateblog } from '../../redux/slices/blogSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./addEditBlog.css"

const EditBlog = () => {



        const { id } = useParams();
        const dispatch=useDispatch();
               //get the blog data from redux store.
        const { blogList} = useSelector((state) => state.blog);
        const blog = blogList.find((blog) => blog._id === id) || {};
        const [updated,setupdateblog]=useState({})
        useEffect(() => {
          setupdateblog(blog);
      }, [blog]);
        const handleChange = (e) => {
            setupdateblog((prevUpdated) => ({ ...prevUpdated, [e.target.name]: e.target.value }));
              console.log(setupdateblog, 'update');
            };


  return (
    <div className='container-editblog'>
        <ToastContainer/>
      <br/>
      <h1  className='editTitle'style={{textAlign:'center'}}>UPDATE BLOG</h1><br/><br/>
                    <input className='editbloginput' type='text' placeholder='Add new title' name='title'onChange={handleChange}></input>
                    <input  className='editbloginput' type="text" placeholder="Add your image URL" name='img' onChange={handleChange} ></input>
                    <textarea className='editblogarea' type='text' placeholder='Add new description' name='desc'onChange={handleChange}></textarea>
                    <button className='edditInputButton' onClick={() => {dispatch(updateblog({ ...updated, _id: blog._id }));
                      toast.success('Blog updated successfully!', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });
                  }}>UPDATE </button>
                    
    </div>
  )
}

export default EditBlog


