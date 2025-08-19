import { useState, useEffect } from "react";

export default function useLargeScreen(breakpoint: number = 1024) {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= breakpoint);
    };

    checkScreenSize(); // run once on mount
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [breakpoint]);

  return isLargeScreen;
}
