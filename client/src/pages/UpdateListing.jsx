import { useContext, useState } from "react";
import { authDataContext } from "../context/Authcontext";
import DeleteListing from "./DeleteListing";
import { listingDataContext } from "../context/ListingContext";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateListing = () => {
  const navigate = useNavigate();
  const { API } = useContext(authDataContext);
  const { cardDetails, updating, setUpdating } = useContext(listingDataContext);

  const [title, setTitle] = useState(cardDetails.title);
  const [description, setDescription] = useState(cardDetails.description);
  const [backEndImage1, setBackEndImage1] = useState(null);
  const [backEndImage2, setBackEndImage2] = useState(null);
  const [backEndImage3, setBackEndImage3] = useState(null);
  const [rent, setRent] = useState(cardDetails.rent);
  const [city, setCity] = useState(cardDetails.city);
  const [landMark, setLandMark] = useState(cardDetails.landMark);

  const handleUpdateListing = async () => {
    try {
      setUpdating(true);
      const formData = new FormData();
      formData.append("title", title);
      if (backEndImage1) {
        formData.append("image1", backEndImage1);
      }
      if (backEndImage2) {
        formData.append("image2", backEndImage2);
      }
      if (backEndImage3) {
        formData.append("image3", backEndImage3);
      }
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landMark", landMark);

      const { data } = await axios.post(
        API + `/api/listing/update/${cardDetails._id}`,
        formData,
        {
          withCredentials: true,
        },
      );
      setTitle("");
      setDescription("");
      setRent("");
      setCity("");
      setLandMark("");
      setBackEndImage1(null);
      setBackEndImage2(null);
      setBackEndImage3(null);
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setUpdating(false);
    }
  };

  const handleImage1 = (e) => {
    const file = e.target.files[0];
    setBackEndImage1(file);
  };
  const handleImage2 = (e) => {
    const file = e.target.files[0];
    setBackEndImage2(file);
  };
  const handleImage3 = (e) => {
    const file = e.target.files[0];
    setBackEndImage3(file);
  };
  return (
    <div>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="max-w-[900px] w-full h-full flex flex-col items-centermd:items-start gap-[10px]  px-4 pt-5 pb-3"
      >
        <div className="flex  items-start justify-start w-[100%] flex-col gap-[10px] text-white">
          <label className="text-xl" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="title..."
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="w-[100%] h-[40px] border-2 border-gray-600 text-gray-500 rounded-lg text-[18px] px-3"
          />
        </div>

        <div className="flex items-start justify-start w-[100%] flex-col gap-[10px] text-white">
          <label className="text-xl" htmlFor="des">
            Description
          </label>
          <textarea
            id="des"
            placeholder="description..."
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-[100%] h-[90px] border-2 border-gray-600 text-gray-500 rounded-lg text-[18px] px-3 resize-y"
          />
        </div>

        <div className="w-[100%] flex items-start justify-center flex-col gap-[10px] text-white">
          <label htmlFor="img1" className="text-[20px]">
            Image1
          </label>
          <div className="flex items-center justify-start w-[100%] h-[40px] border-gray-500 text-gray-300 border-2 rounded-[10px]">
            <input
              type="file"
              id="img1"
              className="w-[100%] text-[15px] px-[10px]"
              onChange={handleImage1}
            />
          </div>
        </div>
        <div className="w-[100%] flex items-start justify-center flex-col gap-[10px] text-white">
          <label htmlFor="img1" className="text-[20px]">
            Image2
          </label>

          <div className="flex items-center justify-start w-[100%] h-[40px] border-gray-500 text-gray-300 border-2 rounded-[10px]">
            <input
              type="file"
              id="img2"
              className="w-[100%] text-[15px] px-[10px]"
              onChange={handleImage2}
            />
          </div>
        </div>
        <div className="w-[100%] flex items-start justify-center flex-col gap-[10px] text-white">
          <label htmlFor="img1" className="text-[20px]">
            Image3
          </label>
          <div className="flex items-center justify-start w-[100%] h-[40px] border-gray-500 text-gray-300 border-2 rounded-[10px]">
            <input
              type="file"
              id="img3"
              className="w-[100%] text-[15px] px-[10px]"
              onChange={handleImage3}
            />
          </div>
        </div>

        <div className="flex items-start justify-start w-[100%] flex-col gap-[10px] text-white">
          <label className="text-xl" htmlFor="rent">
            Rent
          </label>
          <input
            type="number"
            id="rent"
            placeholder="rent/day..."
            required
            onChange={(e) => setRent(e.target.value)}
            value={rent}
            className="w-[100%] h-[40px] border-2 border-gray-600 text-gray-600 rounded-lg text-[18px] px-3"
          />
        </div>

        <div className="flex items-start justify-start w-[100%] flex-col gap-[10px] text-white">
          <label className="text-xl" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="city..."
            required
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className="w-[100%] h-[40px] border-2 border-gray-600 text-gray-500 rounded-lg text-[18px] px-3"
          />
        </div>

        <div className="flex items-start justify-start w-[100%] flex-col gap-[10px] text-white">
          <label className="text-xl" htmlFor="landmark">
            Landmark
          </label>
          <input
            type="text"
            id="landmark"
            placeholder="landmark..."
            required
            onChange={(e) => setLandMark(e.target.value)}
            value={landMark}
            className="w-[100%] h-[40px] border-2 border-gray-600 text-gray-500 rounded-lg text-[18px] px-3"
          />
        </div>
        <div className="flex gap-10 mt-5 md:gap-24">
          <button
            onClick={handleUpdateListing}
            disabled={updating}
            className="mt-2 mb-10 text-white rounded-lg md:px-20  flex items-center py-2 px-3 hover:bg-red-500 bg-red-600"
          >
            {updating ? "updating..." : "Update Listing"}
          </button>
          <DeleteListing />
        </div>
      </form>
    </div>
  );
};

export default UpdateListing;
