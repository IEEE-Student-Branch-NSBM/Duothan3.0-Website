import Image from "next/image";
import Container from "./container";
import logoFull from "../public/img/logo_full.png";
import Countdown from "./timers/countdown";
import backgroundImage from "../public/img/BG.png";
import handImage from "../public/img/hand.png";
import heart from "../public/img/logo_heart.png";
import heroImg from "../public/img/hero.png";
import Button from "./buttons/button";
import Link from "next/link";
import character1 from "../public/img/character1.png";
import character2 from "../public/img/character2.png";

export default function Hero() {
  return (
    <div id="home">
      <Container className="flex flex-wrap border-b-8 border-red">
        <div className="flex items-center justify-center w-full">
          <div className="max-w-2xl mb-8 flex flex-col items-center">
            <Image src={logoFull} alt="Duothan Logo" loading="eager" />
            <p className="pt-10 pb-5 text-lg text-justify leading-normal  text-white lg:text-xl xl:text-xl">
              <b>The One and Only</b> 7-hour Physical Team-hackathon in Sri
              Lanka. Happening for the <b>3rd</b> time in Sri Lanka was
              organized by the IEEE Student Branch of NSBM Green University.
            </p>
            <p className="pb-10 font-bold text-white text-xl text-center">
              24<sup>th</sup> February 2023 | 09:00AM - 06:00PM
            </p>

            <Countdown 
              timeTillDate="02 24 2023, 05:00 pm" 
              timeFormat="MM DD YYYY, h:mm a" 
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
