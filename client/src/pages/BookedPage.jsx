import { useContext, useState } from 'react';
import { GiConfirmed } from 'react-icons/gi';
import { bookingDataContext } from '../context/BookingContext';
import { useNavigate } from 'react-router-dom';
import Star from './Star';
import { authDataContext } from '../context/Authcontext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { listingDataContext } from '../context/ListingContext';

const BookedPage = () => {

  const navigate = useNavigate()

  const {bookingData} = useContext(bookingDataContext)
  const {API,getUser} = useContext(authDataContext)
  const {getListing, cardDetails} = useContext(listingDataContext)
  const [star, setStar] = useState(null);

const handleStar = async (value) =>{
  setStar(value)
}

const handleRating = async (id)=>{
  try {
const {data} = await axios.post(API + `/api/listing/ratings/${id}`,{
  ratings:star
},{withCredentials:true})
    toast.success(data.message)
    await getListing()
    await getUser()
    navigate("/")
  } catch (error) {
    toast.error(error.response?.data?.message)
  }
}
    return (
        <div className='w-[100vw] min-h-[100vh] flex items-center justify-center gap-[10px] bg-slate-200 flex-col pt-16 pb-10'>
  <div className='w-[95%] max-w-[500px] h-[350px] bg-[white] flex items-center justify-center border-[1px] border-gray-300 flex-col gap-[20px] p-[20px] md:w-[80%] rounded-lg'>
    <div className='w-[100%] h-[50%] text-[20px] flex items-center justify-center flex-col gap-[20px] font-semibold'><GiConfirmed className="w-20 h-20 text-green-700" />
      Booking Confirmed
    </div>
    <div className='w-[100%] flex items-center justify-between text-[16px] md:text-[18px] '>
        <span>Booking Id :</span>
        <span>{bookingData._id}</span>
    </div>
    <div className='w-[100%] flex items-center justify-between text-[16px] md:text-[18px] '>
        <span>Owner Details :</span>
        <span>{bookingData.host?.email}</span>
    </div>
    <div className='w-[100%] flex items-center justify-between text-[16px] md:text-[18px] '>
        <span>Total Rent :</span>
        <span>{bookingData.totalRent}</span>
    </div>
  </div>

  <div className='w-[95%] max-w-[600px] h-[200px] bg-[white] flex items-center justify-center border-[1px] border-gray-300 flex-col gap-[20px] p-[20px] md:w-[80%] rounded-lg'>
  <h1 className='text-[18px]'>{star} out of 5 Rating</h1>

  <Star onRate={handleStar}/>

  <button onClick={()=>handleRating(cardDetails._id)}
   className='px-[30px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg text-nowrap'>
    Submit
  </button>
</div>

<button className='px-[30px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg text-nowrap absolute top-[10px] right-[100px]' onClick={()=>navigate("/")}>
  Back to Home
</button>
</div>
    );
}

export default BookedPage;
