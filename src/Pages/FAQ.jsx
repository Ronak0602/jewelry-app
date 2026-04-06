import { useState } from "react";

const categories = [
  {
    label: "ALL QUESTIONS",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <line x1="7" y1="8" x2="17" y2="8" />
        <line x1="7" y1="12" x2="17" y2="12" />
        <line x1="7" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    label: "POPULAR QUESTIONS",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="15.5" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "SHIPPING QUESTIONS",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <polyline points="9,12 11,14 15,10" />
      </svg>
    ),
  },
  {
    label: "WARRANTY",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 3L4 7v5c0 4.5 3.5 8.5 8 9.5C16.5 20.5 20 16.5 20 12V7L12 3z" />
        <polyline points="9,12 11,14 15,10" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Are CVD diamonds original ?",
    answer:
      "Yes, CVD diamonds are as original as naturally mined diamonds. Diamonds are formed through pure carbon particles that share a strong bond, resulting in their durable properties. CVD diamonds are made with 100% pure carbon sheets in a lab under expert supervision. This results in fully authentic diamonds.",
  },
  {
    question: "What makes CVD diamonds sustainable ?",
    answer:
      "CVD diamonds are lab-grown diamonds. Just 1 carat of CVD diamond saves our planet from more than 65 kilograms of depletion of the atmospheric CO2 layer. It also preserves over 400 liters of water resources and safeguards the Earth from over 250000 kilograms of land mining.",
  },
  {
    question: "How are sustainable diamonds conflict-free ?",
    answer:
      "Sustainable diamonds have not financed civil wars. Thus, they're called conflict-free. These diamonds go above and beyond by guaranteeing fair wages, secure working conditions, ethical business conduct, and respect for human rights.",
  },
  {
    question: "What matters more - the weight or size of a diamond ?",
    answer:
      "A diamond's carat weight reveals its rarity and contributes to determining its price. However, diamond quality is equally as crucial as diamond size, if not more so. In fact, a diamond's quality is measured in carats - a unit that considers the diamond's diameter.",
  },
  {
    question: "Do you need to take extra care of CVD diamonds ?",
    answer:
      "No, CVD diamonds are the same as any other diamond, which means you don't need to go out of your way to exclusively take care of these diamonds. These are long-lasting and provide an elegant feel, keeping you in the glamorous limelight at events, parties, weddings, and other special occasions.",
  },
  {
    question: "Can lab-grown diamonds get scratched ?",
    answer:
      "Lab-grown diamonds are scratch-resistant, just like mined diamonds. They are precisely cut with the same attention as natural diamonds. In fact, lab-grown diamonds have the edge over the standard ones in terms of purity and carbon element bond.",
  },
  {
    question: "Is the World Ready for Lab-Grown Diamonds ?",
    answer:
      "Yes, exports of lab-grown diamonds climbed by 106.46% (year-on-year) to $1.3 billion in 2021-22 against $636.44 million as of 2020-21. All-in-all, the CVD lab-grown diamond market is all set to cross 10% of global sales in 2022.",
  },
  {
    question: "Are CVD diamonds well-cut ?",
    answer:
      "A diamond with excellent cutting is dazzling and luminous. Your eyes will get both white and colored light from it. Incepta offers 100% VVS diamonds - which stand for very very slightly included. This simply means that hardly any microscopic inclusions are present in the overall diamond composition.",
  },
  {
    question: "Can CVD diamonds retain their color ?",
    answer:
      "Yes, CVD diamonds can maintain their color. In terms of their color, optics, physical compositions, and thermal properties, CVD diamonds are identical to natural diamonds. As a result, they maintain their color over time and have the same durability as natural diamonds.",
  },
  {
    question: "Are lab-grown diamonds expensive ?",
    answer:
      "No, lab-grown diamonds are cheaper than commonly mined diamonds. Typically, lab-grown diamonds cost 40–70% less than the diamonds obtained from under the earth's surface. In fact, such diamonds attain 100% purity and originality through the scientific CVD process.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("ALL QUESTIONS");

  const filtered = faqs.filter((f) =>
    f.question.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="bg-white" style={{ fontFamily: "serif" }}>
      {/* ── Hero Banner ── */}
      <div className="relative w-full h-[220px] md:h-[420px]">
        <img
          src="https://inceptajewels.com/images/banners/faq-banner.png"
          alt="FAQ Banner"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.style.backgroundImage =
              "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80')";
            e.target.parentElement.style.backgroundSize = "cover";
            e.target.parentElement.style.backgroundPosition = "center";
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.40)" }}
        />

        {/* Title + Search */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <h1
            className="text-white text-center mb-6"
            style={{
              fontSize: "clamp(16px, 3.5vw, 38px)",
              fontWeight: 300,
              letterSpacing: "0.15em",
              fontFamily: "serif",
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <div
            className="flex items-center w-full max-w-2xl pb-2"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.8)" }}
          >
            <input
              type="text"
              placeholder="Start Typing..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white text-sm md:text-base"
              style={{
                letterSpacing: "0.05em",
                fontFamily: "serif",
                caretColor: "white",
              }}
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              className="flex-shrink-0 ml-3"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Category Tabs — Normal flow, no absolute ── */}
      <div className="flex justify-center px-4 bg-white shadow-sm">
        <div
          className="grid grid-cols-2 md:grid-cols-4 w-full"
          style={{
            maxWidth: "900px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
          }}
        >
          {categories.map((cat, idx) => {
            const isActive = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className="flex flex-col items-center justify-center bg-white transition-all duration-200 py-4 md:py-5"
                style={{
                  borderBottom: isActive
                    ? "3px solid #1a1a1a"
                    : "3px solid transparent",
                  borderRight: idx % 2 === 0 ? "1px solid #ebebeb" : "none",
                  color: isActive ? "#1a1a1a" : "#777777",
                  cursor: "pointer",
                }}
              >
                <span className="mb-2">{cat.icon}</span>
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.1em",
                    fontFamily: "sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── FAQ Accordion ── */}
      <div
        className="mx-auto px-4 md:px-6 pb-6 pt-6"
        style={{ maxWidth: "1100px" }}
      >
        {filtered.length === 0 && (
          <p
            className="text-center py-12"
            style={{
              color: "#aaa",
              fontSize: "13px",
              letterSpacing: "0.1em",
              fontFamily: "sans-serif",
            }}
          >
            No questions found.
          </p>
        )}

        {filtered.map((faq, i) => {
          const isOpen = activeIndex === i;
          return (
            <div key={i} style={{ borderBottom: "1px solid #dedede" }}>
              <button
                onClick={() => setActiveIndex(isOpen ? null : i)}
                className="w-full text-left flex items-center justify-between"
                style={{ padding: "20px 0" }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    color: "#1a1a1a",
                    fontFamily: "serif",
                    fontWeight: 400,
                  }}
                >
                  {faq.question}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a1a1a"
                  strokeWidth="1.8"
                  style={{
                    flexShrink: 0,
                    marginLeft: "16px",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                style={{
                  maxHeight: isOpen ? "400px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    color: "#555555",
                    lineHeight: "1.85",
                    paddingBottom: "22px",
                    paddingRight: "20px",
                    fontFamily: "serif",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
