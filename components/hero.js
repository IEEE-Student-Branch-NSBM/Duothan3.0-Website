import Image from "next/image";
import Container from "./container";
import logoFull from "../public/img/logo_full.png";
import backgroundImage from "../public/img/BG.png"
import handImage from "../public/img/hand.png";
import heart from "../public/img/logo_heart.png";
import heroImg from "../public/img/hero.png";
import Button from "./buttons/button";

export default function Hero() {
  return (
    <>
    <div className="bg-black pt-[108px] border-b-8 border-red">
      <Container className="flex flex-wrap ">
        <style>
          {`
            .morbid{
              animation: text-load-animation 3s cubic-bezier(0.1, 0.1, 0.1, 1.0);
            }
            @keyframes text-load-animation{
              0%{
                opacity: 0;
                transform: translateX(-500px);
            
              }
              100%{
                opacity: 1;
                transform: translateX(0);
              }
            }
          
          
          
          
          `}
       

        </style>
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 morbid">
            <Image 
              src={logoFull}
              alt="Duothan Logo"
              loading="eager"
            />
            <p className="pt-10 pb-5 text-lg text-center lg:text-left leading-normal text-white lg:text-xl xl:text-xl">
              <b>The One and Only</b> 7-hour Physical duo-hackathon in Sri Lanka.
              Happening for the <b>3rd</b>  time in Sri Lanka was organized by 
              the IEEE Student Branch of NSBM Green University. 
            </p>
            <p className="pb-10 font-bold text-white text-xl">24<sup>th</sup> February 2022 | 09:00AM - 05:00PM</p>
            <Button>Register Now</Button>
          </div>
        </div>
        <div className="relative hidden lg:flex items-center justify-center w-full lg:w-1/2 ">
          <Image src={backgroundImage} width={478.54} height={634.24} className="top-0 -translate-y-10"/>
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
          <div className="absolute flex flex-col bottom-[-45px] w-60 hero-image">
            <div className="relative translate-x-11 heart-image"><Image src={heart}/></div>
            <Image src={handImage} className="relative"/>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
}