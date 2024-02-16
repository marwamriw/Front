import {Link ,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { logout } from '../../redux/slices/userSlice';
import {searchBlog} from '../../redux/slices/blogSlice';
import "./menu.css"
import dark from "../../assets/dark.png"
import light from "../../assets/light.png"
import petlogo from "../../assets/petlogo.png"
import { FcSearch } from "react-icons/fc";




const Menu = ({theme,setTheme}) => {
    const { isAuth,user,profilePicture } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate= useNavigate()

    const toggle_mode = ()=>{
        theme == 'light'? setTheme("dark") : setTheme("light");
    }
     //navbar sticky
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const[search,setSearch]=useState('');
      //search input
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (search.trim()){
            dispatch(searchBlog(search))
            navigate(`/search?searchQuery=${search}`)
        }else{
            navigate("/");
        }
    }

    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const stickyThreshold = 50; 
        setIsSticky(scrollPosition > stickyThreshold);
    };
        // sticky navbar
        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        const toggleMenu = () => {
            const ul = document.querySelector('ul');
            ul.classList.toggle('open');
        };
        
            useEffect(() => {
            document.querySelector('.toggle-icon').addEventListener('click', toggleMenu);
            return () => {
                document.querySelector('.toggle-icon').removeEventListener('click', toggleMenu);
            };
        }, []);

    return (
        <div className={`formnav ${isSticky ? 'sticky' : ''}`}>
            <div className='menudebut'>
            <img src={theme === "light" ? petlogo : petlogo } alt="petlogo" className='logo'/>
            <Link to="/home" className='logoTitleLink'><span className='logoTitle'>PETCARE</span></Link>
            </div> 
            <ul>
                
                {!isAuth ? <>
                        <Link to="/" className='link'><li>HOME</li></Link>
                        {/* <Link to="/register"><li>REGISTER</li></Link> */}
                        <Link to="/login"><li>Login</li></Link>
                    </> :<>
                    <Link to="/" className='link'><li>HOME</li></Link>
                    <Link to="/dashboard" ><li>DASHBOARD</li></Link>
                    <Link  to="/addblog"><li>ADD BLOG</li></Link>
                    <Link  to="/contact"><li>CONTACT</li></Link> 
                    <Link to="/login" className='linklog' onClick={() => dispatch(logout())}>LOGOUT</Link>
                    {isAuth && user && (
                    <Link  to="/profile"><span className='spanImg'><img src={profilePicture} style={{height:"30px", width:'30px',borderRadius:'50%'}} />{user.name}</span></Link>)}
                    </>
                    }
            </ul>
            <div style={{ display: 'flex', alignItems: 'center' }} className='search-box' >
            <input type='text' placeholder='Search Blog ' value={search} onChange={e=>setSearch(e.target.value)} style={{ paddingRight: '5px' }}  />
            <button onClick={handleSubmit} style={{ position: 'absolute', left: '1330px',border: 'none', background: 'transparent', cursor: 'pointer', }}><FcSearch style={{ fontSize: '2vw' }} /></button>
            </div>
            <img onClick={()=>{toggle_mode()}} src={theme =="light" ? dark : light} alt="" className='toggle-icon'/>
            
        </div>
    )
}

export default Menu
