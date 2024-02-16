import { React,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signin } from '../../redux/slices/userSlice';
import "./style.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const Login = () => {
    const {isAuth ,userList} = useSelector(state => state.user)
        console.log("isAuth", isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{console.log(data);
      dispatch(signin(data))
    }
    console.log("errors", errors);

      useEffect(() => {
        if(isAuth) navigate('/')
      }, [isAuth])


  return (
  
            <form  className='containerLogin' onSubmit={handleSubmit(onSubmit)}>
              <div className='headerLogin'>
              <div className='textRegister'>SIGN IN </div>
              <div className="underlineLogin">

          </div> 
          <div className='inputsLogin'>
            <div className='inputLo'>
              <input className='inputRegister' type="email" placeholder="email" {...register("email", {required: true, max: 20, min: 10, maxLength: 30})} /><br/>
                <p>{errors.email && "email is not valid"}</p>
              <input className='inputRegister' type="password" placeholder="password" {...register("password", {required: true, max: 20, min: 6, maxLength: 12, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i})} /><br/>
                <p>{errors.password && "password is not valid"}</p> 
                </div>
                <div className='submit-container-login'>
              <input type='submit' value="SIGN IN" className='submit'/>
              <div className='socialmediaLogin'>
              <button className='buttonlogin google' ><FcGoogle  size={30}/></button>
              <button className='buttonlogin facebook'><FaGithub  size={30}/></button>
                <p>Need an acount ?<Link to="/register" className='loginlink'> SIGN UP </Link></p>
                </div>
                </div>
                </div>
                </div>
            </form>
  )
}

export default Login
