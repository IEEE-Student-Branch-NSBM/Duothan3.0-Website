import Head from "next/head";
import Hero from "../components/hero";
import Sponsors from "../components/sponsors";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Timeline from "../components/timeline";

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
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-0 md:mx-5 lg:mx-48">
        <Navbar />

        <Hero />
        <Timeline />
        <SectionTitle title=" Why should you use this landing page">
          Duathon 3.0 is a hackathon organized by the IEEE Student Branch of
          NSBM. This event is not just an ordinary Hackathon. The specialty is,
          we are going to conduct this event in association with Valentines'
          Day, and the competitors have to code in pairs. A team containing a
          male and a female has to participate in the Hackathon and they will
          get a time period of 12 hours. The hackathon is taking place as an
          Online event and they will receive a certificate upon completing the
          hackathon under the standards of the event.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <SectionTitle title="Learn how to fullfil your needs">
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate.
          So, don't forget to add one. Just like this.
        </SectionTitle>
        <Video />
        <SectionTitle title="Here's what our customers said">
          Testimonails is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </SectionTitle>
        <Testimonials />
        <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>
        <Sponsors />
        <Faq />
      </div>
      <Footer />
    </>
  );
}
