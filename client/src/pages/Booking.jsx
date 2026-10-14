import { useContext, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { listingDataContext } from "../context/ListingContext";
import { FaStar } from "react-icons/fa6";
import { bookingDataContext } from "../context/BookingContext";

const Booking = ({ onClose }) => {
  const {
    minDate,
    setMinDate,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,night, setNight,
total, setTotal,handleBooking,booking,
    setBooking
  } = useContext(bookingDataContext);

  const { cardDetails } = useContext(listingDataContext);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
  }, []);

  useEffect(()=>{
if (checkIn && checkOut) {
    const inDate = new Date(checkIn)
    const outDate = new Date(checkOut)
    const n = (outDate - inDate) / (24*60*60*1000)
    setNight(n)
    const airBnbCharge  = (cardDetails.rent*(7/100))
    const tex = (cardDetails.rent*(7/100))

    if (n>0) {
        setTotal((cardDetails.rent * n ) + airBnbCharge + tex)
    }
    else{
        setTotal(0)
    }
}
  },[checkIn,checkOut,cardDetails,cardDetails?.rent,total])

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden backdrop-blur-xl overscroll-contain">
      <div className="fixed top-5 right-5 md:right-16 z-20 w-44 md:w-48 h-11 text-lg md:text-xl flex items-center justify-center bg-red-600 text-white rounded-full shadow-lg">
        Booking Page
      </div>
      <button
        type="button"
        onClick={onClose}
        className="fixed top-5 left-5 md:left-16 z-20 w-10 h-10 text-lg flex items-center justify-center bg-red-600 text-white cursor-pointer hover:scale-110 transition duration-300 rounded-full"
      >
        <RxCross2 />
      </button>
      <div className="absolute inset-0 z-0 overflow-y-auto overscroll-y-contain">
        <div className="min-h-full w-full flex items-center justify-start md:justify-center flex-col md:flex-row gap-5 md:gap-20 p-5 pt-24 md:pt-20 pb-40 md:fixed">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-[450px] min-h-[450px] shrink-0 bg-gray-100/75 p-5 rounded-lg flex items-center justify-start flex-col gap-[10px] border border-gray-400"
          >
            <h1 className="w-full flex items-center justify-center py-[10px] text-[25px] border-b border-gray-400 ">
              Confirm & Book
            </h1>

            <div className="w-full mt-[10px] rounded-lg p-[10px]">
              <h3 className="text-[19px] font-semibold">
                Your Trip -
              </h3>

              <div className="w-full flex items-center justify-center mt-5 flex-col md:flex-row gap-5 pb-4">
                <label
                  htmlFor="checkIn"
                  className="text-[18px] md:text-[20px] "
                >
                  CheckIn:
                </label>

                <input
                  type="date"
                  id="checkIn"
                  min={minDate}
                  value={checkIn}
                  onChange={(e) =>
                    setCheckIn(e.target.value)
                    }
                  className="border-gray-400 border-2 w-[200px] h-[40px] rounded-[10px] bg-transparent px-[10px] text-[15px] md:text-[18px] cursor-pointer"
                  required
                />
              </div>

              <div className="w-full flex items-center justify-center mt-5 flex-col md:flex-row gap-[10px] pb-4">
                <label
                  htmlFor="checkOut"
                  className="text-[18px] md:text-[20px] "
                >
                  CheckOut:
                </label>

                <input
                  type="date"
                  id="checkOut"
                  min={minDate}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="border-gray-400 border-2 w-[200px] h-[40px] rounded-[10px] bg-transparent px-[10px] text-[15px] md:text-[18px] cursor-pointer"
                  required
                />
              </div>

              <div className="flex items-center justify-center">
                <button onClick={() => handleBooking(cardDetails._id)}
                disabled={booking}
                  className="mt-10 mb-5 py-2 px-10 bg-red-600 text-white rounded-lg hover:bg-red-500 cursor-pointer"
                >
                  {booking?"Booking":"Book Now"}
                </button>
              </div>
            </div>
          </form>
          <div className="w-full max-w-[450px] min-h-[450px] shrink-0 bg-gray-100/70 p-5 rounded-lg flex items-center justify-start flex-col gap-[10px] border border-gray-400 ">

            <div className="w-[95%] min-h-[150px] border border-gray-400 rounded-lg flex justify-center items-center gap-2 p-3 md:p-5 overflow-hidden">

              <div className="w-[70px] h-[90px] flex items-center justify-center shrink-0 rounded-lg md:w-[100px] md:h-[100px]">
                <img
                  src={cardDetails.image1}
                  alt={cardDetails.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex-1 min-w-0 min-h-[100px] rounded-lg">
                <h1 className="w-full truncate text-sm md:text-base">
                  {`IN, ${cardDetails.landMark?.toUpperCase()}, ${cardDetails.city?.toUpperCase()}`}
                </h1>

                <h1 className="font-semibold break-words text-gray-700">
                  {cardDetails.title?.toUpperCase()}
                </h1>

                <h1 className="text-sm">
                  {cardDetails.category?.toUpperCase()}
                </h1>

                <h1 className="flex items-center justify-start gap-[5px]">
                  <FaStar className="text-orange-500"/>
                  {cardDetails.ratings}
                </h1>

                <h1 className="mt-2 font-semibold text-gray-600">
                  ₹{cardDetails.rent}/day
                </h1>
              </div>
            </div>
            <div className="w-[95%] min-h-[200px] border border-gray-400 rounded-lg flex justify-start items-start p-5 gap-[15px] flex-col">
                <div className="w-full flex justify-between gap-3">
                <span>Check-in :</span>
                <span>{checkIn}</span>
              </div>
              <div className="w-full flex justify-between gap-3">
                <span>Check-out :</span>
                <span>{checkOut}</span>
              </div>
              <h1 className="text-lg font-semibold">Booking Price - </h1>
              <p className="w-full flex justify-between gap-3">
                <span>₹{cardDetails.rent} × {night} night</span>
                <span>₹{cardDetails.rent*night}</span>
              </p>
              <p className="w-full flex justify-between gap-3">
                <span>Text</span>
                <span>{cardDetails.rent*7/100}</span>
              </p>
              <p className="w-full flex justify-between gap-3 pb-3 border-b-2">
                <span>Airbnb charge</span>
                <span>{cardDetails.rent*7/100}</span>
              </p>
              <p className="w-full flex justify-between gap-3">
                <span className="font-bold text-xl">Total Price</span>
                <span>{total}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
