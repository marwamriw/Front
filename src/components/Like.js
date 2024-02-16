import React , {  useState}  from 'react'
import { BiSolidLike } from "react-icons/bi";

const Like = () => {
    const [isLiked, setIsLiked] = useState(false);
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };
  return (
    <div style={{ fontSize: '18px', color: isLiked ? 'blue' : 'gray' , marginRight:"10px" }} onClick={handleLikeClick}>
      <BiSolidLike />
    </div>
  )
}

export default Like
