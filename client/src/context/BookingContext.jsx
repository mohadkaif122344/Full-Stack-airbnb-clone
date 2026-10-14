import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import { authDataContext } from "./Authcontext";
import { toast } from "react-toastify";
import axios from "axios";
import { listingDataContext } from "./ListingContext";
import { useNavigate } from "react-router-dom";

export const bookingDataContext = createContext();
const BookingContext = ({ children }) => {
  const [minDate, setMinDate] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [night, setNight] = useState(0);
  const [total, setTotal] = useState(0);
  const [bookingData, setBookingData] = useState([]);
const [booking, setBooking] = useState(false);

  const { API, getUser } = useContext(authDataContext);
  const { getListing } = useContext(listingDataContext);


  const navigate = useNavigate()

  const handleBooking = async (id) => {
    try {
      setBooking(true)
      const { data } = await axios.post(
        API + `/api/booking/create/${id}`,
        {
          checkIn,
          checkOut,
          totalRent: total,
        },
        {
          withCredentials: true,
        },
      );
      await getUser();
      await getListing();
      toast.success(data.message);
      navigate("/bookedpage")
      setBookingData(data.booking);
    } catch (error) {
      toast.error(error.response?.data?.message);
      setBookingData(null);
    }finally{
      setBooking(false)
    }
  };

  const cancelBooking = async (id) => {
    try {
      const { data } = await axios.delete(API + `/api/booking/cancel/${id}`, {
        withCredentials: true,
      });
      await getUser();
      await getListing();
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  const value = {
    minDate,
    setMinDate,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    night,
    setNight,
    total,
    setTotal,
    bookingData,
    setBookingData,
    handleBooking,
    cancelBooking,
    booking,
    setBooking
  };
  return (
    <bookingDataContext.Provider value={value}>
      {children}
    </bookingDataContext.Provider>
  );
};

export default BookingContext;
