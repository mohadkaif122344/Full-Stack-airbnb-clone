import { FaAirbnb, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="border-t mt-16 bg-gray-50 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaAirbnb className="text-red-500 text-3xl" />
              <h2 className="text-xl font-bold text-gray-900">
                Airbnb Clone
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-600">
              Discover unique homes, comfortable stays, and amazing
              destinations. Find your perfect place and make every
              trip memorable.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li onClick={() => navigate("/")}
  className="cursor-pointer hover:text-red-500 hover:underline transition-all duration-200">Home</li>
              <li onClick={() => navigate("/listingpage1")}
  className="cursor-pointer hover:text-red-500 hover:underline transition-all duration-200">List Your Home</li>
              <li onClick={() => navigate("/mylisting")}
  className="cursor-pointer hover:text-red-500 hover:underline transition-all duration-200">My Listing</li>
              <li
  onClick={() => navigate("/mybooking")}
  className="cursor-pointer hover:text-red-500 hover:underline transition-all duration-200"
>
  My Bookings
</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Follow Us
            </h3>

            <p className="text-sm text-gray-600 leading-6 mb-4">
              Stay connected for travel inspiration and updates.
            </p>

            <div className="flex items-center gap-4 text-xl">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© 2026 Airbnb Clone. All rights reserved.</p>

          <div className="flex gap-5">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Support</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
