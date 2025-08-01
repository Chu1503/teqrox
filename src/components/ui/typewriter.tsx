"use client";

import { easeOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

// Define your messages and the part to highlight
const messages = [
  {
    full: "Our Solutions come in all Shapes, Sizes & Forms.",
    highlight: "Shapes, Sizes & Forms.",
  },
  {
    full: "We are a stack of Digital Innovators.",
    highlight: "Digital Innovators.",
  },
];

export default function TypewriterEffect() {
  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  const currentMessage = messages[msgIndex];
  const { full, highlight } = currentMessage;

  // Determine where highlight starts
  const highlightStart = full.indexOf(highlight);

  // Split current `text` into static + highlight parts
  const staticPart = text.slice(0, highlightStart);
  const highlightPart = text.slice(highlightStart);

  useEffect(() => {
    if (pause) return;

    const typingSpeed = isDeleting ? 40 : 65;

    const handler = setTimeout(() => {
      if (!isDeleting) {
        const nextText = full.slice(0, charIndex + 1);
        setText(nextText);
        setCharIndex((prev) => prev + 1);

        if (nextText === full) {
          setPause(true);
          setTimeout(() => {
            setIsDeleting(true);
            setPause(false);
          }, 3000);
        }
      } else {
        const nextText = full.slice(0, charIndex - 1);
        setText(nextText);
        setCharIndex((prev) => prev - 1);

        if (nextText === "") {
          setPause(true);
          setTimeout(() => {
            setIsDeleting(false);
            setMsgIndex((prev) => (prev + 1) % messages.length);
            setPause(false);
          }, 300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(handler);
  }, [charIndex, isDeleting, msgIndex, pause]);

  return (
    <>
      <div className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal text-dark text-center">
        <span>
          {staticPart}
          <span className="text-light-blue">{highlightPart}</span>
        </span>
        <span className="animate-pulse w-0.5 text-light-blue">|</span>
      </div>
    </>
  );
}
