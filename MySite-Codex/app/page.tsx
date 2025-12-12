import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { ProjectsSection } from "@/components/sections/projects";
import { ProcessSection } from "@/components/sections/process";
import { LabSection } from "@/components/sections/lab";
import { PersonalSection } from "@/components/sections/personal";
import { ContactSection } from "@/components/sections/contact";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <ProcessSection />
      <LabSection />
      <PersonalSection />
      <ContactSection />
    </>
  );
}
