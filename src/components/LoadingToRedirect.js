import React,{useState,useEffect} from 'react';
import{useNavigate} from 'react-router-dom';


const LoadingToRedirect = () => {

    const [count,setCount]= useState(5);  
    const navigate=useNavigate();
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount((currentCount)=> --currentCount)
        },1000);
        if (count === 0) {
            clearInterval(interval);
            navigate("/register"); 
        } 
        return()=>clearInterval(interval);     
    },[count,navigate])

    return (
        <div>
            <h5>REDIRECTING YOU IN {count} SECONDS</h5>
        </div>
    )
}

export default LoadingToRedirect
