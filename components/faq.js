import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="flex flex-wrap mt-20">
      <h1 className="box-border border-b-2 border-[#E52145] pt-4 pb-0.5 text-center text-2xl font-semibold text-[#E52145] w-full">
        RULES & REGULATIONS
      </h1>
      <div className="w-full mt-8 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-red`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Is this template completely free to use?",
    answer: "Yes, this template is completely free to use.",
  },
  {
    question: "Can I use it in a commercial project?",
    answer: "Yes, this you can.",
  },
  {
    question: "What is your refund policy? ",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
  },
   {
    question: "What conditions may apply for Duathon 3.0?",
    answer:
    " A team should consist of four participants. Team members should belong to the same university. The participants should compete throughout the whole 07 hours of the buildathon. Teams should compete for the competition according to the instructions provided by the organizing committee of Duothan 3.0. Every participant should accept and respect the final decision of the organizing committee. For all the undergraduates from any university."
  },
  {
    question: "What is the flow of the buildathon?",
    answer: 
    "The buildathon starts at 9.00 AM on 24th February. You need to build the half-build application according to the given instructions within 07 hours of time."
  },
  {
    question: "Why participate?",
    answer: "This is a fabulous occasion to pair up with your partners and build the heart out this February. You will get a better experience in developing throughout the session. You will be able to understand your level and start from where you are now and improve yourselves. Hack this valentine with your partner and stand a chance to win cash prizes and certificates. We hope to give a digital certificate for all the participants to appreciate their effort and participation in the Duothan 3.0."
  },
  {
    question: "How to reach us?",
    answer: "You can reach out to the organizing committee of Duothan 3.0 during the buildathon. If you have any questions, please feel free to contact us ASAP. You can contact us via the IEEE NSBM Facebook page or send an email to nsbmieee@gmail.com."
  },
];
