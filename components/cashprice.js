import React from "react";
import Image from "next/image";
import Price1 from "../public/img/price1.png"
import Price2 from "../public/img/price2.png"
import Price3 from "../public/img/price3.png"
import Container from "./container";


export default function Cashprice(){
    return (
          
     <> 
     
          
       <Container className={`flex flex-wrap`}> 
          
<div>
           <h1 className={` box-border border-b-2 border-[#E52145] pt-4  pb-0.5 text-center text-2xl font-semibold  font-['Poppins'] text-[#E52145] `}>CASH PRIZES</h1>
       <div className={` m-4 p-8`} >
          
          <div className="flex flex-col sm:flex-row justify-center">
        
          <div className="text-center   sm:ml-15 sm:mr-15 sm:order-1 md:order-2">
             <Image src={Price1} alt="Winner" />
             <p className="font-poppins font-bold mt-1 mb-2 text-3xl">Winner</p>
             <p className="font-poppins font-bold  text-3xl">Rs.30,000</p>
          </div>
  

          <div className="text-center  mt-20 md:mr-20 sm:mr-15 sm:order-2 md:order-1">
             <Image src={Price2} alt="Runner-Up" />
             <p className="font-poppins font-bold mt-1 mb-2  text-3xl">1st Runner-Up</p>
             <p className="font-poppins font-bold text-3xl">Rs.20,000</p>
           </div>

  
           <div className="text-center  mt-20 md:ml-20 sm:ml-15 sm:order-3 md:order-3">
             <Image src={Price3} alt="Third Place" />
             <p className="font-poppins font-bold mt-1 mb-2 text-3xl">2nd Runner-Up</p>
            <p className="font-poppins font-bold text-3xl">Rs.10,000</p>
           </div>

        </div>
         <p className="pt-4 mt-10 pb-0.5 text-center text-xl font-bold  font-['Poppins'] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. </p>
     </div >   

</div>
  
        
        
        </Container>
  
      </>   
    )

}