import { FaAirbnb } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t mt-10 px-6 py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

        <div className="flex items-center gap-2">
          <FaAirbnb className="text-red-500 text-2xl" />
          <span className="text-sm text-gray-600">
            © 2026 Airbnb Clone
          </span>
        </div>

        <div className="flex gap-5 text-sm text-gray-600">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Support</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
