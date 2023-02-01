import Container from "./container";
import SponsorCard from "./cards/SponsorCard";
import axiataLogo from "../public/img/sponsors/axiata.png";
import virtusaLogo from "../public/img/sponsors/virtusa.png";
import $99xLogo from "../public/img/sponsors/99x.png";
import rootcodeLogo from "../public/img/sponsors/rootcode.png";

export default function Sponsors() {
  return (
    <Container className="flex flex-wrap bg-black">
        <div className="w-full">
            <h1 className="box-border border-b-2 border-[#E52145] pt-4  pb-0.5 text-center text-2xl font-semibold text-red w-full ">SPONSORS</h1>
            <div className="flex flex-col items-center w-full mt-24">
                <div className="flex flex-col items-center w-full"> 
                    <SponsorCard name={"Official Platinum Sponsor"} className="">
                        <Image src={axiataLogo} width={472} height={249} alt="Axiata Digital Labs" />
                    </SponsorCard>
                </div>
                <div className="flex flex-wrap justify-around xl:mt-10 w-full min-h-[200px] mb-10"> 
                    <SponsorCard name={"Official Gold Sponsor"} className="min-h-[175px] w-[450px] max-w-[450px] mt-24 xl:mt-0">
                        <div className="my-10 md:m-0"><Image src={$99xLogo} width={144.31} height={72.15} alt="99x"/></div>
                        <Image src={virtusaLogo} width={267.39} height={62.07} alt="Virtusa" />
                    </SponsorCard>
                    <SponsorCard name={"Official Silver Sponsor"} className="mt-24 xl:mt-0">
                        <Image src={rootcodeLogo} width={405} height={131} alt="Rootcode" />
                    </SponsorCard>
                </div>
            </div>
        </div>
    </Container>
  );
}