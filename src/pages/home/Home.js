import React ,{useEffect, useState}from 'react';
import "./home.css";
import petclub2 from "../../assets/petclub2.png";
import {getallblogs,setCurrentPage } from '../../redux/slices/blogSlice';
import {useDispatch , useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import ScolToTopButton from '../../components/buttonScroll/ScolToTopButton';
import ScrollToTop from '../../components/ScrollToTop'
import Heart from '../../components/Heart';
import Like from '../../components/Like';

const Home = () => {
  
            const[blogs,setBlogs]=useState([]);
            const {currentPage,numberOfPages} = useSelector((state) => ({...state.blog}))
            const {isAuth,_id,likes} = useSelector((state)=>({...state.user}));
            const userId = isAuth?.result?._id  || isAuth?.result?.googleId;
            const dispatch=useDispatch();
              useEffect(() => {
                  dispatch(getallblogs(currentPage));
                  }, [dispatch,currentPage]);
                  const blogList = useSelector(state => state.blog.blogList);
                  console.log(blogList)
                  useEffect(() => {
                    console.log("Blog List from Redux:", blogList);
                    setBlogs(blogList || []);
                  }, [blogList]);


  return (
    <div>
      <ScrollToTop/>
        <div className='image_title'>
          <img  className="imghome" src={petclub2} alt='petclub'/>
          <p className="hint--right" aria-label="Blog PET Care"><span>PET <span className='span2'>Care</span></span><br/>Nurturing Happiness, Ensuring Well-Being<br/>Keeping PET Happy and Healthy</p>
        </div>
        <div><p className='number-blog' >NUMBERS OF BLOGS: <span className='numberblogspan'>{blogs.length} BLOGS</span></p></div>
      <div className='containerCardBlog'>
        {blogs !== null && blogs.map((blog) => (
              <div className="card-container">
                  <div className='image-container'>
                      {blog.img &&(<img src={blog.img} alt="blog" className="img" />)}
                  </div>
                  <div className='card-content'>
                      <div className='card-title'>
                          <h4>{blog.title}</h4>
                      </div>
                      <div className='card-body'>
                          <p className="date">Published on:{blog.Date}</p>
                            <p className='home-p'>{blog.desc}</p> 
                      </div>
                    </div>
                    <Link to={`/blog/${blog._id}`}><span className='button'>Read More</span></Link>
                    <div className='containerIcon'>
                    <Like/> 
                    <Heart/>
              </div>
              </div>
          ))}
        </div>
        <Pagination 
          setCurrentPage={setCurrentPage}
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          dispatch={dispatch}/>
        <ScolToTopButton />
    </div>
  )
}

export default Home
