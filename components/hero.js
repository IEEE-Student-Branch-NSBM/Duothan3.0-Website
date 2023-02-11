import Image from "next/image";
import Container from "./container";
import logoFull from "../public/img/logo_full.png";
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
      <Container className="flex flex-wrap border-b-8 border-red b">
        <style>
          {`
            .morbid{
              animation: text-load-animation 4s cubic-bezier(0.1, 0.1, 0.1, 1.0);
            }
            @keyframes text-load-animation{
              0%{
                opacity: 0;
                transform: translateX(-200px);
            
              }
              100%{
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}
        </style>
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 morbid flex flex-col items-center lg:items-start">
            <Image src={logoFull} alt="Duothan Logo" loading="eager" />
            <p className="pt-10 pb-5 text-lg text-justify lg:text-left leading-normal  text-white lg:text-xl xl:text-xl">
              <b>The One and Only</b> 7-hour Physical team-hackathon in Sri
              Lanka. Happening for the <b>3rd</b> time in Sri Lanka was
              organized by the IEEE Student Branch of NSBM Green University.
            </p>
            <p className="pb-10 font-bold text-white text-xl text-center lg:text-left">
              24<sup>th</sup> February 2023 | 09:00AM - 06:00PM
            </p>

            <a href="https://forms.gle/n9zw8CwS6WPrJmvXA" target="_blank">
              <Button>Register Now</Button>
            </a>
          </div>
        </div>
        <div className="relative hidden lg:flex pt-0 lg:pt-44 xl:pt-0 items-center justify-center w-full lg:w-1/2 overflow-y-hidden">
          <div className="-translate-y-24 xl:-translate-y-10 ">
            <Image
              src={backgroundImage}
              width={478.54}
              height={634.24}
              className="top-0"
            />
          </div>
          <style>
            {`
              .hero-image {
                animation: hero-image-load 4s ease-in-out forwards;
              }
              @keyframes hero-image-load {
                0% {
                  transform: translateY(100px);
                }
                100% {
                  transform: translateY(0px);
                }
              }
              .heart-image{
                animation: heart-image-land 4s ease-in-out forwards;
              }
              @keyframes heart-image-land {
                0% {
                  margin-bottom: 50px;
                }
                100% {
                  margin-bottom: 0px;
                }
            `}
          </style>
          <div className="absolute center-[-45px] w-96 hero-image">
            <div className="relative translate-x-11 heart-image">
              <Image src={character2} />
            </div>
            {/* <Image src={handImage} className="relative" /> */}
          </div>
        </div>
      </Container>
    </div>
  );
}
