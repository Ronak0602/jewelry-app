import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

function Home() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const chosenRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      const imageWidth = slider.querySelector("div").offsetWidth + 24;
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({ left: 0, behavior: "instant" });
      } else {
        slider.scrollBy({ left: imageWidth, behavior: "smooth" });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    const interval = setInterval(() => {
      const imageWidth = slider.querySelector("div").offsetWidth + 24;
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({ left: 0, behavior: "instant" });
      } else {
        slider.scrollBy({ left: imageWidth, behavior: "smooth" });
      }
    }, 2000);

    const chosen = chosenRef.current;
    const interval2 = setInterval(() => {
      const imageWidth = chosen.querySelector("img").offsetWidth + 16;
      if (chosen.scrollLeft + chosen.clientWidth >= chosen.scrollWidth - 10) {
        chosen.scrollTo({ left: 0, behavior: "instant" });
      } else {
        chosen.scrollBy({ left: imageWidth, behavior: "smooth" });
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, []);

  const categories = [
    {
      name: "Rings",
      img: "https://dm8gt282gukv8.cloudfront.net/categories/1767262540680358957.webp",
    },
    {
      name: "Earrings",
      img: "https://dm8gt282gukv8.cloudfront.net/categories/1767262492970921696.webp",
    },
    {
      name: "Bracelets",
      img: "https://dm8gt282gukv8.cloudfront.net/categories/1764674311405598547.webp",
    },
    {
      name: "Pendants",
      img: "https://dm8gt282gukv8.cloudfront.net/categories/1767262455268008120.webp",
    },
    {
      name: "Necklaces",
      img: "https://dm8gt282gukv8.cloudfront.net/categories/17646779541919566604.webp",
    },
  ];

  const infiniteCategories = [...categories, ...categories, ...categories];

  const bestSellers = [
    {
      name: "2 carat",
      price: "₹1,19,027",
      img: "https://dm8gt282gukv8.cloudfront.net/images/2 carats Brilliant Diamond Engagement RingF074651.webp",
    },
    {
      name: "0.25 ct",
      price: "₹37,888",
      img: "https://dm8gt282gukv8.cloudfront.net/images/25 cent Emerald dangling pave hoops1055523.webp",
    },
    {
      name: "Incepta Eternal Duo",
      price: "₹32,349",
      img: "https://dm8gt282gukv8.cloudfront.net/images/256x041411.webp",
    },
    {
      name: "Incepta",
      price: "₹1,74,657",
      img: "https://dm8gt282gukv8.cloudfront.net/images/2i053253.webp",
    },
    {
      name: "Incepta Bold",
      price: "₹35,74,950",
      img: "https://dm8gt282gukv8.cloudfront.net/images/DSC07856p053502.jpg",
    },
  ];

  const testimonials = [
    "https://dm8gt282gukv8.cloudfront.net/testimonial/1770357400876224179.webp",
    "https://dm8gt282gukv8.cloudfront.net/testimonial/1770357315905863250.webp",
    "https://dm8gt282gukv8.cloudfront.net/testimonial/17703574531374455522.webp",
    "https://dm8gt282gukv8.cloudfront.net/testimonial/1770357271281971898.webp",
    "https://dm8gt282gukv8.cloudfront.net/testimonial/1770443776379997034.jpeg",
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <div className="relative w-full h-[60vh] md:h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          src="https://dm8gt282gukv8.cloudfront.net/images/WhatsApp Video 2025-12-17 at 17N090848.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
          <p className="text-white text-sm tracking-widest mb-2">
            Incepta Jewels
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4">
            The Future of <br />
            <span className="text-yellow-300">Fine Jewelry</span>
          </h1>
          <p className="text-white text-sm max-w-md mb-8">
            Exceptional lab-grown diamonds crafted into refined, contemporary
            designs — sustainable luxury for a new generation.
          </p>
          <button
            onClick={() => navigate("/products/rings")}
            className="border border-white text-white px-4 py-2 text-sm tracking-widest hover:bg-white hover:text-black transition duration-300 w-52"
          >
            Discover Fine Jewelry
          </button>
        </div>
      </div>
      {/* 2. Shop By Category */}
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-2  flex items-center justify-center gap-4">
          <span className="flex-1 h-[1px] bg-gray-400 max-w-24"></span>
          Shop By Category
          <span className="flex-1 h-[1px] bg-gray-400 max-w-24"></span>
        </h2>
        <p className="text-gray-500 text-sm mb-10">
          Explore your favourite categories and find the perfect piece.
        </p>

        <div className="relative px-8 md:px-16">
          <button
            onClick={() => {
              const imageWidth =
                sliderRef.current.querySelector("div").offsetWidth + 24;
              sliderRef.current.scrollBy({
                left: -imageWidth,
                behavior: "smooth",
              });
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
          >
            ‹
          </button>

          <div
            ref={sliderRef}
            className="flex gap-6 overflow-hidden scroll-smooth"
          >
            {infiniteCategories.map((cat, index) => (
              <div
                key={index}
                onClick={() => {
                  navigate(`/products/${cat.name.toLowerCase()}`);
                  window.scrollTo(0, 0);
                }}
                className="cursor-pointer group min-w-[80%] md:min-w-[40%] lg:min-w-[25%]"
              >
                <div className="overflow-hidden">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-72 object-cover transition duration-500 group-hover:scale-125"
                  />
                </div>
                <p className="text-sm font-semibold tracking-wide mt-3">
                  {cat.name}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => {
              const imageWidth =
                sliderRef.current.querySelector("div").offsetWidth + 24;
              sliderRef.current.scrollBy({
                left: imageWidth,
                behavior: "smooth",
              });
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
          >
            ›
          </button>
        </div>
      </div>
      {/* 3. Explore Enduring Elegance */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10">
        <img
          src="https://dm8gt282gukv8.cloudfront.net/homepage/1769769283702547868.webp"
          alt="Elegance"
          className="w-full md:w-1/2 object-cover"
        />
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-sm font-semibold uppercase">
            Explore Enduring Elegance With Incepta
          </h2>

          <span className="text-sm font-semibold uppercase">
            Diamond Jewelry
          </span>

          <p className="text-gray-500 text-base mt-2">
            Elevate your style with Incepta's exquisite diamond rings,
          </p>

          <span className="text-gray-500 text-base mb-2">
            crafted for moments that shine
          </span>
          <br />

          <button
            onClick={() => navigate("/products/rings")}
            className=" mt-4 border border-gray-200 bg-gray-200 text-black px-5 py-3 text-sm font-bold tracking-widest  hover:text-white transition duration-300"
          >
            Explore
          </button>
        </div>
      </div>
      {/* 4. Best Sellers */}
      <div className="py-12 px-4 md:px-16 text-center">
        <h2 className="text-2xl font-semibold mb-1 flex items-center justify-center gap-3">
          <span className="flex-1 h-px bg-gray-400 max-w-24"></span>
          Best Sellers
          <span className="flex-1 h-px bg-gray-400 max-w-24"></span>
        </h2>
        <p className="text-gray-500 text-base mb-10">
          Customers love our products and we always strive to please them all.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          {bestSellers.map((product) => (
            <div key={product.name} className="w-[45%] md:w-64 cursor-pointer">
              <div className="overflow-hidden mb-3 relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-72 object-cover transition duration-500 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white py-2 px-2">
                  <p className="text-sm font-normal">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.price} /-</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          className=" mt-4 border border-gray-200 bg-gray-200 text-black px-6 py-3 text-sm font-semibold tracking-widest  hover:text-white transition duration-300"
        >
          View All
        </button>
      </div>
      {/* 5. Chosen with Trust */}
      <div className="py-4  text-center">
        <h2 className="text-2xl font-semibold mb-2 flex items-center justify-center gap-4">
          <span className="flex-1 h-[1px] bg-gray-400 max-w-24"></span>
          Chosen with Trust. By Incepta
          <span className="flex-1 h-[1px] bg-gray-400 max-w-24"></span>
        </h2>
        <p className="text-gray-500 text-sm mb-10">
          Customers love our products and we always strive to please them all.
        </p>

        <div className="relative px-8 md:px-16">
          <button
            onClick={() => {
              const imageWidth =
                chosenRef.current.querySelector("img").offsetWidth + 16;
              chosenRef.current.scrollBy({
                left: -imageWidth,
                behavior: "smooth",
              });
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
          >
            ‹
          </button>

          <div
            ref={chosenRef}
            className="flex gap-4 overflow-hidden scroll-smooth"
          >
            {[...testimonials, ...testimonials, ...testimonials].map(
              (img, i) => (
                <div
                  key={i}
                  className="cursor-pointer group min-w-[80%] md:min-w-[40%] lg:min-w-[25%]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={img}
                      alt="testimonial"
                      className="w-full h-72 object-cover transition duration-500 group-hover:scale-125"
                    />
                  </div>
                </div>
              ),
            )}
          </div>

          <button
            onClick={() => {
              const imageWidth =
                chosenRef.current.querySelector("img").offsetWidth + 16;
              chosenRef.current.scrollBy({
                left: imageWidth,
                behavior: "smooth",
              });
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100"
          >
            ›
          </button>
        </div>
      </div>
      {/* 6. Our Story - Optimized Size */}
      <div className="bg-white py-16 px-4 md:px-20 flex justify-center items-center">
        <div className="max-w-7xl w-full bg-[#f8f8f8] border border-[#e5e5e5] flex flex-col md:flex-row items-center gap-6 p-6 md:p-4 relative overflow-hidden">
          {/* Text Section */}
          <div className="w-full md:w-1/2 z-20">
            <h2
              className="text-[28px] font-light mb-4 text-black tracking-tight"
              style={{ fontFamily: "'Questrial', sans-serif" }}
            >
              Our Story
            </h2>
            <p className="text-gray-600 text-[15px] leading-[1.6] mb-8 w-full max-w-none text-justify md:text-left">
              A tale that began with defying the usage of “naturally” and
              “mined” in one sentence, we have come a long way. Going against
              the tide, where everything man-made is suffocating our
              environment, we introduced sustainable diamond jewelry that not
              only saves nature, but your pockets too! We Know, We Understand:
              Better quality products, lesser prices, and a positive
              environmental impact is a dream for all of us.
            </p>
            <button
              className=" mt-1 border border-gray-200 bg-gray-200 text-black px-6 py-4 text-xs font-bold tracking-widest  hover:text-white transition duration-300"
              onClick={() => {
                navigate("/about");
                window.scrollTo(0, 0);
              }}
            >
              Read More
            </button>
          </div>

          {/* Image Section - Height reduced to match original scale */}
          <div className="w-full md:w-1/2 relative flex items-center justify-end min-h-[250px]">
            {/* Diamond Shape Overlay */}
            <img
              src="https://dm8gt282gukv8.cloudfront.net/homepage/17664957342137546704.png"
              alt="Diamond Pattern"
              className="absolute left-0 md:-mr-60 z-10 w-[95%] h-full object-contain pointer-events-none"
            />

            {/* Main Ring Image */}
            <img
              src="https://dm8gt282gukv8.cloudfront.net/homepage/1767075249714502389.jpeg"
              alt="Our Story Jewelry"
              className="w-[40%] h-[280px] object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
