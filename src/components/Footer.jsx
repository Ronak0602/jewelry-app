import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#f8f8f4]">
      {/* Subscribe Section */}
      <div className="text-center py-10 md:py-20 px-4 md:px-10">
        <h3 className="text-sm md:text-lg font-semibold mb-4">
          <span className="text-gray-400 tracking-widest">Stay Updated :</span>{" "}
          <span className="font-bold tracking-widest">
            Subscribe For Incepta Jewels News And Exclusive Offers
          </span>
        </h3>
        <div className="flex flex-col sm:flex-row max-w-xl mx-auto border border-gray-100 rounded-lg bg-white">
          <input
            type="email"
            placeholder="Enter your email here .."
            className="flex-1 px-9 py-3 text-xs rounded-lg font-sans tracking-widest focus:outline-none"
          />
          <button className="bg-gray-200 px-6 py-2 hover:text-white text-xs font-bold transition duration-300 border border-gray-300 m-1">
            Get Subscribed!
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-between px-6 md:px-16 lg:px-48 text-xs pt-2 gap-6">
        {/* Logo & Social */}
        <div className="flex flex-col gap-2">
          <img
            src="https://inceptajewels.com/images/size_popup05.png"
            alt="Incepta"
            className="h-40 w-40 ml-0 md:ml-12 object-contain"
          />
          <div className="flex gap-3 mt-3">
            {["instagram", "twitter", "linkedin", "facebook", "youtube"].map(
              (s) => (
                <div
                  key={s}
                  className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400"
                >
                  <i className={`fab fa-${s} text-sm text-gray-600`}></i>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <div className="w-16 border-b border-gray-300 mb-1"></div>
          {[
            { label: "Home", path: "/" },
            { label: "Our Story", path: "/about" },
            { label: "FAQ", path: "/faq" },
            { label: "My Wishlist", path: "/wishlist" },
            { label: "Manufacturing Process", path: "/manufacturing-process" },
          ].map((item) => (
            <p
              key={item.label}
              onClick={() => navigate(item.path)}
              className="text-xs text-gray-600 hover:text-black cursor-pointer mb-2"
            >
              {item.label}
            </p>
          ))}
        </div>

        {/* My Account */}
        <div>
          <h4 className="font-semibold mb-3 ">My Account</h4>
          <div className="w-16 border-b border-gray-300 mb-1"></div>
          {[
            { label: "My Account", path: "/login" },
            { label: "My Cart", path: "/cart" },
            { label: "Checkout", path: "/login" },
            { label: "My Wishlist", path: "/wishlist" },
            { label: "Tracking Order", path: "/" },
          ].map((item) => (
            <p
              key={item.label}
              onClick={() => navigate(item.path)}
              className="text-xs text-gray-600 hover:text-black cursor-pointer mb-2"
            >
              {item.label}
            </p>
          ))}
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold mb-3">Help</h4>
          <div className="w-16 border-b border-gray-300 mb-1"></div>
          {[
            "Contact Us",
            "Book an Appointment",
            { label: "Size Guide", path: "/size-guide" },
            "Privacy Policy",
            "Delivery & Returns",
            "Terms & Conditions",
          ].map((item) => (
            <p
              key={item.label || item}
              onClick={() => item.path && navigate(item.path)}
              className="text-xs text-gray-600 hover:text-black cursor-pointer mb-1"
            >
              {item.label || item}
            </p>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold">Contact</h4>
          <div className="w-16 border-b border-gray-300 mb-3"></div>
          <div className="flex flex-col gap-1 text-xs text-gray-600">
            <div className="flex items-start gap-2">
              <i className="fas fa-phone mt-1"></i>
              <div>
                <p className="font-semibold text-black">Phone</p>
                <p>+ 91 8718-8718-00</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <i className="fas fa-envelope mt-1"></i>
              <div>
                <p className="font-semibold text-black">Email</p>
                <p>contact@inceptajewels.com</p>
              </div>
            </div>
            <div className="flex items-start gap-2 pb-4">
              <i className="fas fa-map-marker-alt mt-1"></i>
              <div>
                <p className="font-semibold text-black">Location</p>
                <p className="max-w-xs">
                  Aaron Spectra 210, Rajpath Rangoli Rd,
                  <br /> Bodakdev, Ahmedabad,Gujarat
                  <br />
                  380054
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between mx-4 md:mx-32 mb-3 mt-10 md:mt-20 py-4 border border-gray-200 bg-white rounded-lg text-xs text-gray-600 px-4 md:px-16 gap-3">
        <p>
          © 2026, <span className="font-bold">incepta jewels</span> All Rights
          Reserved
        </p>
        <div className="flex items-center gap-3">
          <span>We Accept :</span>
          <img
            src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/upi.CmgCfll8.svg"
            className="h-6"
            alt="UPI"
          />
          <img
            src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg"
            className="h-6"
            alt="Visa"
          />
          <img
            src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/master.CzeoQWmc.svg"
            className="h-6"
            alt="Mastercard"
          />
          <img
            src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/rupay.Bl62X6PG.svg"
            className="h-6"
            alt="Rupay"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
