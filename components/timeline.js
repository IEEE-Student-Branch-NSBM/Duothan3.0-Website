import React from "react";
import Image from "next/image";
import Container from "./container";
import webtimeImg from "../public/img/webtimeline.png";
import mobtimeImg from "../public/img/mobiletimeline.png";

export default function Timeline(){
    return (
          
     <> 
          
       <Container className="flex flex-wrap border-b-8 "> 
          
          <div >
           <h1 className={` box-border border-b-2 border-[#E52145] pt-4  pb-0.5 text-center text-2xl font-semibold  font-['Poppins'] text-[#E52145] `}>TIMELINE</h1>
           <div className={` m-4 p-8`} >
             <div className="hidden sm:block">
               <Image src={webtimeImg} />
             </div>
             <div className="block sm:hidden">
               <Image src={mobtimeImg} />
             </div>
           </div>   
          </div>
  
        
        
        </Container>
  
      </>   
    )

}