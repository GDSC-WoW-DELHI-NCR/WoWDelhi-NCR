import WOWLogo from "./WOWLogo"
// import W_logo from "../../assets/images/W_logo.png";



function Hero({scrollRef}) {
  return (
    <div className="flex flex-col relative items-center justify-center h-screen w-full">
      <div className="flex items-center justify-center z-10">
        <WOWLogo/>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-xl md:text-3xl lg:text-4xl">
          <span className="text-[#FBBC04]">Google </span>
          <span className="text-[#EA4335]">Developer </span>
          <span className="text-[#0F9654]">Student </span>
          <span className="text-[#4A80EB]">Clubs</span>
        </div>
        <div className="text-xl md:text-3xl lg:text-4xl text-white/80">Delhi NCR</div>
      </div>
    </div>
  )
}

export default Hero