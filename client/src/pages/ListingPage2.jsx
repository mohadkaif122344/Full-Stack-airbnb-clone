import { BiBuildingHouse } from "react-icons/bi";
import { FaArrowLeftLong, FaTreeCity } from "react-icons/fa6";
import { GiFamilyHouse, GiWoodCabin } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { MdBedroomParent, MdOutlinePool } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { listingDataContext } from "../context/ListingContext";

const ListingPage2 = () => {
    const navigate = useNavigate()
  const { category, setCategory } = useContext(listingDataContext);

  return (
    <div className="w-full h-dvh bg-white relative flex justify-center overflow-hidden">
      <Link
        to="/listingpage1"
        className="fixed left-5 top-5 md:left-10 md:top-10 z-50 flex w-10 h-10 text-white bg-red-600 items-center justify-center rounded-full cursor-pointer hover:bg-red-500"
      >
        <FaArrowLeftLong />
      </Link>

      <div className="fixed top-5 right-5 md:top-10 md:right-5 z-50 w-40 md:w-48 h-11 text-lg md:text-xl flex items-center justify-center bg-red-600 text-white rounded-full shadow-lg">
        Set Your Category
      </div>

      <div className="max-w-[900px] w-full h-full flex flex-col items-center overflow-y-auto px-4 pt-28 pb-32 gap-8">
        <h1 className="text-lg text-black text-center md:text-3xl">
          Which of these best describes your place?
        </h1>

        <div className="w-fit max-w-full grid grid-cols-2 md:grid-cols-3 gap-x-[15px] gap-y-[20px]">
          <div
            onClick={() => setCategory(category === "villa" ? "" : "villa")}
            className={`w-[140px] h-[100px] md:w-[180px] flex items-center justify-center flex-col cursor-pointer text-sm rounded-lg transition ${
              category === "villa"
                ? "border-2 border-red-600"
                : "border-2 border-gray-200 hover:border-slate-500"
            }`}
          >
            <GiFamilyHouse className="w-6 h-6 text-black" />
            <h3>Villa</h3>
          </div>

          <div
            onClick={() => setCategory(category === "farmHouse"?"":"farmHouse")}
            className={`w-[140px] h-[100px] md:w-[180px] flex items-center justify-center flex-col cursor-pointer text-sm rounded-lg transition ${
              category === "farmHouse"
                ? "border-2 border-red-600"
                : "border-2 border-gray-200 hover:border-slate-500"
            }`}
          >
            <FaTreeCity className="w-6 h-6 text-black" />
            <h3>Farm House</h3>
          </div>
          <div
            onClick={() => setCategory(category ==="poolHouse"?"":"poolHouse")}
            className={`w-[140px] h-[100px] md:w-[180px] flex items-center justify-center flex-col cursor-pointer text-sm rounded-lg transition ${
              category === "poolHouse"
                ? "border-2 border-red-600"
                : "border-2 border-gray-200 hover:border-slate-500"
            }`}
          >
            <MdOutlinePool className="w-6 h-6 text-black" />
            <h3>Pool House</h3>
          </div>

          <div
            onClick={() => setCategory(category ==="rooms"? "":"rooms")}
            className={`w-[140px] h-[100px] md:w-[180px] flex items-center justify-center flex-col cursor-pointer text-sm rounded-lg transition ${
              category === "rooms"
                ? "border-2 border-red-600"
                : "border-2 border-gray-200 hover:border-slate-500"
            }`}
          >
            <MdBedroomParent className="w-6 h-6 text-black" />
            <h3>Rooms</h3>
          </div>

          <div
            onClick={() => setCategory(category ==="flat"?"":"flat")}
            className={`w-[140px] h-[100px] md:w-[180px] flex items-center justify-center flex-col cursor-pointer text-sm rounded-lg transition ${
              category === "flat"
                ? "border-2 border-red-600"
                : "border-2 border-gray-200 hover:border-slate-500"
            }`}
          >
            <BiBuildingHouse className="w-6 h-6 text-black" />
            <h3>Flat</h3>
          </div>

          <div
            onClick={() => setCategory(category ==="pg"?"":"pg")}
            className={`w-[140px] h-[100px] md:w-[180px] flex items-center justify-center flex-col cursor-pointer text-sm rounded-lg transition ${
              category === "pg"
                ? "border-2 border-red-600"
                : "border-2 border-gray-200 hover:border-slate-500"
            }`}
          >
            <IoBedOutline className="w-6 h-6 text-black" />
            <h3>PG</h3>
          </div>

          <div
            onClick={() => setCategory(category ==="cabin"?"":"cabin")}
            className={`w-[140px] h-[100px] md:w-[180px] flex items-center justify-center flex-col cursor-pointer text-sm rounded-lg transition ${
              category === "cabin"
                ? "border-2 border-red-600"
                : "border-2 border-gray-200 hover:border-slate-500"
            }`}
          >
            <GiWoodCabin className="w-6 h-6 text-black" />
            <h3>Cabin</h3>
          </div>

          <div
            onClick={() => setCategory(category ==="shop"?"":"shop")}
            className={`w-[140px] h-[100px] md:w-[180px] flex items-center justify-center flex-col cursor-pointer text-sm rounded-lg transition ${
              category === "shop"
                ? "border-2 border-red-600"
                : "border-2 border-gray-200 hover:border-slate-500"
            }`}>
            <SiHomeassistantcommunitystore className="w-6 h-6 text-black" />
            <h3>Shop</h3>
          </div>
        </div>

        <button
          onClick={() => navigate("/listingpage3")}
          disabled={!category}
          className="mt-2 mb-10 py-3 px-10 bg-red-600 text-white rounded-lg md:px-20 hover:bg-red-500 flex items-center gap-2 cursor-pointer"
        >
          Next
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default ListingPage2;
