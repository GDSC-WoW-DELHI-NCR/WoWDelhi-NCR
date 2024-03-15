import wow from "../../assets/images/wow-logo.png";
import { motion } from "framer-motion";
import CounterComponent from "../CounterComponent/CounterComponent";

function About() {
  return (
    <div id="about" className="m-auto pt-40 px-10 md:px-16">
      <article className="relative h-[595px] bg-y flex flex-col items-center justify-center rounded-2xl gap-3">
        <h1 className="text-black text-[40px] sm:text-[55px] md:text[70px] lg:text-[80px] font-bold">
          About
        </h1>
        <p className="text-[19px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[36px] 2xl:text-[40px] px-5 sm:px-8 md:px-12 lg:px-16 pb-10 text-center">
          A collaborative event between{" "}
          <span className="text-b font-semibold">40+ GDSCs</span> from
          <span className="text-r font-semibold"> DELHI-NCR</span> called GDSC
          (GDSCs for GDSCs), also known as GDSC{" "}
          <span className="text-g font-semibold">WOW</span> , aims to unite
          communities, students, and developers under one roof. This occasion
          will serve as a platform for learning and collaborative project work
          with professionals in real time. It will assist newcomers in taking a
          step toward their technical careers.
        </p>
        <span className="absolute -top-1 bg-[#1E1E1E] w-[239px] md:w-[339px] h-[20px] rounded-b-2xl"></span>
        <span className="absolute -bottom-1 bg-[#1E1E1E] w-[239px] md:w-[339px] h-[20px] rounded-t-2xl"></span>
      </article>
      <section className="relative">
        <article className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-3 mt-32">
          <main className="bg-g pl-8 py-8 rounded-2xl flex flex-col gap-8">
            {/* <h1 className="text-[60px] xl:text-[70px]">1000+</h1> */}
            <CounterComponent targetCount={1000} label={"Attendees"} />
            {/* <p className="text-[30px] sm:text-[35px] xl:text-[40px]">
              Attendees
            </p> */}
          </main>
          <main className="bg-b p-8 py-8 rounded-2xl flex flex-col gap-8">
            {/* <h1 className="text-[60px] xl:text-[70px]">80+</h1> */}
            <CounterComponent targetCount={80} label={"Volunteers"} />
            {/* <p className="text-[30px] sm:text-[35px] xl:text-[40px]">
              Volunteers
            </p> */}
          </main>
          <main className="bg-white text-black pl-8 py-8 rounded-2xl flex flex-col gap-8">
            {/* <h1 className="text-[60px] xl:text-[70px]">40+</h1> */}
            <CounterComponent targetCount={40} label={"GDSC"} />
            {/* <p className="text-[30px] sm:text-[35px] xl:text-[40px]">GDSC</p> */}
          </main>
          <main className="bg-r pl-8 py-8 rounded-2xl flex flex-col gap-8">
            {/* <h1 className="text-[60px] xl:text-[70px]">3</h1> */}
            <CounterComponent targetCount={3} label={"Tracks"} />
            {/* <p className="text-[30px] sm:text-[35px] xl:text-[40px]">Tracks</p> */}
          </main>
        </article>
        <aside className="absolute w-16 h-16 bg-black flex justify-center items-center rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.img
            src={wow}
            alt=""
            className="h-12"
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </aside>
      </section>
    </div>
  );
}

export default About;
