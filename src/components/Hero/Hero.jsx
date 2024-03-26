import { DotLottiePlayer } from '@dotlottie/react-player'
import W from "./W"
// import W_logo from "../../assets/images/W_logo.png";
import WOWlogo from "../../assets/images/wow_logo_l.png";

function Hero() {
  return (
    <div className="flex flex-col relative items-center justify-center h-screen w-full overflow-hidden">
      <DotLottiePlayer src={"./wave.lottie"} autoplay loop speed={.3} className=" absolute md:w-[150%] md:h-[200%] -top-[85%] -left-[80%] rotate-[300deg]" />
      <DotLottiePlayer src={"./wave.lottie"} autoplay loop speed={.3} className=" absolute md:w-[150%] md:h-[200%] -bottom-[75%] -right-[80%] rotate-[15deg]" />
      <div className="flex items-center justify-center z-10">
        {/* <img src={W_logo} className="md:w-[20%] md:h-[85%]"/>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={W_logo} className="md:w-[20%] md:h-[85%] -scale-x-100"/> */}
        <img src={WOWlogo} alt="WOW Logo" className="md:w-[60%] md:h-[90%] object-contain" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="text-4xl">
          <span className=" text-[#FBBC04] ">Google </span>
          <span className=" text-[#EA4335]">Developer </span>
          <span className=" text-[#0F9654]">Student </span>
          <span className=" text-[#4A80EB]">Clubs</span>
        </div>
        <div className=" text-4xl text-[#FFFFFF]">Delhi NCR</div>
      </div>
      <W />
    </div>
  )
}

export default Hero