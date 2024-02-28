import React,{useRef,useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from "firebase/storage";

import {deleteUser,updateUser,getuser } from "../../redux/slices/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import './profile.css'

const Profile = () => {
    const [updated,setUpdated] = useState({})
 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fileRef = useRef(null)
    const[image,setImage] = useState(undefined)
    const {isAuth, user,profilePicture,errors} = useSelector(state => state.user)
    const [userData, setUserData] = useState(user);
    const [formData,setFormData] = useState({})
    const [imagePerCent,setImagePerCent]=useState(0);
    const [imageError,setImageError] = useState(false);

   
    const handleChange = (e) =>{
        setUpdated({...updated,[e.target.name]: e.target.value})
    }
    useEffect(() => {
        // Fetch user data when the component mounts
        dispatch(getuser());
      }, [dispatch]);
    
      // Update local state with user data when it changes
      useEffect(() => {
        setUserData(user);
      }, [user]);

      const handleUpdateUser = () => {
        // Dispatch the updateUser action and update local state
        dispatch(updateUser(userData)).then(() => {
          // Optionally, you can fetch the updated user data again after the update
          dispatch(getuser());
        });
      };
    //delete user
    const handleDeleteUser = async () => {
        try {
            await dispatch(deleteUser(user._id));
            toast.success(' User deleted successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate('/login'); // Redirect to login page
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    return (
        <div className='profileContainer'>
                <ToastContainer/>
            <h1 className='profileHeader'>PROFILE USER</h1> 
            <form className='profileForm'>
                <input  type="file" ref={fileRef} hidden accept='image/.*'
                onChange={(e)=> setImage(e.target.files[0])}
                />
                <img className='profilepic' src={formData.profilePicture || profilePicture} alt='profile picture'
                onClick={()=>fileRef.current.click()} />
                <input className='inputProfile' type='text' name='name' placeholder='User Name' defaultValue={user.name}
                onChange={handleChange}/>
                <input className='inputProfile' type='email' name='email' placeholder='Email' defaultValue={user.email}
                onChange={handleChange}/>
                <input className='inputProfile' type='password' name='password' placeholder='Password'
                onChange={handleChange}/>
                <div className='profileButton'>
                <button className='profileButton' onClick={()=>{dispatch(updateUser({...updated,_id:user._id}));
                    toast.success('User updated successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });}}><FaUserEdit  style={{fontSize:"30px", color:"green"}}/></button>
                <button className='profileButton' onClick={handleDeleteUser }> <MdDelete style={{fontSize:"30px" , color:"#a21414"}}/></button>
            </div>
            </form>
            
            <p>{errors && "something went wrong  !!!!"}</p>
        </div>
)
}

export default Profile
