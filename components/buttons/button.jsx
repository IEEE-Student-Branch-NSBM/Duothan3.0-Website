import React from "react";
export default function Button({ children, href }) {
  return (
    <>
        <style>
            {`
                .button-pulse-animation {   
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0% {
                        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.9);
                    }
                    90% {
                        box-shadow: 0 0 0 15px rgba(255, 0, 0, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
                    }
                }
            `}
        </style>
        <a href={href} 
        className="button-pulse-animation group relative px-10 py-2 inline-flex bg-transparent border-[3px] border-red rounded-full text-white font-extrabold text-lg cursor-pointer duration-300 ease-in-out hover:border-transparent hover:bg-red
        after:w-full after:h-full after:content-[attr(data-text)] after:absolute after:opacity-0 after:text-white after:translate-y-[25%] after:duration-300 after:ease-in-out hover:after:translate-y-0 hover:after:content-[attr(data-text)] hover:after:opacity-100 hover:after:duration-300 hover:after:ease-in-out" 
        data-text={children}>
            <span className="block duration-300 ease-in-out group-hover:opacity-0 group-hover:translate-y-[-25%]">{children}</span>
        </a>
    </>
  );
}