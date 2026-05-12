import { motion } from "motion/react";
import { type ReactNode, useEffect, useState } from "react";

interface KineticTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  style?: React.CSSProperties;
}

/**
 * A luxury text reveal component that uses mask-position
 * and subtle blur-to-sharp blooming for a high-end feel.
 */
export function KineticText({
  children,
  className = "",
  delay = 0,
  id,
  style,
}: KineticTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      id={id}
      className={`kinetic-reveal ${isVisible ? "visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        ...style,
      }}
    >
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
        animate={isVisible ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
