import Image from "next/image";
import { assets } from "./assets/assets";
import Hero_Section from "./components/home-page_subsections/Hero_Section";
import Feature_Section from "./components/home-page_subsections/Feature_Section";
import Invoicing from "./components/home-page_subsections/Invoicing";
import Services_Section from "./components/home-page_subsections/Services_Section";
import Client_FAQs from "./components/home-page_subsections/Client_FAQs";

export default function Home() {
  return (
    <>
      <Hero_Section />
      <Feature_Section />
      <Invoicing />
      <Services_Section />
      <Client_FAQs />
    </>
  );
}
