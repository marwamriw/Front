import { React,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate,Link} from 'react-router-dom';
import { signup } from '../../redux/slices/userSlice';
import "./style.css";
import { FcGoogle } from "react-icons/fc";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import 'hint.css/hint.min.css';


const Register = () => {

    const {isAuth, errors: err } = useSelector(state => state.user)
      console.log("isAuth", isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);
        dispatch(signup(data))
      }
      console.log("errors", errors);

    useEffect(() => {
        if(isAuth) navigate('/')
    }, [isAuth, navigate])

    

  return (
      <form className='containerRegister' onSubmit={handleSubmit(onSubmit)}>
        <div className='headerRegister'>
          <div className='textRegister'>SIGN UP </div>
          <div className="underlineRegister">

          </div> 
          <div className='inputsRegister'>
            <div className='inputRe'>
            <input  className='inputRegister'type="text" placeholder="name" {...register("name", {required: true, min: 10, maxLength: 20})} />
            <p className='error'>{errors.name && "name is required"}</p>
            <input className='inputRegister' type="email" placeholder="email" {...register("email", {required: true, max: 20, min: 10, maxLength: 30})} />
            <p className='error'>{errors.email && "email is not valid"}</p>
            <p className='error'>{err && "email exit, please try to login"}</p>
            <input className='inputRegister' type="password" placeholder="password" {...register("password", {required: true, max: 20, min: 6, maxLength: 12, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i})} /><br/>
            <p className='error'>{errors.password && "password is not valid"}</p>
            </div>
            <div className='submit-container-register'>
            <input type='submit' className='submit' value="SIGN UP"/>
            <button className='buttonRegister google'><FcGoogle  size={32}/></button>
            <button className='buttonRegister facebook' ><FaGithub  size={32}/></button>
            <p>Already a user ?<Link to="/login" className='loginlink' > SIGN IN </Link></p>
          </div>
          </div>
        </div>
      </form>
    
  )
}

export default Register
