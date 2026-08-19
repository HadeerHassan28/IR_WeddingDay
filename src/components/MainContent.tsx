import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Header } from "./Header";
import { Invitation } from "./Invitation";
import { Countdown } from "./Countdown";
import { Location } from "./Location";
import { RSVPSection } from "./RSVPSection";
import { InvitationData } from "../types";
import { GuestBookSection } from "./GuestBookSection";

export default function MainContent({
  invitationData,
  animationState,
  onRSVPClick,
}: {
  invitationData: InvitationData;
  animationState: string;
  onRSVPClick: () => void;
}) {
  console.log(invitationData);
  
  return (
    <AnimatePresence>
      {animationState !== "splash" && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 pt-24 pb-32"
        >
          <Header />
          <Invitation data={invitationData} />

          {/* Countdown Section */}
          <section className="py-8 md:py-12 px-4">
            <div className="max-w-2xl mx-auto">
              <Countdown targetDate="2026-08-28T19:00:00" />
            </div>
          </section>

          <Location
            location={invitationData.location}
            locationUrl={invitationData.locationUrl}
          />

          {/* RSVP Section */}
          <RSVPSection onRSVPClick={onRSVPClick} />

          <GuestBookSection
            googleSheetGeustBookUrl={invitationData.googleSheetGeustBookUrl}
          />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
