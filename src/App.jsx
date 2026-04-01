import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProductListing from "./Pages/ProductListing";
import About from "./Pages/About";
import Sustainability from "./Pages/Sustainability";
import FAQ from "./Pages/FAQ";
import Incepta5ls from "./Pages/Incepta5Is";
import SizeGuide from "./Pages/SizeGuide";
import ManufacturingProcess from "./Pages/ManufacturingProcess";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/Incepta5Is" element={<Incepta5ls />} />
        <Route path="/size-guide" element={<SizeGuide />} />
        <Route
          path="/manufacturing-process"
          element={<ManufacturingProcess />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products/:category" element={<ProductListing />} />
        <Route
          path="/products/:category/:subcategory"
          element={<ProductListing />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
