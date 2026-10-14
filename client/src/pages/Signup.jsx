import { useContext, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../context/Authcontext";
import { toast } from "react-toastify";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {API,userData,setUserData,loading,setLoading} = useContext(authDataContext);

    const handleSignup = async (e) =>{
        e.preventDefault()
        setLoading(true)
        try {
            const {data} = await axios.post(API + '/api/auth/signup',{
                name,email,password
            },{withCredentials: true})
            setUserData(data.user)
            toast.success(data.message)
            navigate('/login')
        } catch (error) {
            toast.error(error.response?.data?.message)
        }finally{
          setLoading(false)
        }
    };

  return (
    <div className="flex w-[100vw] h-[100vh] items-center justify-center">
      <Link
        to="/"
        className="flex z-10 w-10 h-10 text-white bg-red-600 items-center justify-center  rounded-full cursor-pointer absolute left-28 top-20 hover:bg-red-500"
      >
        <FaArrowLeftLong />
      </Link>
      <form onSubmit={handleSignup} className="max-w-[900px] w-[90%] h-[600px] flex items-center justify-center flex-col md:items-start gap-[10px]">
        <h1 className="text-3xl text-black">Welcom to Airbnb</h1>
        <div className="flex items-start justify-start w-[90%] flex-col gap-[10px] mt-[30px]">
          <label className="text-xl" htmlFor="name">
            Username
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-[90%] h-[40px] border-2 border-gray-400 rounded-lg text-[18px] px-3"
          />
        </div>
        <div className="flex items-start justify-start w-[90%] flex-col gap-[10px]">
          <label className="text-xl" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-[90%] h-[40px] border-2 border-gray-400 rounded-lg text-[18px] px-3"
          />
        </div>
        <div className="flex items-start justify-start w-[90%] flex-col gap-[10px] relative">
          <label className="text-xl" htmlFor="password">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            id="password"
            placeholder="Create a password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-[90%] h-[40px] border-2 border-gray-400 rounded-lg text-[18px] px-3"
          />
          {show ? (
            <IoMdEye
              onClick={() => setShow(false)}
              className="w-5 h-5 absolute right-[14%] bottom-2 cursor-pointer"
            />
          ) : (
            <IoMdEyeOff
              onClick={() => setShow(true)}
              className="w-5 h-5 absolute right-[14%] bottom-2 cursor-pointer"
            />
          )}
        </div>
        <button disabled={loading}
         className="py-2 px-10 bg-red-600 text-white  rounded-lg md:px-20">
          {loading ? "Loading...":"Signup"}
        </button>
        <Link to="/login">
          Already have an account ?
          <span className="hover:underline text-red-700 font-semibold">
            Login
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
