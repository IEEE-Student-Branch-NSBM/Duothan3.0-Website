import React from "react";

export default function SponsorCard({ name,  children, ...props }) {
  return (
    <div {...props}>
      <div className="mb-4">
        <h3 className="text-red font-semibold text-xl text-center">{name}</h3>
      </div>
      <div className="flex flex-wrap items-center justify-center flex-col">
        {children}
      </div>
    </div>
  );   
}