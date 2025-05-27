const Logo = () => {
  return (
    <div className="w-fit max-w-[184px] overflow-hidden flex items-center justify-center">
      <a href="#home" className="block hover:opacity-80 transition">
        <img
          src="/images/grayhales_log.png"
          alt="KeySystem Logo"
          className="w-12 h-12 md:w-46 md:h-[50px] aspect-square object-contain object-center"
        />
      </a>
      <div className="font-popppins text-[16.26px] md:text-[20px] font-semibold text-white">
        GreyHales
      </div>
    </div>
  );
};

export default Logo;
