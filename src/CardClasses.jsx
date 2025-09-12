import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTowishList,removeFromWishList } from "./reducx/wishListSlice";

function CardClasses({classData}) {
//     const [isActive, setIsActive] = useState(false);
// useEffect(()=>{console.log(isActive);
// },[setIsActive]
        const dispatch=useDispatch()
    const wishList=useSelector((state)=>state.wishList)
  // const isInWishList = wishList.some(item => item.id === classData.id);
  const isInWishList = Array.isArray(wishList) && wishList.some(item => item.id === classData.id)
    function toggleWishList(){
    if (isInWishList) {
      dispatch(removeFromWishList(classData.id))
      console.log("remove to wish");
      
    } else {
     dispatch(addTowishList(classData))
      console.log("add to wish");
      
    }
    }

  return (
<div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 border border-gray-400">
      <img
        src={classData.url_svg_alt}
        alt={classData.english_name}
        className="w-full h-48 object-contain"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-purple-600 mb-2">
          {classData.english_name}
        </h3>
        <p className="text-gray-600 text-md leading-relaxed">
          {classData.pose_description.slice(0,30)}...
        </p>

<div className="py-3.5 flex justify-between">
           <NavLink to={`/class/${classData.id}`} className=" mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition cursor-pointer">
          Join Class
          </NavLink>

<button 
  onClick={toggleWishList}
  className="mt-4 px-4 py-2 bg-purple-600  rounded-lg text-sm font-medium hover:bg-purple-700 transition cursor-pointer flex items-center gap-2">
<FaHeart className={isInWishList?"text-red-600":"text-white"}/>
</button>
</div>
      </div>
    </div>
    
  )
}

export default CardClasses