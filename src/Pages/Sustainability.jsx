function Sustainability() {
  const stats = [
    {
      icon: "https://inceptajewels.com/uploads/cmspage/400.svg",
      value: "350-400+",
      label: "Litres of Water Wastage",
    },
    {
      icon: "https://inceptajewels.com/uploads/cmspage/65.svg",
      value: "60-70 kg",
      label: "Air and Environmental Pollution",
    },
    {
      icon: "https://inceptajewels.com/uploads/cmspage/57.svg",
      value: "50-60 kg",
      label: "Atmospheric Carbon Dioxide Depletion",
    },
    {
      icon: "https://inceptajewels.com/uploads/cmspage/280.svg",
      value: "250-300+",
      label: "Million Joules of Energy Consumption",
    },
    {
      icon: "https://inceptajewels.com/uploads/cmspage/50.svg",
      value: "45-50%",
      label: "Traditional Diamond Expenditure",
    },
    {
      icon: "https://inceptajewels.com/uploads/cmspage/250.svg",
      value: "240+",
      label: "Tonnes of Land Mining",
    },
  ];

  return (
    <div className="bg-white">
      {/* ── Hero Banner ── */}
      <div className="w-full">
        <img
          src="https://inceptajewels.com/uploads/cmspage/1722346041VqkzX.webp"
          alt="Sustainability Banner"
          className="w-full h-[250px] md:h-[500px] object-cover"
        />
      </div>

      {/* ── Zero Carbon Section ── */}
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Zero Carbon Emissions</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Through our expertly curated CVD Diamond Process, we undertake a
            zero-emission approach while creating sustainable diamonds. We are
            conscious about the various climatic adversities and make it a point
            to produce diamonds naturally, without disturbing Earth's valuable
            resources.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Our pursuit of reducing carbon footprint has brought us to the
            optimum level of becoming committed to zero carbon emissions while
            creating lab-grown diamonds using renewable energy. We strive
            towards redefining luxury by reengineering diamonds in the favour of
            the earth and its natural resources.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://inceptajewels.com/uploads/cmspage/1698295822YRBii.webp"
            alt="Zero Carbon"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* ── Mining Free Section ── */}
      <div className="font-serif text-center mb-4 text-[20px]">
        Mining-Free Process
      </div>
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src="https://inceptajewels.com/uploads/cmspage/1698295822AaJcR.webp"
              alt="Mining Free"
              className="w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-500 text-sm leading-relaxed">
              Incepta sustainable ways are based on the foundation of an
              environment-friendly CVD process and ethically sourced diamonds.
              We strive to operate our business in a conflict-free manner, where
              no mining activities happen, no human life is jeopardized, and
              none of the earthly resources are wasted.
            </p>
          </div>
        </div>
      </div>

      {/* ── Stats Section ── */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <p className="font-serif tracking-widest uppercase text-[20px] mb-2">
          Mining - Free
        </p>
        <h2 className="text-xl text-slate-800 mb-2">
          1 Carat of every Incepta diamond saves the world from
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-12">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <img src={s.icon} alt={s.label} className="h-16 object-contain" />
              <h3 className="text-2xl font-semibold">{s.value}</h3>
              <p className="text-gray-500 text-xs text-center">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sustainability;
