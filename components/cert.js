import React from "react";
import Image from "next/image";
import Container from "./container";
import webtimeImg from "../public/img/webtimeline.png";
import mobtimeImg from "../public/img/mobiletimeline.png";

export default function Cert() {
  return (
    <div id="cert">
       <h1 className="box-border border-b-2 border-[#E52145] pt-4 pb-0.5 text-center text-2xl font-semibold text-[#E52145] w-full">
         CERTIFICATE VALIDATION
        </h1>
        <div className="w-full mt-8 mx-auto rounded-2xl">
           <iframe
        src="https://script.google.com/macros/s/AKfycbzE64RuOhcCDl9tA0q22Z8acAuwiv0-qI-XaBIe9a4hR3IIPOVZ1QbmqRe_MnGykr55jA/exec"
        style={{ width: "100%", height: "50vh" }}
      ></iframe>
        </div>
     
    </div>
  );
}
