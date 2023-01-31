import React from "react";
import Container from "./container";


export default function Rules(){
    return (
          
     <> 
     <style>
      {`
          @media (min-width: 350px) { 
            p {
              margin-left:20px;
              margin-right:20px;
            }
           }
      `}
     </style>
          
       <Container className="flex flex-wrap "> 
          
          <div className="">
           <h1 className={` box-border border-b-2 border-[#E52145] pt-4 mb-10  pb-0.5 text-center text-2xl font-semibold  font-['Poppins'] text-[#E52145] `}>RULES & REGULATIONS</h1>
          
           <div  className="text-justify ">
           <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <br></br>
           <p>Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum.</p>
           <br></br> 
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
           <br></br>
           <p>Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum.</p>
           </div>

         </div>   
        
         <div className="flex items-center justify-center w-screen py-20">

        <a href="#" className="object-center border-[#E52145] border-2 px-8  py-1 rounded-full font-semibold  font-['Poppins']">Download PDF ↓</a>
         
         </div>
        </Container>
  
      </>   
    )

}