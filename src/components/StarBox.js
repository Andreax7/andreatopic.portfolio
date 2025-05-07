import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function StarBox() {
  const [scaledStars, setScaledStars] = useState([]);

  // Original background dimensions
  const BG_WIDTH = 1845;
  const BG_HEIGHT = 1036;

  // Original dot positions (based on your background)
  const originalStars = [
    { id: 1, cx: 1310, cy: 68, r: 8 },
    { id: 2, cx: 1024, cy: 125, r: 5 },
    { id: 3, cx: 1730, cy: 218, r: 5 },
    { id: 4, cx: 1660, cy: 215, r: 8 },
    { id: 5, cx: 1383, cy: 578, r: 5 },
    { id: 6, cx: 1296, cy: 247, r: 9 },
    { id: 7, cx: 1506, cy: 285, r: 7 },
  ];

  // Function to scale dot positions
  const updateStarPositions = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calculate scale factor based on viewport size
    const scaleX = screenWidth / BG_WIDTH;
    const scaleY = screenHeight / BG_HEIGHT;

    // Scale stars based on the viewport
    const newStars = originalStars.map((star) => ({
      ...star,
      cx: star.cx * scaleX,
      cy: star.cy * scaleY,
    }));

    setScaledStars(newStars);
  };

  // Update positions on resize
  useEffect(() => {
    updateStarPositions();
    window.addEventListener("resize", updateStarPositions);
    return () => window.removeEventListener("resize", updateStarPositions);
  }, []);

  return (
    <motion.div
       className="fixed top-0 left-0 w-screen h-screen"
       style={{ zIndex: -1 }}
      transition={{ type: "spring", stiffness: 30, damping: 50 }}
    >
      <svg width="90vw" height="80vh">
        {scaledStars.map((star) => (
          <motion.circle
            key={star.id}
            cx={star.cx}
            cy={star.cy}
            r={star.r}
            fill="#a6d4e8" // White color for a better glow
            style={{
              filter: "drop-shadow(0px 0px 8px rgba(164, 208, 230, 0.8))",
            }} // Strong visible glow effect
            animate={{ opacity: [1, 0.2, 0.9] }}
            transition={{
              duration: 1 + Math.random(),
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 0.5,
            }}
            whileHover={{
              fill: "#eef4af",
              scale: 1.5,
              filter: "drop-shadow(2px 2px 15px rgb(248, 248, 156))", // Stronger glow when hovered
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
