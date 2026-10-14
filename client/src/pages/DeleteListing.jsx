import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { authDataContext } from "../context/Authcontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { listingDataContext } from "../context/ListingContext";

const DeleteListing = () => {

  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();
  const { API } = useContext(authDataContext);
  const {cardDetails, setCardDetails } =
    useContext(listingDataContext);

  const handleDeleteListing = async () => {
    try {
      setDeleting(true);
      const { data } = await axios.delete(
        API + `/api/listing/delete/${cardDetails._id}`,
        {
          withCredentials: true,
        },
      );
      toast.success(data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleDeleteListing}
        disabled={deleting}
        className="mt-2 mb-10 py-2 px-3 bg-red-600 text-white rounded-lg md:px-20 hover:bg-red-500 flex items-center "
      >
        {deleting ? "Deleting" : "Delete Listing"}
      </button>
    </div>
  );
};

export default DeleteListing;
