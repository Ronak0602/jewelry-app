import { useNavigate } from "react-router-dom";

function Wishlist() {
  const navigate = useNavigate();

  return (
    // Max-w-screen-xl aur mx-auto content ko center mein rakhega aur zyada failne nahi dega
    <div className="w-full bg-white font-serif py-1 px-4">
      <div className="max-w-md mx-auto flex flex-col items-center mb-10">
        {/* Breadcrumb - Chota aur subtle */}
        <div className="flex gap-1 text-[12px] uppercase mb-10 text-gray-400">
          <span
            className="cursor-pointer text-black hover:text-gray-500"
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span>/</span>
          <span>Wishlist</span>
        </div>

        {/* Main Heading - Heading ko thoda upar laya gaya hai */}
        <h2 className="text-[18px] font-light mb-3 text-gray-700 tracking-tight">
          It feels so empty in here
        </h2>

        {/* Heart Icon Circle - Size fixed rakha hai taaki stretched na lage */}
        <div className="w-36 h-36 border border-gray-300 rounded-full flex items-center justify-center bg-[#fcfcfc]">
          <svg
            viewBox="0 0 24 24"
            className="w-16 h-16 text-gray-200 fill-current"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Subtext - Italic aur light gray */}
        <p className="italic text-gray-400 mb-10 text-sm font-serif tracking-wide">
          Make a wish!
        </p>

        <button
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          className="bg-black text-white w-44 py-3.5 px-2 text-[12px] tracking-[0.3em] font-medium hover:bg-gray-300 transition-all uppercase shadow-sm rounded"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Wishlist;
