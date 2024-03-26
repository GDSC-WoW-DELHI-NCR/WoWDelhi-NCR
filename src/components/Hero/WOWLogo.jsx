import { useRef } from "react";
import WLogo from "../../assets/images/W_logo.png";
import WOWGear from "../../assets/images/wow_gear.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

function WOWLogo() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const imageRef = useRef();
  const timeline = useRef();

  useGSAP(() => {
    const imageItem = imageRef.current;
    timeline.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "-80% top",
          end: "80% top",
          scrub: true,
          markers: false,
        },
      })
      .to(imageRef.current, {
        rotate: 360,
      });
  });

  return (
    <div className="min-w-9/12 flex flex-row items-center justify-evenly md:space-x-8">
      <img
        src={WLogo}
        alt="WOW Logo"
        className="h-40 w-32 md:h-60 md:w-52 lg:h-80 lg:w-72"
      />
      <img
        ref={imageRef}
        src={WOWGear}
        alt="WOW Logo"
        className="h-36 w-36 md:h-52 md:w-52 lg:h-72 lg:w-72"
      />
      <img
        src={WLogo}
        alt="WOW Logo"
        className="h-40 w-32 scale-x-[-1] md:h-60 md:w-52 lg:h-80 lg:w-72"
      />
    </div>
  );
}

export default WOWLogo;
