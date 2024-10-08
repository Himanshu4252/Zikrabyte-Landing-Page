import Image from "next/image";
import {Home} from "./Components/Flow1/Home/Home";
import { Offer } from "./Components/Flow1/Offer/Offer";
import { Section } from "./Components/Flow1/Projects/Section";
import { Service } from "./Components/Flow1/Service/Service";
import { Team } from "./Components/Flow1/Team/Team";
import { Contact } from "./Components/Flow1/Contact/Contact";
import Team2 from "./Components/Flow1/Team2/Team";
import { Lets } from "./Components/Flow1/Lets/Lets";


export default function LandingPage() {
  return (
    <main className="">
      <Home />
      <Offer />
      <Service />
      <Section />
      {/* <Team /> */}
      <Team2 />
      <Lets />
      <Contact />
    </main>
  );
}
