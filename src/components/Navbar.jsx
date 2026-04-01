import { useState } from "react";
import { useNavigate } from "react-router-dom";

const menuItems = {
  Rings: ["By Category", "All Rings", "Bands", "Solitaire", "Cocktail"],
  Earrings: ["By Category", "All Earrings", "Studs", "Drops", "Bali", "Hoops"],
  Bracelets: ["By Category", "All Bracelets", "Tennis", "Stiff"],
  Pendants: ["By Category", "All Pendants", "Everyday wear", "Solitaire"],
  Necklaces: ["By Category", "All Necklaces", "Necklace Sparkle"],
  About: [
    "Our Story",
    "Sustainability",
    "FAQ",
    "Incepta 5Is",
    "Size Guide",
    "Manufacturing Process",
  ],
};

function Navbar() {
  const navigator = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const handleNavigate = (item, subItem) => {
    if (item === "About") {
      const routes = {
        "Our Story": "/about",
        Sustainability: "/sustainability",
        FAQ: "/faq",
        "Incepta 5Is": "/Incepta5Is",
        "Size Guide": "/size-guide",
        "Manufacturing Process": "/manufacturing-process",
      };
      navigator(routes[subItem] || "/about");
    } else {
      const categoryRoutes = {
        "By Category": `/products/${item.toLowerCase()}`,
        "All Rings": "/products/rings",
        "All Earrings": "/products/earrings",
        "All Bracelets": "/products/bracelets",
        "All Pendants": "/products/pendants",
        "All Necklaces": "/products/necklace",
        Bands: "/products/rings/bands",

        Cocktail: "/products/rings/cocktail",
        Studs: "/products/earrings/studs",
        Drops: "/products/earrings/drops",
        Bali: "/products/earrings/bali",
        Hoops: "/products/earrings/hoops",
        Tennis: "/products/bracelets/tennis",
        Stiff: "/products/bracelets/stiff",
        "Everyday wear": "/products/pendants/everyday-wear",

        "Necklace Sparkle": "/products/necklaces/necklace-sparkle",
      };

      if (subItem === "Solitaire") {
        navigator(
          item === "Rings"
            ? "/products/rings/solitaire"
            : "/products/pendants/solitaire",
        );
        setMobileOpen(false);
        return;
      }

      navigator(categoryRoutes[subItem] || `/products/${item.toLowerCase()}`);
    }
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* ── Desktop + Mobile Top Bar ── */}
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        {/* Hamburger - mobile only */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden flex flex-col gap-1.5 cursor-pointer ml-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
          <div
            className="text-2xl md:text-4xl font-sans tracking-widest cursor-pointer"
            onClick={() => navigator("/")}
          >
            INCEPTA
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {Object.keys(menuItems).map((item) => (
            <div
              key={item}
              className="relative pt-1"
              onMouseEnter={() => setActiveMenu(item)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-gray-500 text-base font-normal tracking-wider">
                <span>{item}</span>
                <i className="fas fa-chevron-down text-xs mt-0.5"></i>
              </div>
              {activeMenu === item && (
                <div className="absolute top-full left-0 w-44 bg-white border border-gray-200 shadow-lg z-50">
                  {menuItems[item].map((subItem) => (
                    <div
                      key={subItem}
                      onClick={() => handleNavigate(item, subItem)}
                      className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Search - desktop only */}
          <div className="hidden md:flex items-center border border-gray-300 px-3 py-1.5 rounded-sm gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-sm font-light outline-none w-40 md:w-56 placeholder-gray-400"
            />
          </div>

          {/* Search icon - mobile only */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:hidden cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>

          {/* Account */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer hover:text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => navigator("/login")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
            />
          </svg>

          {/* Wishlist */}
          <div
            className="relative cursor-pointer hover:text-gray-500"
            onClick={() => navigator("/wishlist")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 text-xs bg-white text-black">
              0
            </span>
          </div>

          {/* Cart */}
          <div
            className="relative cursor-pointer hover:text-gray-500"
            onClick={() => navigator("/cart")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 text-xs bg-white text-black">
              0
            </span>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 pb-6">
          {/* Mobile Search */}
          <div className="flex items-center border border-gray-300 px-3 py-2 rounded-sm gap-2 my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-sm outline-none w-full placeholder-gray-400"
            />
          </div>

          {/* Mobile Menu Items */}
          {Object.keys(menuItems).map((item) => (
            <div key={item} className="border-b border-gray-100">
              <button
                className="w-full flex items-center justify-between py-3 text-sm font-medium tracking-wider text-left"
                onClick={() =>
                  setMobileExpanded(mobileExpanded === item ? null : item)
                }
              >
                <span>{item}</span>
                <i
                  className={`fas fa-chevron-down text-xs transition-transform duration-200 ${mobileExpanded === item ? "rotate-180" : ""}`}
                />
              </button>

              {mobileExpanded === item && (
                <div className="pb-2 pl-4">
                  {menuItems[item].map((subItem) => (
                    <div
                      key={subItem}
                      onClick={() => handleNavigate(item, subItem)}
                      className="py-2 text-sm text-gray-600 hover:text-black cursor-pointer"
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
