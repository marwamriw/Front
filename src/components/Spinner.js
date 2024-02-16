import React,{ useState, useEffect } from 'react';
import FadeLoader from "react-spinners/FadeLoader";


const Spinner = () => {

    const [loading, setLoading] = useState(false);
        useEffect(()=>{
            setLoading(true)
            setTimeout(()=>{
                setLoading(false)
            },5000)
        },[])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <FadeLoader
                        color={'#e58a7b'}
                        loading={loading}
                        size={40}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    /> 
        </div>
    )
}

export default Spinner
