
import heart from "../../assets/images/heart.png"

function Footer() {
  return (
      
      <footer className="bg-g w-full text-center py-2 text-lg">
        <p className="flex justify-center gap-3 text-[18px] md:text-[23px] font-bold">Made with <span><img src={heart} alt="" /></span> by TEAM WOW DELHI-NCR</p>
      </footer>
  )
}

export default Footer