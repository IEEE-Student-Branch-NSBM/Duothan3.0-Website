import Image from "next/image";
import React from "react";
import Container from "./container";

import Winner from "../public/img/Winner.png";
import RunnerUp from "../public/img/RunnerUp.png";
import SecondRunnerUp from "../public/img/SecondRunnerUp.png";


export default function Testimonials() {
  return (
    <Container>
      <div className="w-full">
        <h1 className="box-border border-b-2 border-[#E52145] pt-4 pb-0.5 text-center text-2xl font-semibold text-[#E52145] w-full">
          CASH PRIZES
        </h1>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mt-10">
          <div className="xl:self-end order-2 xl:order-1 duration-300 hover:scale-110 transition ease-out">
            <div className="flex flex-col justify-between w-full h-full bg-gray-800 text-white px-14 rounded-2xl py-14 dark:bg-trueGray-800">

              <Avatar
                image={RunnerUp}
                name="1st Runner Up"
                title="Rs.20,000"
                width={303} height={244.76}
              />
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-auto pb-0 xl:pb-[60px] order-1 xl:order-2 duration-300 hover:scale-110 transition ease-out">
            <div className="flex flex-col justify-between bg-gray-800 text-white px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              

              <Avatar
                image={Winner}
                name="Winner"
                title="Rs.30,000"
              />
            </div>
          </div>
          <div className="xl:self-end order-3 duration-300 hover:scale-110 transition ease-out">
            <div className="flex flex-col justify-between w-full h-full bg-gray-800 text-white px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              

              <Avatar
                image={SecondRunnerUp}
                name="2nd Runner Up"
                title="RS.10,000"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex flex-col items-center mt-3 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-48 h-48 items-center">
        <Image
          src={props.image}
          width="303"
          height="244.76"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div className="flex flex-col items-center space-y-3">
        <div className="text-lg font-medium ;">{props.name}</div>
        <div className="text-3xl">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
