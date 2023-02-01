import Container from "./container";
import SponsorCard from "./cards/SponsorCard";
import Image from "next/dist/client/image";

export default function Sponsors() {
  return (
    <Container className="flex flex-wrap bg-black">
        <div className="w-full">
            <h1 className="box-border border-b-2 border-[#E52145] pt-4  pb-0.5 text-center text-2xl font-semibold text-red w-full ">SPONSORS</h1>
        </div>
    </Container>
  );
}