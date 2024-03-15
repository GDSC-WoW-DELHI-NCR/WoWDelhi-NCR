import side1 from "../../assets/images/side1.png"
import side2 from "../../assets/images/side2.png"
import instagram from "../../assets/images/instagram.png"
import X from "../../assets/images/x.png"
import linkedIn from "../../assets/images/linkedIn.png"

function Contact() {
  return (
    <div id="contact" className="relative h-[70vh] sm:h-[90vh] md:h-screen">
      <main className="flex flex-col justify-center items-center pt-40">
        <h1 className="text-r font-bold text-[40px] sm:text-[55px] md:text[70px] lg:text-[80px] uppercase">
          Contact Us
        </h1>
        <a href="mailto:delhi@gdscwow.xyz" className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold">
          Mail us at: delhi@gdscwow.xyz
        </a>
        <span className="flex items-center gap-10 mt-8">
          <img src={instagram} alt="instagram" />
          <img src={X} alt="x" />
          <img src={linkedIn} alt="linkedin" />
        </span>
        <span className="bg-white"></span>
      </main>
      <img src={side1} alt="" className="absolute left-0 top-[35%]" />
      <img src={side2} alt="" className="absolute right-0 top-10" />
    </div>
  );
}

export default Contact;
