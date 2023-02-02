import Container from "./container";
import ContactCard from "./cards/ContactCard";
import IshadiPicture from "../public/img/ishadi.png";
import ChathurangaPicture from "../public/img/chathuranga.png";
import WathsalaPicture from "../public/img/wathsala.png";

export default function Contact() {
    return (
        <Container className="flex flex-wrap">
            <h1 className="box-border border-b-2 border-[#E52145] pt-4  pb-0.5 text-center text-2xl font-semibold text-red w-full">CONTACT</h1>
            <div className="flex flex-col lg:flex-row flex-wrap mt-10 w-full justify-around items-center">
                <ContactCard name="Ishadhi Handapangoda" post="Event Coordinator" of="IEEE Student Branch of NSBM" img={IshadiPicture} whatsapp="+947777777777" email="example@ieee.com"/>
                <ContactCard name="Chathuranga Senarathna" post="Co - Chairperson" of="Duothan 3.0" img={ChathurangaPicture} whatsapp="+94777777777" email="example@ieee.com"/>
                <ContactCard name="Wathsala Gamarachchi" post="Co - Chairperson" of="Duothan 3.0" img={WathsalaPicture} whatsapp="+947777777777" email="example@ieee.com"/>
            </div>
        </Container>
    )
}