import React, {  useState} from 'react'

import { FaHeart } from "react-icons/fa";

const Heart = () => {
    const [isLiked, setIsLiked] = useState(false);
    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

  return (
    <div style={{ fontSize: '18px', color: isLiked ? 'red' : 'gray' }} onClick={handleLikeClick}>
    <FaHeart />
</div>
  )
}

export default Heart
