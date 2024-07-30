
import LogoutButton from "@/components/LogoutButton";
import Hero from "@/components/Hero";
import HeroImage from "@/components/HeroImage";
import SectionFeatures from "@/components/SectionFeatures";
import { Pricing } from "@/components/Pricing";

export default function Home() {




  return (
    <main className="relative bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
      <Hero />
      <HeroImage />
      <SectionFeatures />
      
      <Pricing />

      {/* <LogoutButton>Logout</LogoutButton> */}
      
      </div>
      </main>
  );
}
