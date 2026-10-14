import { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { listingDataContext } from "../context/ListingContext";

const ListingPage3 = () => {
  const {
    title,setTitle,
    description,setDescription,
    frontEndImage1,setFrontEndImage1,
    frontEndImage2,setFrontEndImage2,
    frontEndImage3,setFrontEndImage3,
    backEndImage1,setBackEndImage1,
    backEndImage2,setBackEndImage2,
    backEndImage3,setBackEndImage3,
    rent,setRent,city,setCity,landMark,setLandMark,
    handleAddListing,adding
  } = useContext(listingDataContext);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center overflow-y-auto relative py-20">
      <Link
        to="/listingpage2"
        className="fixed  left-5 top-5 md:left-10 md:top-10 z-50 flex w-10 h-10 text-white bg-red-600 items-center justify-center rounded-full cursor-pointer hover:bg-red-500"
      >
        <FaArrowLeftLong />
      </Link>
      <div className="w-[95%] md:w-[60%] mb-[10px]">
        <h1 className="text-[20px] text-gray-600 md:text-[30px] text-ellipsis text-nowrap overflow-hidden">
          {`In ${landMark?.toUpperCase()}, ${city?.toUpperCase()}`}
        </h1>
      </div>

      <div className="w-[95%] h-[400px] flex items-center justify-center flex-col md:w-[60%] md:flex-row ">
        <div className="w-full h-[65%] md:w-[70%] md:h-full overflow-hidden flex items-center justify-center border-2 border-white rounded-lg">
          <img
            src={frontEndImage1}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[35%] md:w-[30%] md:h-full flex items-center justify-center md:flex-col">
          <div className="w-full h-full md:w-full md:h-1/2 overflow-hidden flex items-center justify-center border-2 border-white rounded-lg">
            <img
              src={frontEndImage2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-full md:w-full md:h-1/2 overflow-hidden flex items-center justify-center border-2 border-white rounded-lg">
            <img
              src={frontEndImage3}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-[95%] md:w-[60%] flex flex-col gap-3">
        <div>
          <h2 className="text-sm md:text-base font-medium text-gray-500">
            Title
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-gray-900">
            {title}
          </p>
        </div>

        <div>
          <h2 className="text-sm md:text-base font-medium text-gray-500">
            Description
          </h2>
          <p className="text-xl md:text-base text-gray-700 leading-6">
            {description}
          </p>
        </div>

        <div>
          <h2 className="text-sm md:text-base font-medium text-gray-500">
            Landmark
          </h2>
          <p className="text-base md:text-lg font-medium text-gray-800">
            {landMark}, {city}
          </p>
        </div>

        <div>
          <h2 className="text-sm md:text-base font-medium text-gray-500">
            Rent
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-900">
            Rs.{rent}{" "}
            <span className="text-sm font-normal text-gray-500">/ day</span>
          </p>
        </div>
      </div>

      <div className="w-[95%] md:w-[75%] flex items-start justify-start px-[110px]">
        <button
          onClick={handleAddListing}
          disabled={adding}
          className="mt-5 mb-20 py-3 px-10 md:px-20 bg-red-600 text-white rounded-lg hover:bg-red-500 flex items-center gap-2 cursor-pointer"
        >
          {adding ? "Adding..." : "Add Listing"}
        </button>
      </div>
    </div>
  );
};

export default ListingPage3;
