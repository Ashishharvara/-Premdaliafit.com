import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { AboutTrainer } from './components/sections/AboutTrainer';
import { StatsCounter } from './components/sections/StatsCounter';
import { Programs } from './components/sections/Programs';
import { Transformations } from './components/sections/Transformations';
import { WhyChooseMe } from './components/sections/WhyChooseMe';
import { HowItWorks } from './components/sections/HowItWorks';
import { Pricing } from './components/sections/Pricing';
import { Testimonials } from './components/sections/Testimonials';
import { Gallery } from './components/sections/Gallery';
import { FAQ } from './components/sections/FAQ';
import { CTASection } from './components/sections/CTASection';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';

import { ScrollProgress } from './components/ui/ScrollProgress';
import { BackToTop } from './components/ui/BackToTop';
import { ProgramModal } from './components/ui/ProgramModal';
import type { Program } from './types';

export function App() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [prefilledTarget, setPrefilledTarget] = useState<string>('Fat Loss & Metabolic Reset');

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPrograms = () => {
    const progEl = document.getElementById('programs');
    if (progEl) {
      progEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProgram = (program: Program) => {
    setSelectedProgram(program);
  };

  const handleSelectProgramFromModal = (programTitle: string) => {
    setPrefilledTarget(programTitle);
    scrollToContact();
  };

  const handleSelectPlan = (planName: string) => {
    setPrefilledTarget(planName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col font-sans selection:bg-[#C7F000] selection:text-black">
      {/* Scroll indicator bar at top */}
      <ScrollProgress />

      {/* Sticky Glass Navbar */}
      <Navbar onStartTrainingClick={scrollToContact} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Fullscreen Hero */}
        <Hero
          onStartJourney={scrollToContact}
          onViewPrograms={scrollToPrograms}
        />

        {/* Athletic Trust Logos */}
        <TrustBar />

        {/* About Coach & Philosophy */}
        <AboutTrainer onMeetCoachClick={scrollToContact} />

        {/* Viewport Animated Stats */}
        <StatsCounter />

        {/* Training Programs */}
        <Programs onExploreProgram={handleExploreProgram} />

        {/* Real Transformations & Interactive Slider */}
        <Transformations />

        {/* Why Choose Coach */}
        <WhyChooseMe />

        {/* How It Works 4-Step Process */}
        <HowItWorks />

        {/* Pricing Options */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* Testimonials Carousel */}
        <Testimonials />

        {/* Editorial Fitness Gallery */}
        <Gallery />

        {/* Accordion FAQ */}
        <FAQ />

        {/* High-Impact CTA Banner */}
        <CTASection onStartClick={scrollToContact} />

        {/* Fitness Blog */}
        <Blog />

        {/* Consultation Contact Intake */}
        <Contact selectedProgramOrPlan={prefilledTarget} />
      </main>

      {/* Global Dark Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Program Exploration Modal */}
      <ProgramModal
        program={selectedProgram}
        isOpen={selectedProgram !== null}
        onClose={() => setSelectedProgram(null)}
        onSelectProgram={handleSelectProgramFromModal}
      />
    </div>
  );
}

export default App;
