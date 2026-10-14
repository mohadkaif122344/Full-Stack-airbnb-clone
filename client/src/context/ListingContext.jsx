import { createContext, useContext, useState } from "react";
import { authDataContext } from "./Authcontext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const listingDataContext = createContext();

const ListingContext = ({ children }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frontEndImage1, setFrontEndImage1] = useState(null);
  const [frontEndImage2, setFrontEndImage2] = useState(null);
  const [frontEndImage3, setFrontEndImage3] = useState(null);
  const [backEndImage1, setBackEndImage1] = useState(null);
  const [backEndImage2, setBackEndImage2] = useState(null);
  const [backEndImage3, setBackEndImage3] = useState(null);
  const [rent, setRent] = useState("");
  const [city, setCity] = useState("");
  const [landMark, setLandMark] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [listingData, setListingData] = useState([]);
const [newListData, setNewListData] = useState([]);
const [cardDetails, setCardDetails] = useState(null);
const [searchData, setSearchData] = useState([]);


  const { API } = useContext(authDataContext);

  const handleAddListing = async () => {
    try {
      setAdding(true)
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image1", backEndImage1);
      formData.append("image2", backEndImage2);
      formData.append("image3", backEndImage3);
      formData.append("description", description);
      formData.append("rent", rent);
      formData.append("city", city);
      formData.append("landMark", landMark);
      formData.append("category", category);

      const { data } = await axios.post(API + "/api/listing/add", formData, {
        withCredentials: true,
      });
      navigate("/");
      setTitle("");
      setDescription("");
      setRent("");
      setCity("");
      setLandMark("");
      setCategory("");
      setBackEndImage1(null);
      setBackEndImage2(null);
      setBackEndImage3(null);
      setFrontEndImage1(null);
      setFrontEndImage2(null);
      setFrontEndImage3(null);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setAdding(false);
    }
  };

const handleViewCard = async (id) => {
  try {
    setAdding(true);
    const { data } = await axios.get(
      API + `/api/listing/findlistingbyid/${id}`,
      {
        withCredentials: true,
      }
    );
    setCardDetails(data.listing);
  } catch (error) {
    toast.error(error.response?.data?.message);
    setCardDetails(null);
  } finally {
    setAdding(false);
  }
};

  const getListing = async () => {
    try {
      const {data} = await axios.get(API + "/api/listing/get", {
        withCredentials: true,
      });
      setListingData(data.listing);
      setNewListData(data.listing)
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const handleSearch = async (input) => {
    try {
       const {data} = await axios.get(API + `/api/listing/search?query=${input}`);
      setSearchData(data.listing)
    } catch (error) {
      setSearchData(null)
      toast.error(error.response?.data?.message);
    }
  }

  useEffect(() => {
  getListing();
}, [adding, updating]);

  const value = {
    title,
    setTitle,
    description,
    setDescription,
    frontEndImage1,
    setFrontEndImage1,
    frontEndImage2,
    setFrontEndImage2,
    frontEndImage3,
    setFrontEndImage3,
    backEndImage1,
    setBackEndImage1,
    backEndImage2,
    setBackEndImage2,
    backEndImage3,
    setBackEndImage3,
    rent,
    setRent,
    city,
    setCity,
    landMark,
    setLandMark,
    category,
    setCategory,
    handleAddListing,
    loading,
    setLoading,
    listingData,
    setListingData,
    getListing,
    newListData, 
    setNewListData,
    handleViewCard,
    cardDetails,
    adding,
    setAdding,
    updating,
    setUpdating,
    searchData, setSearchData,
    handleSearch
  };
  return (
    <div>
      <listingDataContext.Provider value={value}>
        {children}
      </listingDataContext.Provider>
    </div>
  );
};

export default ListingContext;
