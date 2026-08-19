import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "./components/SplashScreen";
import { RSVPModal } from "./components/RSVPModal";
import { AnimationState } from "./types";
import MainContent from "./components/MainContent";
import FixedHeader from "./components/FixedHeader";
import { Footer } from "./components/Footer";
import { invitationData } from "./data";


const App: React.FC = () => {


  
  const [animationState, setAnimationState] =
    useState<AnimationState>("splash");
  const [showRSVPModal, setShowRSVPModal] = useState(false);
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  const handleReveal = () => {
    setAnimationState("revealing");
    setTimeout(() => {
      setAnimationState("revealed");
      setShowFixedHeader(true);
    }, 800);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowFixedHeader(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen text-charcoal font-tajawal">
      <AnimatePresence>
        {animationState === "splash" && (
          <SplashScreen onReveal={handleReveal} />
        )}
      </AnimatePresence>

      {/* Fixed Header */}
      <FixedHeader
        animationState={animationState}
        showFixedHeader={showFixedHeader}
      />

      {/* Main Content */}
      <MainContent
        invitationData={invitationData}
        animationState={animationState}
        onRSVPClick={() => setShowRSVPModal(true)}
      />

     

      {/* RSVP Modal */}
      <RSVPModal
        isOpen={showRSVPModal}
        onClose={() => setShowRSVPModal(false)}
        googleSheetsUrl={invitationData.googleSheetsUrl}
      />

      {/* Footer */}
      <div className="bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default App;
