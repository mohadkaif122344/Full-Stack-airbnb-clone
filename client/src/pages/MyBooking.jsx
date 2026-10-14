import { useContext } from "react";
import { authDataContext } from "../context/Authcontext";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Card from "../components/Card";

const MyBooking = () => {
  const { userData } = useContext(authDataContext);
  return (
    <div className="flex w-[100vw] min-h-[100vh] flex-col gap-2 items-center justify-start ">
      <Link
        to="/"
        className="fixed z-10 flex w-10 h-10 text-white bg-red-600 items-center justify-center rounded-full cursor-pointer left-5 md:left-20 top-20 hover:bg-red-500"
      >
       <FaArrowLeftLong />
      </Link >
      <div className="fixed z-10 w-[65%] h-[8%] md:w-[500px] mt-[20px] flex flex-col items-center justify-center border-2 border-gray-400 rounded-full text-xl font-semibold bg-red-500 text-white ">MY BOOKING PAGE 
      </div>
      <div className="w-full flex items-center justify-center gap-[25px] flex-wrap pt-[210px] md:pt-[150px] pb-36">
        {userData.booking.map((list, index) => (
          <Card
            key={index}
            id={list._id}
            title={list.title}
            description={list.description}
            landMark={list.landMark}
            city={list.city}
            image1={list.image1}
            image2={list.image2}
            image3={list.image3}
            rent={list.rent}
            isBooked={list.isBooked}
            ratings={list.ratings}
            host={list.host}
          />
        ))}
      </div>
    </div>
  );
};
export default MyBooking;




