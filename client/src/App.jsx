import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useContext } from "react";
import { authDataContext } from "./context/Authcontext";
import ListingPage1 from "./pages/ListingPage1";
import ListingPage2 from "./pages/ListingPage2";
import ListingPage3 from "./pages/ListingPage3";
import ProtectRoute from "./components/ProtectRoute";
import MyListing from "./pages/MyListing";
import ViewDetailCard from "./pages/ViewDetailCard";
import MyBooking from "./pages/MyBooking";
import BookedPage from "./pages/BookedPage";
import Footer from "./components/Footer";

const App = () => {
  const { loading } = useContext(authDataContext);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/listingpage1"
          element={
            <ProtectRoute>
              <ListingPage1 />
            </ProtectRoute>
          }
        />
        <Route
          path="/listingpage2"
          element={
            <ProtectRoute>
              <ListingPage2 />
            </ProtectRoute>
          }
        />
        <Route
          path="/listingpage3"
          element={
            <ProtectRoute>
              <ListingPage3 />
            </ProtectRoute>
          }
        />
        <Route
          path="/mylisting"
          element={
            <ProtectRoute>
              <MyListing />
            </ProtectRoute>
          }
        />
        <Route
          path="/listing/:id"
          element={
            <ProtectRoute>
              <ViewDetailCard />
            </ProtectRoute>
          }
        />
        <Route
          path="/mybooking"
          element={
            <ProtectRoute>
              <MyBooking />
            </ProtectRoute>
          }
        />
        <Route
          path="/bookedpage"
          element={
            <ProtectRoute>
              <BookedPage />
            </ProtectRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
