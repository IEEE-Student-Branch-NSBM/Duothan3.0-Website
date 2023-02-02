import React from "react";
import Container from "./container";
import Button from "./buttons/button";
import { FaArrowDown } from "react-icons/fa";

export default function Rules() {
    return (
        <Container className="flex flex-wrap mt-20">
            <div className="w-full flex flex-col items-center">
                <h1 className="box-border border-b-2 border-[#E52145] pt-4 pb-0.5 text-center text-2xl font-semibold text-[#E52145] w-full">RULES & REGULATIONS</h1>
                <div className="mt-10 text-justify text-lg text-white font-medium mx-7 lg:mx-0">
                    <p className="pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className="pt-4">
                        Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit tortor, sagittis quis eros quis, mattis viverra lorem. Aliquam interdum nibh non sem tristique rutrum.
                        
                    </p>
                </div>
                <div className="mt-10">
                    <Button href="#">Download PDF <FaArrowDown className="inline"/></Button>
                </div>
            </div>
        </Container>
    )
}