import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { listingDataContext } from "../context/ListingContext";
import { FaArrowLeftLong } from "react-icons/fa6";
import { authDataContext } from "../context/Authcontext";
import UpdateListing from "./UpdateListing";
import { RxCross2 } from "react-icons/rx";
import Booking from "./Booking";

const ViewDetailCard = () => {
  const [showUpdatePopUp, setShowUpdatePopUp] = useState(false);
  const [showBookingPopUp, setShowBookingPopUp] = useState(false);

  
  const { id } = useParams();

  const { loading, cardDetails, handleViewCard } =
    useContext(listingDataContext);
  const { userData } = useContext(authDataContext);
  useEffect(() => {
    if (id) {
      handleViewCard(id);
    }
  }, [id]);


  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
 if (!cardDetails) {
   return (
     <div className="w-full h-screen flex items-center justify-center">
       Listing not found
    </div>
  );
 }
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center overflow-y-auto relative py-20 ">
      <div className="fixed top-10 right-5 w-44 md:w-48 h-11 text-lg md:text-xl flex items-center justify-center bg-red-600 text-white rounded-full shadow-lg">
        Listing Your Details
      </div>
      <Link
        to="/"
        className="fixed flex w-10 h-10 text-white bg-red-600 items-center justify-center  rounded-full cursor-pointer left-5 md:left-20 top-10 hover:bg-red-500"
      >
        <FaArrowLeftLong />
      </Link>
      <div className="w-[95%] md:w-[60%] pb-5">
        <h1 className="text-[20px] text-gray-600 md:text-[30px] text-ellipsis text-nowrap overflow-hidden pt-14 font-medium">
          In, {cardDetails.landMark?.toUpperCase()},
          {cardDetails.city?.toUpperCase()}
        </h1>
      </div>
      <div className="w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[60%] md:flex-row">
        <div className="w-full h-[65%] md:w-[70%] md:h-full overflow-hidden flex items-center justify-center border-2 border-white rounded-lg">
          <img
            src={cardDetails.image1}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[35%] md:w-[30%] md:h-full flex items-center justify-center md:flex-col">
          <div className="w-full h-full md:w-full md:h-1/2 overflow-hidden flex items-center justify-center border-2 border-white rounded-lg">
            <img
              src={cardDetails.image2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full md:w-full md:h-1/2 overflow-hidden flex items-center justify-center border-2 border-white rounded-lg">
            <img
              src={cardDetails.image3}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-[95%] md:w-[60%] flex flex-col gap-3 mt-6">
        <div>
          <h2 className="text-sm md:text-base font-medium text-gray-500">
            Title
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-gray-900">
            {cardDetails.title}
          </p>
        </div>
        <div>
          <h2 className="text-sm md:text-base font-medium text-gray-500">
            Description
          </h2>
          <p className="text-base text-gray-700 leading-6">
            {cardDetails.description}
          </p>
        </div>
        <div>
          <h2 className="text-sm md:text-base font-medium text-gray-500">
            Landmark
          </h2>
          <p className="text-base md:text-lg font-medium text-gray-800">
            {cardDetails.landMark}, {cardDetails.city}
          </p>
        </div>
        <div>
          <h2 className="text-sm md:text-base font-medium text-gray-500">
            Rent
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-900">
            ₹{cardDetails.rent}
            <span className="text-sm font-normal text-gray-500"> / day</span>
          </p>
        </div>
      </div>

      <div className="w-[95%] md:w-[75%] flex items-start justify-start px-5 md:px-[110px] gap-5 md:gap-36">
        {cardDetails.host == userData._id ? (
          <button
            onClick={() => setShowUpdatePopUp((prev) => !prev)}
            className="mt-5 mb-20 py-3 px-10 md:px-20 bg-red-600 text-white rounded-lg hover:bg-red-500 flex items-center gap-2 cursor-pointer"
          >
            Edit listing
          </button>
        ) : (
          <button
            onClick={() => setShowBookingPopUp((prev) => !prev)}
            className="mt-5 mb-20 py-3 px-10 md:px-20 bg-red-600 text-white rounded-lg hover:bg-red-500 flex items-center gap-2 cursor-pointer"
          >
            Reserve
          </button>
        )}
      </div>

      {/* Update Listing Page */}
      {showUpdatePopUp && (
        <div className="fixed inset-0 w-full h-screen flex items-center justify-center z-[100] backdrop-blur-xl overflow-hidden overscroll-contain ">
          <div className="fixed top-5 right-5 md:right-16 w-44 md:w-48 h-11 text-lg md:text-xl flex items-center justify-center bg-red-600 text-white rounded-full shadow-lg">
            Update Your Details
          </div>
          <button
            onClick={() => setShowUpdatePopUp(false)}
            className="fixed top-5 md:left-16 w-10 h-10 text-lg flex items-center justify-center bg-red-600 text-white cursor-pointer hover:scale-110 transition duration-300 rounded-full left-5"
          >
            <RxCross2 />
          </button>
          <div className="border border-gray-300  w-[90%] md:w-[700px]  md:h-[85%] h-[70%] overflow-y-auto rounded-3xl p-4 bg-gray-700/75 pt-5 md:pb-0 md:pt-0 md:mb-0 mb-10">
            <UpdateListing />
          </div>
        </div>
      )}

      {/* Booking Listing Page */}
      {showBookingPopUp && (
        <Booking onClose={() => setShowBookingPopUp(false)}/>    
      )}   
    </div>
  );
};

export default ViewDetailCard;
