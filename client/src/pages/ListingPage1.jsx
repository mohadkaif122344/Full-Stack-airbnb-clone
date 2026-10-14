import { useContext } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { listingDataContext } from "../context/ListingContext";

const ListingPage1 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/listingpage2");
  };

  const {
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
  } = useContext(listingDataContext);

  const handleImage1 = (e) => {
    const file = e.target.files[0];
    setBackEndImage1(file);
    setFrontEndImage1(URL.createObjectURL(file));
  };
  const handleImage2 = (e) => {
    const file = e.target.files[0];
    setBackEndImage2(file);
    setFrontEndImage2(URL.createObjectURL(file));
  };
  const handleImage3 = (e) => {
    const file = e.target.files[0];
    setBackEndImage3(file);
    setFrontEndImage3(URL.createObjectURL(file));
  };

  return (
    <div className="w-full h-dvh bg-white relative flex justify-center overflow-hidden">
      <Link
        to="/"
        className="fixed left-5 top-5 md:left-10 md:top-10 z-50 flex w-10 h-10 text-white bg-red-600 items-center justify-center rounded-full cursor-pointer hover:bg-red-500"
      >
        <FaArrowLeftLong />
      </Link>
      <div className="fixed top-5 right-5 md:top-10 md:right-5 z-50 w-40 md:w-48 h-11 text-lg md:text-xl flex items-center justify-center bg-red-600 text-white rounded-full shadow-lg">
        SetUp Your Home
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-[900px] w-full h-full flex flex-col items-center md:items-start gap-[10px] overflow-y-auto px-4 pt-28 pb-32"
      >
        <div className="flex items-start justify-start w-[90%] flex-col gap-[10px]">
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
            className="w-[90%] h-[40px] border-2 border-gray-600 rounded-lg text-[18px] px-3"
          />
        </div>

        <div className="flex items-start justify-start w-[90%] flex-col gap-[10px]">
          <label className="text-xl" htmlFor="des">
            Description
          </label>
          <textarea
            id="des"
            placeholder="description..."
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-[90%] h-[90px] border-2 border-gray-600 rounded-lg text-[18px] px-3 resize-y"
          />
        </div>

        <div className="w-[90%] flex items-start justify-center flex-col gap-[10px]">
  <label htmlFor="img1" className="text-[20px]">
    Image1
  </label>
 {frontEndImage1 && (
            <>
              <img
                src={frontEndImage1}
                alt="Image 1"
                className="w-[20%] h-[90px] object-cover rounded-lg border-2 border-gray-400 hover:border-gray-700"
              />
              <button
                type="button"
                onClick={() => {
                  setFrontEndImage1(null);
                  setBackEndImage1(null);
                }}
                className="text-red-600 text-sm hover:underline"
              >
                Remove
              </button>
            </>
          )}
  <div className="flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]">
    <input
      type="file"
      id="img1"
      className="w-[100%] text-[15px] px-[10px]"
      required
      onChange={handleImage1}
    />
  </div>
</div>
        <div className="w-[90%] flex items-start justify-center flex-col gap-[10px]">
  <label htmlFor="img1" className="text-[20px]">
    Image2
  </label>
 {frontEndImage2 && (
            <>
              <img
                src={frontEndImage2}
                alt="Image 1"
                className="w-[20%] h-[90px] object-cover rounded-lg border-2 border-gray-400 hover:border-gray-700"
              />
              <button
                type="button"
                onClick={() => {
                  setFrontEndImage2(null);
                  setBackEndImage2(null);
                }}
                className="text-red-600 text-sm hover:underline"
              >
                Remove
              </button>
            </>
          )}
  <div className="flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]">
    <input
      type="file"
      id="img2"
      className="w-[100%] text-[15px] px-[10px]"
      required
      onChange={handleImage2}
    />
  </div>
</div>
        <div className="w-[90%] flex items-start justify-center flex-col gap-[10px]">
  <label htmlFor="img1" className="text-[20px]">
    Image3
  </label>
 {frontEndImage3 && (
            <>
              <img
                src={frontEndImage3}
                alt="Image 1"
                className="w-[20%] h-[90px] object-cover rounded-lg border-2 border-gray-400 hover:border-gray-700"
              />
              <button
                type="button"
                onClick={() => {
                  setFrontEndImage3(null);
                  setBackEndImage3(null);
                }}
                className="text-red-600 text-sm hover:underline"
              >
                Remove
              </button>
            </>
          )}
  <div className="flex items-center justify-start w-[90%] h-[40px] border-[#555656] border-2 rounded-[10px]">
    <input
      type="file"
      id="img3"
      className="w-[100%] text-[15px] px-[10px]"
      required
      onChange={handleImage3}
    />
  </div>
</div>

        <div className="flex items-start justify-start w-[90%] flex-col gap-[10px]">
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
            className="w-[90%] h-[40px] border-2 border-gray-600 rounded-lg text-[18px] px-3"
          />
        </div>

        <div className="flex items-start justify-start w-[90%] flex-col gap-[10px]">
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
            className="w-[90%] h-[40px] border-2 border-gray-600 rounded-lg text-[18px] px-3"
          />
        </div>

        <div className="flex items-start justify-start w-[90%] flex-col gap-[10px]">
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
            className="w-[90%] h-[40px] border-2 border-gray-600 rounded-lg text-[18px] px-3"
          />
        </div>
        <button className="mt-2 mb-10 py-3 px-10 bg-red-600 text-white rounded-lg md:px-20 hover:bg-red-500 flex items-center gap-2">
          Next
          <FaLongArrowAltRight />
        </button>
      </form>
    </div>
  );
};

export default ListingPage1;
