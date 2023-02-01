import Head from "next/head";
import Hero from "../components/hero";
import Sponsors from "../components/sponsors";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Timeline from "../components/timeline";

import Image from "next/image";
import logoFull from "../public/img/logo_full.png";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
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

      <div className="mx-0 md:mx-5 lg:mx-48">
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
          Duathon 3.0 is a hackathon organized by the IEEE Student Branch of
          NSBM. This event is not just an ordinary Hackathon. The specialty is,
          we are going to conduct this event in association with Valentines'
          Day, and the competitors have to code in pairs. A team containing a
          male and a female has to participate in the Hackathon and they will
          get a time period of 12 hours. The hackathon is taking place as an
          Online event and they will receive a certificate upon completing the
          hackathon under the standards of the event.
        </SectionTitle>
        <Timeline />
        
        {/* <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <SectionTitle title="Learn how to fullfil your needs">
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate.
          So, don't forget to add one. Just like this.
        </SectionTitle>
        <Video /> */}
        <SectionTitle title="CASH PRIZES">
          Testimonails is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </SectionTitle>
        <Testimonials />
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
        <Sponsors />
        {/* <Faq /> */}
      </div>
      <Footer />
    </>
  );
}
