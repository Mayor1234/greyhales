const HeroSection = () => {
  return (
    <section className="relative z-20 flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#994C12] via-[#CC6518] to-[#994C12] text-white min-h-[80vh] px-6 py-16">
      {/* Grid Overlay */}
      <div className="absolute -z-20 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_2px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_2px,transparent_1px)] bg-[size:110px_110px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight drop-shadow-md mb-4">
          Breathe Life Into Spaces, <br />
          By Elevating Lifestyles.
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-white/90 font-light font-poppins">
          With timeless interiors crafted with warmth, precision, and soul.
        </p>
        <div className="mt-8">
          <button className="bg-white text-[#994C12] text-2xl font-semibold font-popppins border border-button px-6 py-3 rounded-full shadow hover:bg-[#fff2e6] transition-all duration-300 ease-in-out cursor-pointer">
            Explore Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
