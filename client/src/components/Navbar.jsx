import logo from "../assets/logo.jpg";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaAirbnb, FaTreeCity } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { authDataContext } from "../context/Authcontext";
import { listingDataContext } from "../context/ListingContext";

const Navbar = () => {
  const { API, userData, setUserData } = useContext(authDataContext);
  const { listingData, setListingData, newListData, setNewListData,searchData, setSearchData,handleSearch,handleViewCard} =
    useContext(listingDataContext);

  const [showMenu, setShowMenu] = useState(false);
  const [categ, setCateg] = useState();
const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const { data } = await axios.post(
        API + "/api/auth/logout",
        {},
        {
          withCredentials: true,
        },
      );
      setUserData(null);
      setShowMenu(false);
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  //Filter category
  const handleCategory = (category) => {
    setCateg(category);
    if (category == "trending") {
      setNewListData(listingData);
    } else {
      setNewListData(listingData.filter((list) => list.category == category));
    }
  };

  useEffect(()=>{
    if (input.trim()) {
    handleSearch(input)
    }else {
    setSearchData(null);
  }
  },[input])

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white">
      <div className="w-full h-16 border-b px-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
  <FaAirbnb className="w-10 h-10 text-[#FF385C]" />
  <span className="text-2xl font-bold text-[#FF385C]">airbnb</span>
</div>
        <div className="relative  justify-center items-center hidden md:block">
          <input
          onChange={(e)=>setInput(e.target.value)}
          value={input}
            type="text"
            placeholder="Any Where | Any Location | Any City"
            className="w-96 px-6 py-2 border-2 border-gray-100 outline-none overflow-auto rounded-full "
          />
          <button className="absolute p-2 bg-red-600 right-2 rounded-full top-1/2 -translate-y-1/2">
            <IoSearch className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-4 relative">
          <Link
            to="/listingpage1"
            className="cursor-pointer rounded-full text-xl hover:bg-slate-100 px-2 py-1 hidden md:block"
          >
            List Your Home
          </Link>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="flex items-center justify-center px-5 md:py-2 py-2 gap-2 border border-gray-200 rounded-full hover:shadow-md transition duration-300"
          >
            <GiHamburgerMenu className="w-5 h-5 md:w-7 md:h-6" />
            {userData ? (
              <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center">
                {userData.name?.charAt(0).toUpperCase()}
              </span>
            ) : (
              <CgProfile className="w-7 h-7" />
            )}
          </button>
          {showMenu && (
            <div className="md:w-56 w-48 h-64 absolute top-12 md:right-14 -right-3 border border-gray-300 bg-gray-50 z-10 rounded-lg">
              <div className="flex justify-end py-2 px-2">
                <button
                  onClick={() => setShowMenu(false)}
                  className="flex items-center justify-center text-white cursor-pointer hover:scale-110 transition duration-300 rounded-full w-8 h-8 bg-red-600 "
                >
                  <RxCross2 />
                </button>
              </div>
              <ul className="flex flex-col items-start justify-around ">
                {userData ? (
                  <li
                    onClick={handleLogOut}
                    className="w-full px-4 py-3 hover:bg-gray-200 rounded cursor-pointer text-red-500"
                  >
                    Logout
                  </li>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setShowMenu(false)}
                    className="w-full px-4 py-2 hover:bg-gray-200 rounded cursor-pointer "
                  >
                    Login
                  </Link>
                )}
                <div className="w-full border"></div>
                <Link
                  to="/listingpage1"
                  onClick={() => setShowMenu(false)}
                  className="w-full px-4 py-3 hover:bg-gray-200 rounded cursor-pointer"
                >
                  List Your Home
                </Link>
                <Link
                  to="/mylisting"
                  onClick={() => setShowMenu(false)}
                  className="w-full px-4 py-3 hover:bg-gray-200 rounded cursor-pointer"
                >
                  My Listing
                </Link>
                <Link to="/mybooking"
                onClick={()=>setShowMenu(false)}
                 className="w-full px-4 py-3 hover:bg-gray-200 rounded cursor-pointer">
                  My Booking
                </Link>
              </ul>
            </div>
          )}
        </div>

{searchData?.length > 0 && (
  <div className="w-[100vw] h-[450px] flex flex-col gap-[20px] absolute md:top-[42%] top-[57%] overflow-auto left-0 justify-start items-center">
    <div className="max-w-[700px] w-[100vw] h-[300px] overflow-hidden flex flex-col bg-gray-200/95 p-[20px] rounded-lg border-[1px] border-gray-300 cursor-pointer">
      {searchData.map((search) => (
        <div  onClick={() => navigate(`/listing/${search._id}`) }
          key={search._id}
          className="border-b border-black p-[10px]"
        >
          {search.title} in {search.landMark},{search.city}
        </div>
      ))}
    </div>
  </div>
)}

      </div>
      <div className="w-full items-center justify-center  block md:hidden">
        <div className="relative w-96 mt-2 ml-3 mb-2">
          <input
          onChange={(e)=>setInput(e.target.value)}
          value={input}
            type="text"
            placeholder="Any Where | Any Location | Any City"
            className="w-96 px-6 py-2 border-2 border-gray-100 outline-none overflow-auto rounded-full "
          />
          <button className="absolute p-2 bg-red-600 right-2 rounded-full top-1/2 -translate-y-1/2 ">
            <IoSearch className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
      <div className="flex w-full mt-2 h-20 items-center gap-5 text-sm cursor-pointer overflow-x-auto px-4 md:justify-center md:px-0">
        <div
          onClick={() => {
            handleCategory("trending");
            setCateg("");
          }}
          className="flex items-center justify-center flex-col hover:border-b border-gray-200"
        >
          <MdWhatshot className="w-6 h-6 text-black" />
          <h3>Trending</h3>
        </div>
        <div
          onClick={() => handleCategory("villa")}
          className={`flex items-center justify-center flex-col hover:border-b border-gray-200 ${categ == "villa" ? "border-b border-gray-600" : ""}`}
        >
          <GiFamilyHouse className="w-6 h-6 text-black" />
          <h3>Villa</h3>
        </div>
        <div
          onClick={() => handleCategory("farmHouse")}
          className={`flex items-center justify-center flex-col hover:border-b border-gray-200 ${categ == "farmHouse" ? "border-b border-gray-600" : ""}`}
        >
          <FaTreeCity className="w-6 h-6 text-black" />
          <h3>Farm House</h3>
        </div>
        <div
          onClick={() => handleCategory("poolHouse")}
          className={`flex items-center justify-center flex-col hover:border-b border-gray-200 ${categ == "poolHouse" ? "border-b border-gray-600" : ""}`}
        >
          <MdOutlinePool className="w-6 h-6 text-black" />
          <h3>Pool House</h3>
        </div>
        <div
          onClick={() => handleCategory("rooms")}
          className={`flex items-center justify-center flex-col hover:border-b border-gray-200 ${categ == "rooms" ? "border-b border-gray-600" : ""}`}
        >
          <MdBedroomParent className="w-6 h-6 text-black" />
          <h3>Room</h3>
        </div>
        <div
          onClick={() => handleCategory("flat")}
          className={`flex items-center justify-center flex-col hover:border-b border-gray-200 ${categ == "flat" ? "border-b border-gray-600" : ""}`}
        >
          <BiBuildingHouse className="w-6 h-6 text-black" />
          <h3>Flat</h3>
        </div>
        <div
          onClick={() => handleCategory("pg")}
          className={`flex items-center justify-center flex-col hover:border-b border-gray-200 ${categ == "pg" ? "border-b border-gray-600" : ""}`}
        >
          <IoBedOutline className="w-6 h-6 text-black" />
          <h3>PG</h3>
        </div>
        <div
          onClick={() => handleCategory("cabin")}
          className={`flex items-center justify-center flex-col hover:border-b border-gray-200 ${categ == "cabin" ? "border-b border-gray-600" : ""}`}
        >
          <GiWoodCabin className="w-6 h-6 text-black" />
          <h3>Cabins</h3>
        </div>
        <div
          onClick={() => handleCategory("shop")}
          className={`flex items-center justify-center flex-col hover:border-b border-gray-200 ${categ == "shop" ? "border-b border-gray-600" : ""}`}
        >
          <SiHomeassistantcommunitystore className="w-6 h-6 text-black" />
          <h3>Shop</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
