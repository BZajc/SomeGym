import React, { useEffect, useState } from "react";

function ProgressBar() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const windowHeight = scrollHeight - clientHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="progress-bar" style={{ width: `${scrollWidth}%` }}></div>
  );
}

export default ProgressBar;
