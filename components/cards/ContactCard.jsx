import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import GmailIcon, { Gmail } from "../icons/gmail";

export default function ContactCard({ name, post, of, whatsapp, email, img, ...props }) {
    return(
        <div className="w-[24rem] h-[12rem] bg-[#333333] rounded-xl relative flex mt-5">
            <Image src={img} height={192} width={120} className="object-cover rounded-l-xl border-none"></Image>
            <div className="h-full w-[calc(100%-120px)] flex flex-col justify-center">
                <div className="ml-5">
                    <div className="mb-2">
                        <h2 className="font-bold text-base text-white">{name}</h2>
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm text-gray-400 mb-1.5">{post}</h3>
                        <h3 className="font-semibold text-sm text-gray-400">{of}</h3>
                    </div>
                    <div className="flex items-center mt-2">
                        <a href={`https://wa.me/${whatsapp}`}><FaWhatsapp color="#25D366" size={20}/></a>
                        <a href={`mailto:${email}`} className="ml-2.5"><GmailIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}