import { FaStar } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { FcCancel } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authDataContext } from "../context/Authcontext";
import { useState } from "react";
import { bookingDataContext } from "../context/BookingContext";

const Card = ({
  id,
  title,
  landMark,
  rent,
  city,
  image1,
  image2,
  image3,
  ratings,
  isBooked,
  host,
}) => {
  const { userData } = useContext(authDataContext);
  const {cancelBooking} = useContext(bookingDataContext)
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);


  return (
    <div className="w-[290px] max-w-[90%] h-[390px] flex items-start justify-start flex-col rounded-lg cursor-pointer relative">
      {isBooked && (
        <div className="text-green-700 bg-white rounded-lg absolute flex items-center text-[18px] justify-center right-1 top-1 gap-3 p-2">
          <GiConfirmed className="w-5 h-5 text-green-700" />
          Booked
        </div>
      )}

      {isBooked && host == userData?._id && (
        <div className="text-red-700 font-semibold bg-white rounded-lg absolute flex items-center justify-center right-1 top-14 gap-2 p-2" onClick={()=> setPopUp(prev => !prev)}>
          <FcCancel className="w-5 h-5" />
          Cancel Booking
        </div>
      )}
{popUp && (
  <div className='w-[300px] h-[100px] bg-white absolute top-[110px] left-[16px] rounded-lg'>
    <div className='w-[100%] h-[50%] text-black flex items-start justify-center rounded-lg overflow-auto text-[20px] p-[10px]'>
      Booking Cancel!
    </div>

    <div className='w-[100%] h-[50%] text-[18px] font-semibold flex items-start justify-center gap-[10px] text-amber-800'>
      Are you sure?
      <button onClick={()=>{cancelBooking(id);setPopUp(false)}}
       className='px-[20px] bg-[red] text-[white] rounded-lg hover:bg-slate-600'>
        Yes
      </button>

      <button onClick={()=> setPopUp(false)} className='px-[20px] bg-[red] text-[white] rounded-lg hover:bg-slate-600'>
        No
      </button>
    </div>
  </div>
)}
      <div
        onClick={() => (!isBooked ? navigate(`/listing/${id}`) : null)}
        className="w-[100%] h-[67%] rounded-lg overflow-auto flex "
      >
        <img src={image1} alt="" className="w-[100%] flex-shrink-0" />
        <img src={image2} alt="" className="w-[100%] flex-shrink-0" />
        <img src={image3} alt="" className="w-[100%] flex-shrink-0" />
      </div>
      <div className="w-[100%] h-[33%] py-[20px] flex flex-col gap-[2px] ">
        <div className="flex items-center justify-between text-[18px]">
          <span className="w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-gray-700 ">
            In, {landMark?.toUpperCase()} ,{city?.toUpperCase()}{" "}
          </span>
          <span className="flex items-center justify-center gap-2">
            <FaStar className="text-orange-500" />
            {ratings}
          </span>
        </div>
        <span className="text-[18px] w-[80%]  text-ellipsis text-gray-600 overflow-hidden  text-nowrap ">
          {title}
        </span>
        <span className="text-[16px] text-ellipsis overflow-hidden font-semibold text-nowrap text-gray-600">
          ₹{rent}/day
        </span>
      </div>
    </div>
  );
};

export default Card;
