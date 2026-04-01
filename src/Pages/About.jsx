import React from "react";
import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      heading: "1. Cultivating Diamond Seeds:",
      description:
        "Incepta embraces the Chemical Vapor Deposition (CVD) process, birthing diamonds ethically sourced from a hydrocarbon gas blend. Initiated within a pristine vacuum, each seed - free from nitrogen or boron impurities—serves as the foundation for brilliance.",
    },
    {
      heading: "2. Harnessing Heat and Ionization::",
      description:
        "The seed is exposed to extreme heat and ionization, triggering the growth of carbon atoms layer by layer into a diamond crystal structure.",
    },
    {
      heading: "3. Unveiling the Essence of Carbon:",
      description:
        "A plasma ball supercharges carbon atoms, which bond to the seed and slowly build the diamond atom by atom in a controlled environment.",
    },
    {
      heading: "4.  Nurturing Carbon Crystals:",
      description:
        "The result is a Type IIA diamond — the purest form of diamond, free from impurities, with exceptional optical and physical properties.",
    },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* 1. Hero Image Section */}
      <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://inceptajewels.com/uploads/cmspage/1742896952TZOO2.png"
          alt="Jewelry Sketch"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Our Story Intro */}
      <div className="max-w-4xl mx-auto text-center py-16 px-3">
        <h1 className="text-md md:text-lg font-semibold mb-8 ">Our Story</h1>
      </div>

      {/* 3. Our Vision & Mission (Alternating Layout) */}
      <section className="max-w-6xl mx-auto px-6 space-y-24 pb-14">
        {/* Our Vision */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://inceptajewels.com/uploads/cmspage/1729321765cuojU.webp"
              alt="Vision"
              className="w-full h-[250px] md:h-[400px] object-cover rounded-sm shadow-sm"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-2">
            <h2 className="text-normal font-semibold">Our Vision</h2>
            <p className="text-gray-600 leading-loose text-sm text-justify">
              At Incepta, our vision transcends mere luxury. We aspire to
              redefine the standards of opulence, sustainability, and social
              responsibility in the realm of diamond jewelry. Through innovative
              techniques in CVD diamond production, we craft exquisite lab-grown
              diamond jewelry that not only captivates but also upholds our
              commitment to societal well-being and environmental stewardship.
              Our pursuit of sustainability is not just a trend but a
              cornerstone of our ethos, creating value for the world, our
              patrons, and our team members alike. Join us as we lead the charge
              towards a brighter, more conscientious future in the lab-grown
              diamond jewelry industry.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://inceptajewels.com/uploads/cmspage/17282858949zPPt.webp"
              alt="Mission"
              className="w-full h-[250px] md:h-[400px] object-cover rounded-sm shadow-sm"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-normal font-semibold text-left">Our Mission</h2>
            <p className="text-gray-600 leading-loose text-sm text-justify">
              At Incepta, our mission transcends the conventional boundaries of
              beauty. We are committed to redefining magnificence as a
              purpose-driven journey towards sustainability, where every piece
              of lab-grown diamond jewelry is a testament to our environmental
              consciousness. With a dedication to excellence and a relentless
              pursuit of improvement, we strive to fuse wisdom with innovation,
              nurturing an environment of lifelong learning. Join us as we craft
              not just diamond jewelry, but a legacy of mindful luxury,
              preserving the splendor of our world for generations to come.
            </p>
          </div>
        </div>
      </section>

      <div className="px-4 md:px-16 py-10">
        <video
          autoPlay
          muted
          loop
          className="w-full h-[250px] md:h-[500px] object-cover"
          src="https://dm8gt282gukv8.cloudfront.net/images/INCEPTA_04%2002g054845.mp4"
        />
      </div>

      {/* 4. Video/Banner Section */}
      <div className="w-full py-18 px-6 text-center">
        <h2 className="text-xl md:text-2xl font-normal mb-1">
          What sets Incepta jewels apart?
        </h2>
        <p className="font-thin text mb-9 text-[16px]">EXPLORE MORE</p>
      </div>

      {/* 5. Timeless Crafts & Diamond Jewelry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-16 py-10">
        <div className="relative group overflow-hidden">
          <img
            src="https://inceptajewels.com/uploads/stories/1770715197zQH4B.webp"
            alt="Craft"
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-10 text-white">
            <h3 className="text-lg tracking-widest uppercase mb-2">
              Timeless Crafts
            </h3>
            <p className="text-xs font-light opacity-80">
              Artistry Beyond Trends
            </p>
          </div>
        </div>
        <div className="relative group overflow-hidden">
          <img
            src="https://inceptajewels.com/uploads/stories/1744971550YQdme.webp"
            alt="Diamond"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-10 text-white text-right">
            <h3 className="text-lg tracking-widest uppercase mb-2 text-right">
              Diamond Jewelry
            </h3>
            <p className="text-xs font-light opacity-80">
              Excellence in every cut
            </p>
          </div>
        </div>
      </div>

      {/* Our Commitment Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl text-center mb-12">Our Commitment</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border border-gray-400 flex items-center justify-center mb-4 p-3">
              <img
                src="https://inceptajewels.com/uploads/cmspage/1709557569MHLyD.svg"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              We are committed to sustainable practices in every step of our
              process, from sourcing to crafting.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border border-gray-400 flex items-center justify-center mb-4 p-3">
              <img
                src="https://inceptajewels.com/uploads/cmspage/1709557569Orywc.svg"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Every piece is crafted with precision and care, ensuring the
              highest quality standards.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border border-gray-400 flex items-center justify-center mb-4 p-3">
              <img
                src="https://inceptajewels.com/uploads/cmspage/1709557569zAlou.svg"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Using cutting-edge CVD technology to create diamonds that are both
              beautiful and ethical.
            </p>
          </div>
        </div>
      </div>

      {/* 6. The Making of Incepta Diamonds (Tab-like Section) */}
      <section className="py-8 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl mb-1">
            The making of Incepta diamonds
          </h2>
          <p className="text-center text-normal mb-9">
            CRAFTING CONFLICT-FREE CVD DIAMONDS AT INCEPTA: A JOURNEY OF ETHICAL
            INNOVATION
          </p>
          <div className="flex flex-col md:flex-row border border-gray-100">
            {/* Steps Sidebar */}
            <div className="w-full md:w-1/3 border-r border-gray-100 bg-[#fcfcfc]">
              {[
                "The Diamond Seed",
                "Heating and Ionization",
                "The Plasma and Carbon",
                "IIA Diamonds",
              ].map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 text-[15px] border-b border-gray-100 text-center cursor-pointer transition-all ${
                    activeTab === idx
                      ? "bg-white font-bold border-l-4 border-l-black"
                      : "hover:bg-white text-gray-500"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>

            {/* Content Area */}
            <div className="w-full md:w-2/3 p-5 md:p-10">
              <h4 className="font-bold text-sm mb-4">
                {tabData[activeTab].heading}
              </h4>
              <p className="text-gray-600 text-sm leading-loose text-justify font-light">
                {tabData[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
