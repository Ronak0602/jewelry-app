import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Footer() {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);

  const companyLinks = [
    { label: "Home", path: "/" },
    { label: "Our Story", path: "/about" },
    { label: "FAQ", path: "/faq" },
    { label: "My Wishlist", path: "/wishlist" },
    { label: "Manufacturing Process", path: "/manufacturing-process" },
  ];

  const accountLinks = [
    { label: "My Account", path: "/login" },
    { label: "My Cart", path: "/cart" },
    { label: "Checkout", path: "/login" },
    { label: "My Wishlist", path: "/wishlist" },
    { label: "Tracking Order", path: "/" },
  ];

  const helpLinks = [
    { label: "Contact Us" },
    { label: "Book an Appointment" },
    { label: "Size Guide", path: "/size-guide" },
    { label: "Privacy Policy" },
    { label: "Delivery & Returns" },
    { label: "Terms & Conditions" },
  ];

  const contactInfo = [
    { label: "Phone", value: "+ 91 8718-8718-00" },
    { label: "Email", value: "contact@inceptajewels.com" },
    {
      label: "Location",
      value:
        "Aaron Spectra 210, Rajpath Rangoli Rd, Bodakdev, Ahmedabad, Gujarat 380054",
    },
  ];

  const mobileSections = [
    { key: "company", title: "Company", items: companyLinks },
    { key: "account", title: "My Account", items: accountLinks },
    { key: "help", title: "Help", items: helpLinks },
    { key: "contact", title: "Contact", items: contactInfo, isContact: true },
  ];

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
        <div className="flex flex-col sm:flex-row w-full max-w-[250px] md:max-w-lg mx-auto rounded-lg">
          <input
            type="email"
            placeholder="Enter your email here .."
            className="w-full sm:flex-1 h-8 px-6 text-[13px] rounded-lg font-serif tracking-widest focus:outline-none"
          />
          <button className="w-full sm:w-auto h-8 mt-2 sm:mt-1 bg-gray-200 px-6 hover:text-white text-xs font-semibold transition duration-300 border border-gray-300 rounded">
            Get Subscribed!
          </button>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden px-4 pt-2">
        <div className="flex flex-col items-center">
          <img
            src="https://inceptajewels.com/images/size_popup05.png"
            alt="Incepta"
            className="h-40 w-40 object-contain"
          />
          <div className="flex gap-3 mt-2 mb-4">
            {["instagram", "twitter", "linkedin", "facebook", "youtube"].map(
              (s) => (
                <div
                  key={s}
                  className="w-8 h-8 bg-gray-400 text-white flex items-center justify-center cursor-pointer"
                >
                  <i className={`fab fa-${s} text-xs`}></i>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="space-y-1 text-left">
          {mobileSections.map((section) => {
            const isOpen = openSection === section.key;
            return (
              <div key={section.key} className="border-b border-gray-300">
                <button
                  type="button"
                  onClick={() =>
                    setOpenSection((prev) =>
                      prev === section.key ? null : section.key,
                    )
                  }
                  className="w-full py-3 flex items-center justify-between text-base text-gray-900"
                >
                  <span>{section.title}</span>
                  <span className="text-base">{isOpen ? "-" : "⌄"}</span>
                </button>

                {isOpen && (
                  <div className="pb-3 text-xs text-gray-600 space-y-2">
                    {section.isContact
                      ? section.items.map((item) => (
                          <div key={item.label}>
                            <p className="font-semibold text-black">
                              {item.label}
                            </p>
                            <p>{item.value}</p>
                          </div>
                        ))
                      : section.items.map((item) => (
                          <p
                            key={item.label}
                            onClick={() => item.path && navigate(item.path)}
                            className="cursor-pointer hover:text-black"
                          >
                            {item.label}
                          </p>
                        ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 mb-6 border border-gray-200 bg-white rounded-lg px-4 py-4 text-xs text-gray-600 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span>We Accept</span>
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
          <p>
            © 2026, <span className="font-bold">incepta jewels</span> All Rights
            Reserved
          </p>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:grid md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-between px-6 md:px-16 lg:px-48 text-xs pt-2 gap-6">
        {/* Logo & Social */}
        <div className="flex flex-col gap-2">
          <img
            src="https://inceptajewels.com/images/size_popup05.png"
            alt="Incepta"
            className="h-40 w-40 ml-0 md:ml-8 object-contain"
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
      <div className="hidden md:flex flex-col sm:flex-row items-center justify-between mx-4 md:mx-32 mb-3 mt-10 md:mt-20 py-4 border border-gray-200 bg-white rounded-lg text-xs text-gray-600 px-4 md:px-16 gap-3">
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
