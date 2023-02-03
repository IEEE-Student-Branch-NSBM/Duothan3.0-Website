import Head from "next/head";
import Hero from "../components/hero";
import Sponsors from "../components/sponsors";
import Navbar from "../components/navbar";
import Rules from "../components/rules";
import SectionTitle from "../components/sectionTitle";
import Contact from "../components/contact";
import Timeline from "../components/timeline";
import Image from "next/image";
import logoFull from "../public/img/logo_full.png";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>Duothan 3.0</title>
        <meta
          name="description"
          content="The One and Only 7-hour Physical duo-hackathon in Sri Lanka.
          Happening for the 3rd  time in Sri Lanka was organized by 
          the IEEE Student Branch of NSBM Green University. 
          "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-5 md:mx-5 lg:mx-48">
        <Navbar />

        <Hero />
        <SectionTitle title="">
          <Image
            src={logoFull}
            alt="Duothan Logo"
            loading="eager"
            width={735}
            height={178}
          />
          Duothan 3.0 is a buildathon organized by the IEEE Student Branch of
          NSBM. This event is not just an ordinary buildathon. The specialty is,
          we are going to conduct this event in association with Valentines’
          Day, and the competitors have to build in two pairs. Each team needs
          04 members and they will get a time period of 07 hours. The buildathon
          is taking place as a Physical event, not only for NSBM Green
          University students but also for undergraduates from any university
          and all the participants will receive a digital certificate upon
          completing the buildathon under the standards of the event. This is a
          great opportunity to stand a chance to win exciting cash prizes as a
          team.
        </SectionTitle>
        <Timeline />
        {/* <SectionTitle title="CASH PRIZES">
          Testimonails is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </SectionTitle>
        <Testimonials /> */}
        {/* <Sponsors /> */}
        <Rules />
        <Contact />
        <Faq />
      </div>
      <Footer />
    </>
  );
}
