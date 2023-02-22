import React from "react";
import Container from "./container";
import Button from "./buttons/button";
import { FaArrowDown } from "react-icons/fa";

export default function Rules() {
  return (
    <div id="rules">
      <Container className="flex flex-wrap mt-10">
        <div className="w-full flex flex-col items-center">
          <h1 className="box-border border-b-2 border-[#E52145] pt-4 pb-0.5 text-center text-2xl font-semibold text-[#E52145] w-full">
            RULES & REGULATIONS
          </h1>
          <div className="mt-10 text-justify text-lg text-white font-medium lg:mx-0">
            <p className="pt-4">What conditions may apply for Duathon 3.0?</p>
            <ul className="pl-14 pt-10 list-disc">
              <li className="pb-2">
                A team should consist of four participants.
              </li>
              <li className="pb-2">
                Team members should belong to the same university.
              </li>
              <li className="pb-2">
                The participants should compete throughout the whole 07 hours of
                the buildathon.
              </li>
              <li className="pb-2">
                Teams should compete for the competition according to the
                instructions provided by the organizing committee of Duothan
                3.0.
              </li>
              <li className="pb-2">
                Every participant should accept and respect the final decision
                of the organizing committee.
              </li>
              <li className="pb-2">
                For all the undergraduates from any university.
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <a
              href="https://docs.google.com/document/d/1jokfIRisAch2cW0XA3IQGL7s7jiMtcHIkEK76KlKnMg/edit?usp=drivesdk"
              target="_blank"
            >
              {" "}
              <Button>
                Download PDF <FaArrowDown className="inline" />
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
