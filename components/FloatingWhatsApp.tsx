"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Elegant floating WhatsApp button — WhatsApp glyph on the site's blue gradient.
 * Soft pulse ring, hover label and entrance animation.
 */
export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, scale: 0.6, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-[60] flex items-center"
    >
      {/* Hover label */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.2 }}
            className="mr-3 hidden whitespace-nowrap rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-dna shadow-card backdrop-blur sm:block"
          >
            Fale com um Assessor
          </motion.span>
        )}
      </AnimatePresence>

      {/* Button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-dna shadow-float ring-1 ring-white/30">
        {/* Soft pulse ring */}
        <span className="absolute inset-0 animate-pulseSoft rounded-full" />
        <WhatsappLogo size={30} weight="fill" color="#FFFFFF" />
      </span>
    </motion.a>
  );
}
