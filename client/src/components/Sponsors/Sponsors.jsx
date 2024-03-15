import google from "../../assets/images/google.png"
import gh from "../../assets/images/gh.png"
import cn from "../../assets/images/cn.png"

function Sponsors() {
  return (
    <div id="sponsors">
      <section className="flex flex-col items-center justify-center py-32 gap-10">
        <h1 className="uppercase text-[40px] sm:text-[55px] md:text[70px] lg:text-[80px] text-y font-semibold">Our Sponsors</h1>
        <main className="flex flex-wrap justify-center items-center gap-10 px-10">
          <img src={google} alt="" className="h-16 sm:h-20 md:h-full"/>
          <img src={gh} alt="" className="h-16 sm:h-20 md:h-24"/>
          <img src={cn} alt="" className="h-16 sm:h-20 md:h-full"/>
        </main>
      </section>
    </div>
  )
}

export default Sponsors