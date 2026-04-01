import { useState } from "react";

const ringSizeData = [
  { mm: "14.01", europe: "44", india: "4", uk: "F½", us: "3" },
  { mm: "14.33", europe: "45", india: "5", uk: "G", us: "" },
  { mm: "14.5", europe: "", india: "", uk: "G½", us: "3½" },
  { mm: "14.65", europe: "46", india: "6", uk: "H", us: "" },
  { mm: "14.97", europe: "47", india: "7", uk: "H½", us: "4" },
  { mm: "15.1", europe: "", india: "", uk: "I", us: "" },
  { mm: "15.29", europe: "48", india: "8", uk: "I½", us: "4½" },
  { mm: "15.5", europe: "", india: "", uk: "J", us: "" },
  { mm: "15.61", europe: "49", india: "9", uk: "J½", us: "5" },
  { mm: "15.92", europe: "50", india: "10", uk: "K", us: "" },
  { mm: "16.1", europe: "", india: "", uk: "K½", us: "5½" },
  { mm: "16.24", europe: "51", india: "11", uk: "L", us: "" },
  { mm: "16.56", europe: "52", india: "12", uk: "L½", us: "6" },
  { mm: "16.7", europe: "", india: "", uk: "M", us: "" },
  { mm: "16.88", europe: "53", india: "13", uk: "M½", us: "6½" },
  { mm: "17.1", europe: "", india: "", uk: "N", us: "" },
  { mm: "17.2", europe: "54", india: "14", uk: "N½", us: "7" },
  { mm: "17.52", europe: "55", india: "15", uk: "O", us: "" },
  { mm: "17.7", europe: "", india: "", uk: "O½", us: "7½" },
  { mm: "17.83", europe: "56", india: "16", uk: "P", us: "" },
];

const bangleData = [
  { size: "2-2", diamIn: "2.125", diamCm: "5.4", circ: "6.67" },
  { size: "2-4", diamIn: "2.25", diamCm: "5.7", circ: "7.06" },
  { size: "2-6", diamIn: "2.375", diamCm: "6", circ: "7.46" },
  { size: "2-8", diamIn: "2.5", diamCm: "6.5", circ: "7.85" },
  { size: "2-10", diamIn: "2.625", diamCm: "6.7", circ: "8.24" },
  { size: "2-12", diamIn: "2.75", diamCm: "7", circ: "8.64" },
];

const necklaceData = [
  { inches: "16 inches", cm: "40.50 cm" },
  { inches: "18 inches", cm: "45.75 cm" },
  { inches: "20 inches", cm: "50.75 cm" },
  { inches: "24 inches", cm: "61.00 cm" },
  { inches: "30 inches", cm: "76.25 cm" },
  { inches: "36 inches", cm: "91.50 cm" },
];

const tabs = ["Rings", "Bracelets", "Necklaces"];

function SizeGuide() {
  const [activeTab, setActiveTab] = useState("Rings");

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* 1. Hero Image Section */}
      <div className="w-full h-[40vh] md:h-[80vh] overflow-hidden">
        <img
          src="https://inceptajewels.com/uploads/cmspage/1672171667eW76n.png"
          alt="Jewelry Sketch"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white min-h-screen" style={{ fontFamily: "serif" }}>
        {/* Page Title */}
        <div className="w-full px-10 pt-14 pb-4">
          <h1
            className="text-gray-900 font-normal mb-8 text-center"
            style={{ fontSize: "28px", letterSpacing: "0.05em" }}
          >
            Size Guide
          </h1>

          {/* Tabs */}
          <div className="flex gap-10 border-b border-gray-800 pb-8 mb-20 text-center justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="pb-3 text-sm font-normal transition-all duration-200"
                style={{
                  fontFamily: "serif",
                  fontSize: "20px",
                  color: activeTab === tab ? "#1a1a1a" : "#888",
                  borderBottom:
                    activeTab === tab
                      ? "2px solid #1a1a1a"
                      : "2px solid transparent",
                  background: "none",
                  marginBottom: "-1px",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ── RINGS TAB ── */}
          {activeTab === "Rings" && (
            <div>
              <h2
                className="text-gray-800 font-semibold mb-2 text-center"
                style={{ fontSize: "19px" }}
              >
                MEASURE YOUR RING SIZE
              </h2>
              <p
                className="text-gray-500 mb-8 text-center"
                style={{ fontSize: "14px", lineHeight: "1.8" }}
              >
                Finding the perfect fit for your ring is crucial to ensuring
                comfort and beauty. Follow our guide to measure your size
                accurately and enjoy a flawless wearing experience.
              </p>

              {/* 4 guide images */}
              <div className="bg-gray-100 relative flex flex-col md:flex-row items-center w-screen mb-8 -mx-10 min-h-[300px] md:min-h-[600px]">
                <img
                  src="https://inceptajewels.com/uploads/cmspage/1739460556y349n.png"
                  alt="Ring guide 1"
                  className="absolute left-0 top-0 h-full w-auto object-contain"
                />

                <div className="flex flex-1 justify-around items-center px-8 ml-16">
                  <img
                    src="https://inceptajewels.com/uploads/cmspage/1739552767PZEfK.png"
                    alt="Ring guide 2"
                    className="w-56 object-contain"
                  />
                  <img
                    src="https://inceptajewels.com/uploads/cmspage/1739454698qiMWn.png"
                    alt="Ring guide 3"
                    className="w-56 object-contain"
                  />
                  <img
                    src="https://inceptajewels.com/uploads/cmspage/1739552972zSEvR.png"
                    alt="Ring guide 4"
                    className="w-56 object-contain"
                  />
                </div>
              </div>

              <p
                className="text-gray-500 mb-8 text-center"
                style={{ fontSize: "14px", lineHeight: "1.8" }}
              >
                Discover the perfect fit with our comprehensive ring size guide.
                Explore our visual examples to ensure you
                <br />
                find the ideal size for your new ring.
              </p>
              {/* 6 example images */}
              <div className="grid grid-cols-2 gap-2 mb-10 max-w-xl mx-auto">
                <img
                  src="https://inceptajewels.com/uploads/cmspage/16721716678QFrk.png"
                  alt="Ring example 1"
                  className="w-64 object-contain"
                />
                <img
                  src="https://inceptajewels.com/uploads/cmspage/16705821749u0bE.png"
                  alt="Ring example 2"
                  className="w-64 object-contain"
                />
                <img
                  src="https://inceptajewels.com/uploads/cmspage/1672171667hgFTn.png"
                  alt="Ring example 3"
                  className="w-64 object-contain"
                />
                <img
                  src="https://inceptajewels.com/uploads/cmspage/1670582175gMdB3.png"
                  alt="Ring example 4"
                  className="w-64 object-contain"
                />
                <img
                  src="https://inceptajewels.com/uploads/cmspage/1670582175143p3.png"
                  alt="Ring example 5"
                  className="w-64 object-contain"
                />
                <img
                  src="https://inceptajewels.com/uploads/cmspage/1670582176ijEsn.png"
                  alt="Ring example 6"
                  className="w-64 object-contain"
                />
              </div>
            </div>
          )}

          {/* ── BRACELETS TAB ── */}
          {activeTab === "Bracelets" && (
            <div>
              <h2
                className="text-gray-800 font-semibold text-center mb-2"
                style={{ fontSize: "19px" }}
              >
                MEASURE YOUR BRACELETS SIZE
              </h2>
              <p
                className="text-gray-500 text-center mb-8"
                style={{ fontSize: "16px", lineHeight: "1.8" }}
              >
                Easily measure your bracelet size with our detailed guide. Use
                the provided visual aids to ensure an accurate fit for your
                wrist, ensuring comfort and style in every piece.
              </p>

              {/* 2 bracelet guide images */}
              <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-around w-screen -mx-10 mb-8 py-8">
                <img
                  src="https://inceptajewels.com/uploads/cmspage/173877337984eHH.png"
                  alt="Bracelet guide 1"
                  className="w-1/2 object-contain px-8"
                />
                <img
                  src="https://inceptajewels.com/uploads/cmspage/1738946574ECaIE.png"
                  alt="Bracelet guide 2"
                  className="w-1/2 object-contain px-8"
                />
              </div>

              {/* Bangle Size Table */}
              <div className="overflow-x-auto mb-5">
                <table className="w-90 text-sm border-collapse justify-center mx-auto">
                  <thead>
                    <tr className="bg-gray-200 text-black uppercase">
                      <th
                        className="px-4 py-3 text-left font-normal"
                        style={{ fontSize: "12px", letterSpacing: "0.08em" }}
                      >
                        Bangle Size
                      </th>
                      <th
                        className="px-4 py-3 text-left font-normal"
                        style={{ fontSize: "12px", letterSpacing: "0.08em" }}
                      >
                        Diameter (in)
                      </th>
                      <th
                        className="px-4 py-3 text-left font-normal"
                        style={{ fontSize: "12px", letterSpacing: "0.08em" }}
                      >
                        Diameter (CM)
                      </th>
                      <th
                        className="px-4 py-3 text-left font-normal"
                        style={{ fontSize: "12px", letterSpacing: "0.08em" }}
                      >
                        Circumference (IN)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bangleData.map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td
                          className="px-4 py-2.5 text-gray-700 border-b border-gray-100"
                          style={{ fontSize: "13px" }}
                        >
                          {row.size}
                        </td>
                        <td
                          className="px-4 py-2.5 text-gray-700 border-b border-gray-100"
                          style={{ fontSize: "13px" }}
                        >
                          {row.diamIn}
                        </td>
                        <td
                          className="px-4 py-2.5 text-gray-700 border-b border-gray-100"
                          style={{ fontSize: "13px" }}
                        >
                          {row.diamCm}
                        </td>
                        <td
                          className="px-4 py-2.5 text-gray-700 border-b border-gray-100"
                          style={{ fontSize: "13px" }}
                        >
                          {row.circ}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p
                className="text-gray-700 mb-5 mx-auto"
                style={{ fontSize: "15px", maxWidth: "580px" }}
              >
                The images below are for illustrative purposes, showcasing the
                wearability of our products. Your bracelet size will vary based
                on the specific product you select.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-6">
                <img
                  src="https://inceptajewels.com/uploads/cmspage/1670483093juBtt.png"
                  alt="Bracelet wear 1"
                  className="w-80 object-contain"
                />
                <img
                  src="https://inceptajewels.com/uploads/cmspage/1670483094pjtWt.png"
                  alt="Bracelet wear 2"
                  className="w-80 object-contain"
                />
              </div>
            </div>
          )}

          {/* ── NECKLACES TAB ── */}
          {activeTab === "Necklaces" && (
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                {/* Left - image */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src="https://inceptajewels.com/uploads/cmspage/1710829778o3HTL.png"
                    alt="Bracelet wear 3"
                    className="w-90 object-contain"
                  />
                </div>

                {/* Right - heading, text, table */}
                <div className="w-full md:w-1/2 pt-0 md:pt-32">
                  <h2
                    className="text-gray-900 font-normal mb-2"
                    style={{ fontSize: "13px", letterSpacing: "0.15em" }}
                  ></h2>
                  {/* Necklace Length Table */}
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-center border-collapse">
                      <thead>
                        <tr className="bg-gray-100 text-black uppercase">
                          <th
                            className="px-4 text-center font-normal"
                            style={{
                              fontSize: "12px",
                              letterSpacing: "0.08em",
                            }}
                          >
                            Length (in)
                          </th>
                          <th
                            className="px-4 py-3 text-center font-normal"
                            style={{
                              fontSize: "12px",
                              letterSpacing: "0.08em",
                            }}
                          >
                            Length (cm)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {necklaceData.map((row, i) => (
                          <tr
                            key={i}
                            className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                          >
                            <td
                              className="px-4 py-2.5 text-gray-700 border-b border-gray-100"
                              style={{ fontSize: "13px" }}
                            >
                              {row.inches}
                            </td>
                            <td
                              className="px-4 py-2.5 text-gray-700 border-b border-gray-100"
                              style={{ fontSize: "13px" }}
                            >
                              {row.cm}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p
                    className="text-gray-500 mb-8"
                    style={{ fontSize: "16px", lineHeight: "1.8" }}
                  >
                    Determine your perfect necklace length with our
                    easy-to-follow guide. Use the chart and images provided to
                    find the best fit for your style and comfort.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
                <img
                  src="https://inceptajewels.com/uploads/cmspage/1670582744dkDrp.png"
                  alt="Necklace guide 1"
                  className="w-80 object-contain"
                />
                <img
                  src="https://inceptajewels.com/uploads/cmspage/1670582780qXdPF.png"
                  alt="Necklace guide 2"
                  className="w-80 object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SizeGuide;
