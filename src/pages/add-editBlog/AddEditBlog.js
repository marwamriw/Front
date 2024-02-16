import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import {useDispatch,useSelector} from "react-redux";
import {  addblog} from '../../redux/slices/blogSlice';
import "./addEditBlog.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





        const AddEditBlog = () => {

                const dispatch=useDispatch();
                const [blog,setBlog]=useState();
                const [img, setImg] = useState('');
                const { register, handleSubmit, formState: { errors } } = useForm();
                const onSubmit = data => {
                    const blogData = { ...data, img:data.img.trim() };
                        dispatch(addblog(data));
                        toast.success(' Blog added successfully!', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                        };

    return (
        <div>
            <ToastContainer/>
                {/* card to add blog */}
            <form onSubmit={handleSubmit(onSubmit)} className='addForm'>
                <h1 className='addTitle' style={{textAlign:'center'}}>ADD NEW BLOG</h1><br/><br/>
                <input className='addInput' type="text" placeholder="Add title" {...register("title", {required: true})} />
                <input  className='addInput'type="text" placeholder="Add image URL"{...register("img")}    onError={(e) => e.target.src = ''}/>
                <textarea className='addTextA' type="text" placeholder="Add description for your blog" {...register("desc", {required: true})} />
                <input className='addInput' type="submit" value='SEND' />
            </form>
        </div>
        )
    }



export default AddEditBlog
