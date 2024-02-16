import React,{useRef,useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from "firebase/storage";
import {app} from "../../firebase";
import {deleteUser,updateUser } from "../../redux/slices/userSlice";
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
    const [formData,setFormData] = useState({})
    const [imagePerCent,setImagePerCent]=useState(0);
    const [imageError,setImageError] = useState(false);

   //upload image firebase
    useEffect(()=>{
        if (image){
            handleFileUpload(image);
        }
    },[image]);
    const handleFileUpload = async(image)=>{
        const storage = getStorage(app);
        const fileName = new Date().getTime()+ image.name;  //create a unique name for the image to be stored in the firebase cloud storage bucket
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on('state_changed', (snapshot) => {
            const progress =
               (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setImagePerCent(Math.round(progress));
        },
        (error)=>{
            setImageError(true)
        },
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => 
                setFormData({...formData,profilePicture:downloadURL,_id: user._id})
        );});
    };
    const handleChange = (e) =>{
        setUpdated({...updated,[e.target.name]: e.target.value})
    }
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
                <p className='uploadMessage'>{imageError ? (
                    <span>Error uploading image (file size must be less than 2MB)</span>) : imagePerCent>0 && imagePerCent<100 ? (<span>{`uploading:  ${imagePerCent} % `}</span>)
                    : imagePerCent ===100 ? (<span>Image upload successfully</span>) : ''}
                </p>
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
