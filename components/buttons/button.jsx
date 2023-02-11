import React from "react";
export default function Button({ children, href, ...props }) {
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
        <a href={href} {...props}
        className="button-pulse-animation group relative px-10 py-2 inline-flex bg-transparent border-[3px] border-red rounded-full text-white font-extrabold text-lg cursor-pointer duration-300 ease-in-out hover:border-transparent hover:bg-red">
            <span className="block duration-300 ease-in-out group-hover:opacity-0 group-hover:translate-y-[-25%]">{children}</span>
            <span className="w-full h-full absolute opacity-0 text-white translate-y-[25%] duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">{children}</span>
        </a>
    </>
  );
}