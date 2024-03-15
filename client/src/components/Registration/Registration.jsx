import regBg from "../../assets/images/reg-bg.png";
import commudle from "../../assets/images/commudle.png";

function Registration() {
  return (
    <div id="register" className="relative">
      <img
        src={regBg}
        alt=""
        className="w-full h-auto aspect-square md:aspect-auto object-cover"
      />
      <main className="cursor-pointer w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[734px] h-[135px] sm:h-[175px] md:h-[225px] lg:h-[275px] xl:h-[335px] bg-white absolute flex flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg md:rounded-2xl border-t-[8px] md:border-t-[15px] border-black">
        <h1 className="text-b text-[20px] sm:text-[30px] md:text-[50px] lg:text-[70px] xl:text-[80px] uppercase pt-5 font-bold">
          Registration
        </h1>
        <p className="text-[#808080] text-[12px] sm:text-[14px] md:text-[18px] lg:text-[21px] xl:text-[24px]">
          Register for WOW DELHi-NCR on
        </p>
        <img
          src={commudle}
          alt=""
          className="pb-6 pt-3 h-[55px] sm:h-[65px] md:h-[75px] lg:h-[85px] xl:h-[95px]"
        />
      </main>
    </div>
  );
}

export default Registration;
