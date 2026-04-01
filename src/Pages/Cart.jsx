import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const cartItems = [];

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "serif" }}>
      {cartItems.length === 0 ? (
        /* Empty Cart */
        <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
          {/* Cart Icon */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cccccc"
            strokeWidth="1"
            className="mb-8"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>

          <h2
            className="text-gray-900 font-normal mb-3"
            style={{ fontSize: "20px", letterSpacing: "0.05em" }}
          >
            Your cart is empty.
          </h2>

          <p
            className="text-gray-400 mb-10"
            style={{ fontSize: "14px", letterSpacing: "0.03em" }}
          >
            Time to shine – let's fill your cart with amazing jewellery!
          </p>

          <button
            onClick={() => navigate("/")}
            className="px-10 py-3 bg-gray-900 text-white text-xs font-medium tracking-widest uppercase hover:bg-gray-700 transition-all duration-200"
          >
            Explore Now
          </button>
        </div>
      ) : (
        /* Cart with items */
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1
            className="text-gray-900 font-normal mb-10 text-center"
            style={{ fontSize: "28px", letterSpacing: "0.1em" }}
          >
            Your Cart
          </h1>

          {/* Cart Items */}
          <div className="border-t border-gray-200">
            {cartItems.map((item, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-6 border-b border-gray-200"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover"
                />
                <div className="flex-1">
                  <h3
                    className="text-gray-900 font-normal mb-1"
                    style={{ fontSize: "16px", fontFamily: "serif" }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.variant}</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                  <div className="flex items-center border border-gray-300">
                    <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                      −
                    </button>
                    <span className="px-4 py-1 text-sm">{item.qty}</span>
                    <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                  <span
                    className="text-gray-900"
                    style={{ fontSize: "15px", fontFamily: "serif" }}
                  >
                    ₹{item.price}
                  </span>
                  <button className="text-gray-400 hover:text-gray-700">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total + Checkout */}
          <div className="flex justify-end mt-8">
            <div className="w-72">
              <div className="flex justify-between mb-4">
                <span className="text-gray-500 text-sm">Subtotal</span>
                <span className="text-gray-900 text-sm">
                  ₹
                  {cartItems.reduce(
                    (acc, item) => acc + item.price * item.qty,
                    0,
                  )}
                </span>
              </div>
              <button className="w-full py-3 bg-gray-900 text-white text-xs tracking-widest uppercase hover:bg-gray-700 transition-all duration-200">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
