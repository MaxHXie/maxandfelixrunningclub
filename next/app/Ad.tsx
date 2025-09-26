"use client";

import { useEffect, useRef, useState } from "react";

export default function Ad() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const initialTimerRef = useRef<number | null>(null);
  const nextAdTimerRef = useRef<number | null>(null);
  const ads = [
    "/runs/ad1.png",
    "/runs/ad2.png",
    "/runs/ad3.png",
    "/runs/ad4.png",
  ];

  useEffect(() => {
    initialTimerRef.current = window.setTimeout(() => setIsOpen(true), 3000);
    return () => {
      if (initialTimerRef.current) window.clearTimeout(initialTimerRef.current);
      if (nextAdTimerRef.current) window.clearTimeout(nextAdTimerRef.current);
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      aria-hidden={!isOpen}
      style={{
        position: "fixed",
        right: "16px",
        bottom: "16px",
        zIndex: 1000,
        transform: isOpen ? "translateY(0)" : "translateY(120%)",
        transition: "transform 1200ms ease",
      }}
      onTransitionEnd={(e) => {
        if (e.propertyName !== "transform") return;
        if (isOpen) return; // only act when closing finished
        if (nextAdTimerRef.current) window.clearTimeout(nextAdTimerRef.current);
        if (currentAdIndex === 0) {
          nextAdTimerRef.current = window.setTimeout(() => {
            setCurrentAdIndex(1);
            setIsOpen(true);
          }, 3000);
        } else if (currentAdIndex === 1) {
          nextAdTimerRef.current = window.setTimeout(() => {
            setCurrentAdIndex(2);
            setIsOpen(true);
          }, 3000);
        } else if (currentAdIndex === 2) {
          nextAdTimerRef.current = window.setTimeout(() => {
            setCurrentAdIndex(3);
            setIsOpen(true);
          }, 3000);
        } else {
          setIsDone(true);
        }
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "8px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          overflow: "hidden",
          background: "#fff",
        }}
      >
        <button
          aria-label="Close ad"
          onClick={() => setIsOpen(false)}
          style={{
            position: "absolute",
            top: "6px",
            right: "6px",
            width: "28px",
            height: "28px",
            borderRadius: "14px",
            border: "none",
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            cursor: "pointer",
            lineHeight: 0,
          }}
        >
          ×
        </button>
        <a
          href="https://www.saucony.com/en/running/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block" }}
        >
          <img
            src={ads[currentAdIndex]}
            alt={`Advertisement ${currentAdIndex + 1}`}
            style={{ display: "block", width: "280px", height: "auto" }}
          />
        </a>
      </div>
    </div>
  );
}
