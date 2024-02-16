import React ,{useState, useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import{Link,useNavigate} from "react-router-dom";
import { getblogs, deleteblog} from '../../redux/slices/blogSlice';
import Spinner from '../../components/Spinner';
import "./dashboard.css"
import { MdDelete } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import cat from '../../assets/c.png';
import ScolToTopButton from '../../components/buttonScroll/ScolToTopButton';
import { IoCalendarNumberOutline } from "react-icons/io5";



const Dashboard = () => {

    const navigate = useNavigate();
    const[blog,setBlog]=useState([]);
    const dispatch=useDispatch();
    const {blogList,isLoading}=useSelector(state => state.blog)
    const { isAuth,user,profilePicture } = useSelector(state => state.user)
    

    useEffect(() => {
        dispatch(getblogs());
    }, [dispatch]);
            console.log(isLoading);
            console.log(blogList);

                // Navigate to the edit page with the blog id as a parameter 
            const handleUpdateClick = (id) => {
                navigate(`/editblog/${id}`);
            };

    return (
        <div>
                <img src={cat} alt="cat" className='image-daschboard' />
                <div><p className='number-blog-dash'>NUMBER OF BLOGS:<span className='dashspan'> {blogList.length} BLOGS</span></p></div>
                <p className='number-blog-dash'>Dashboard of : <span className='dashspan'>{user.name}</span></p>
                    {isLoading && <Spinner/>}
                        {Array.isArray(blogList) && blogList.map(el=>
                <div >
                       {/* card for blog created */}
                    <div className="blog-container">
                        <div className='image-blog-container'>
                                {el.img &&(<img src={el.img} alt="blog" className="blog-img" />)}
                        </div>
                            <div className='blog-content'>
                                <div className='blog-title'>
                                    <h5>{el.title}</h5>
                                </div>
                        <div className='blog-body'>
                            <p className="blog-date"> <IoCalendarNumberOutline style={{color:"#C71585" , fontSize:"14px"}}/> Published on:{el.Date}</p>
                            <p>Created by : {user.name}</p>
                            <p>{el.desc}</p>
                            <Link to={`/blog/${el._id}`}><span className='btn'>Read More</span></Link>
                        </div>
                    </div>
                    <button onClick={()=>dispatch(deleteblog(el))} className='btn-delete'><MdDelete style={{ fontSize: '22px', color: '#800080' }}/></button>
                    <button onClick={() => handleUpdateClick(el._id)} className='btn-edit'><MdEditDocument style={{ fontSize: '20px', color: '#C71585' }}/></button>
                </div>
        </div>
        )} 
            <ScolToTopButton/> 
    </div>
) 
}

export default Dashboard

