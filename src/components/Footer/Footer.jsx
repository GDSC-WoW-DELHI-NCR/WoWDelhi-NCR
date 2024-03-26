import heart from "../../assets/images/heart.png";

function Footer() {
  return (
    <footer className="bg-g w-full text-center py-2 text-lg">
      <p className="flex justify-center items-center gap-3 text-[12px] sm:text-[15px] md:text-[23px] font-bold">
        Made with{" "}
        <span>
          <img src={heart} alt="" className="h-4 md:h-full" />
        </span>{" "}
        by TEAM WOW DELHI-NCR
      </p>
    </footer>
  );
}

export default Footer;
