import { DotLottiePlayer } from "@dotlottie/react-player"

function HomeAnim() {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
        <DotLottiePlayer src={"./wave.lottie"} autoplay loop speed={.3} className="
        absolute 
        w-[115%] h-[160%] 
        md:w-[125%] md:h-[180%] 
        lg:w-[150%] lg:h-[200%] 
        -top-[70%] -left-[80%]  
        md:-top-[80%] md:-left-[80%] 
        lg:-top-[90%] lg:-left-[80%] 
        rotate-[300deg]" />
        <DotLottiePlayer src={"./wave.lottie"} autoplay loop speed={.3} className="
        absolute  
        w-[100%] h-[160%] 
        md:w-[120%] md:h-[180%] 
        lg:w-[150%] lg:h-[200%] 
        -bottom-[55%] -right-[60%]
        md:-bottom-[55%] md:-right-[70%]
        lg:-bottom-[75%] lg:-right-[80%] 
        rotate-[45deg]" />
    </div>
  )
}

export default HomeAnim