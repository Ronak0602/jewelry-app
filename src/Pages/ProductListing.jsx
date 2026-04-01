import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import productsData from "../products.json";

const filters = {
  // earrings: ["All Earrings", "Studs", "Drops", "Bali", "Hoops"],
  // bracelets: ["All Bracelets", "Tennis", "Stiff"],
  // pendants: ["All Pendants", "Everyday wear", "Solitaire"],
  // necklace: ["All Necklaces", "Necklace Sparkle"],
};

const categoryHeroes = {
  rings: {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/1764666197866589997.jpg",
  },
  "rings/bands": {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/17646614491042847891.jpg",
    title: "BANDS",
  },
  "rings/solitaire": {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/17646611441885123096.jpg",
    title: "SOLITAIRE",
  },
  "rings/cocktail": {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/17646614961154377430.jpg",
    title: "COCKTAIL",
  },
  earrings: {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/1764666913772837316.jpg",
  },
  "earrings/studs": {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/1764661719760380619.jpg",
    title: "STUDS",
  },
  "earrings/drops": {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/1764661677781866144.jpg",
    title: "DROPS",
  },
  "earrings/bali": {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/17646616501188362213.jpg",
    title: "BALI",
  },
  "earrings/hoops": {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/17646616271506649160.jpg",
    title: "HOOPS",
  },
  bracelets: {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/1764666761382188082.jpg",
  },
  "bracelets/tennis": {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/1764661820733570094.jpg",
    title: "TENNIS",
  },
  "bracelets/stiff": {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/17646618821810298998.jpg",
    title: "STIFF",
  },
  pendants: {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/176466534154673117.jpg",
  },
  "pendants/everyday-wear": {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/1764662626890149310.jpg",
    title: "EVERYDAY WEAR",
  },
  "pendants/solitaire": {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/17646626581351773175.jpg",
    title: "SOLITAIRE",
  },
  necklace: {
    image:
      "https://dm8gt282gukv8.cloudfront.net/categories/17646653001512611404.jpg",
    title: "NECKLACES",
  },
  "necklaces/necklace-sparkle": {
    image: "",
    title: "NECKLACE SPARKLE",
  },
};

const metalOptions = [
  { label: "Yellow Gold", color: "#D4A843" },
  { label: "White Gold", color: "#C0C0C0" },
  { label: "Rose Gold", color: "#F4A7A3" },
];

function ProductListing() {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(
    filters[category]?.[0] || "",
  );
  const [selectedMetal, setSelectedMetal] = useState(null);
  const [metalOpen, setMetalOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState(null);
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMetalOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (subcategory) {
      const matched = filters[category]?.find(
        (f) => f.toLowerCase() === subcategory.toLowerCase(),
      );
      setActiveFilter(matched || filters[category]?.[0] || "");
    } else {
      setActiveFilter(filters[category]?.[0] || "");
    }
  }, [category, subcategory]);

  const sortOptions = [
    "Recommended",
    "New",
    "Price High To Low",
    "Price Low To High",
  ];

  const allProducts = productsData.filter((p) => {
    const matchCategory = p.url.includes(`/products/${category}/`);
    const hasImage = p.image !== "";
    if (!matchCategory || !hasImage) return false;
    if (subcategory)
      return p.subcategory?.toLowerCase() === subcategory.toLowerCase();
    return true;
  });

  const herokey = subcategory ? `${category}/${subcategory}` : category;
  const hero = categoryHeroes[herokey] || categoryHeroes[category] || {};

  return (
    <div>
      {/* ── Hero Banner ── */}
      <div
        className="relative w-full h-[250px] md:h-[520px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/10 to-transparent" />
        <div className="relative z-10 text-center w-full md:w-1/2 px-4 md:pl-16">
          <p className="text-gray-600 text-sm mt-2">{hero.subtitle}</p>
        </div>
      </div>

      {/* ── Breadcrumb ── */}
      <div className="text-center text-xs text-gray-500 tracking-widest uppercase py-5">
        <span
          className="hover:underline cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <span className="mx-2">/</span>
        <span
          className="hover:underline cursor-pointer"
          onClick={() => navigate(`/products/${category}`)}
        >
          {category?.toUpperCase()}
        </span>
        {subcategory && (
          <>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{subcategory.toUpperCase()}</span>
          </>
        )}
      </div>

      {/* ── Filter Bar ── */}
      <div className="flex items-center justify-between px-4 md:px-16 py-3 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-normal tracking-wide">Filter</span>

          {/* Custom Metal Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMetalOpen(!metalOpen)}
              className="text-sm flex items-center gap-1 cursor-pointer bg-transparent outline-none"
            >
              {selectedMetal ? selectedMetal.label : "Metal"}
              <span className="text-xs text-gray-600 ml-1">
                {metalOpen ? "∧" : "∨"}
              </span>
            </button>

            {metalOpen && (
              <div className="absolute top-7 left-0 bg-white shadow-lg z-50 w-44 py-2 border border-gray-100">
                {metalOptions.map((m) => (
                  <div
                    key={m.label}
                    onClick={() => {
                      setSelectedMetal(m);
                      setMetalOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer"
                  >
                    <span
                      className="w-5 h-5 rounded-full inline-block flex-shrink-0"
                      style={{ backgroundColor: m.color }}
                    />
                    <span className="text-sm">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setSelectedMetal(null)}
            className="text-sm text-gray-600 hover:text-black"
          >
            Reset
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-gray-800">
            Items - {allProducts.length}
          </span>
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="text-sm flex items-center gap-1 cursor-pointer bg-transparent outline-none"
            >
              {selectedSort || "Sort Type"}
              <span className="text-xs text-gray-600 ml-1">
                {sortOpen ? "∧" : "∨"}
              </span>
            </button>
            {sortOpen && (
              <div className="absolute top-7 right-0 bg-white shadow-lg z-50 w-48 py-2 border border-gray-100">
                {sortOptions.map((s) => (
                  <div
                    key={s}
                    onClick={() => {
                      setSelectedSort(s);
                      setSortOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm"
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Sub-category Filter Pills ── */}
      <div className="flex gap-3 justify-center py-6">
        {(filters[category] || []).map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 text-xs tracking-wide border transition duration-300 ${
              activeFilter === f
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:border-black"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Products Grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-16 pb-16">
        {allProducts.map((product, i) => (
          <div key={i} className="cursor-pointer group">
            <div className="overflow-hidden mb-3 bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 md:h-72 object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-sm font-medium">{product.name}</p>
            <p className="text-sm text-gray-500">{product.price} /-</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
