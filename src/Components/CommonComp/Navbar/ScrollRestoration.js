import { useEffect } from "react";
import { useLocation, unstable_useScrollRestoration as useScrollRestoration } from "react-router-dom";

const ScrollRestoration = () => {
  const { key } = useLocation();
  const { scrollY, saveScroll } = useScrollRestoration(key);

  useEffect(() => {
    return () => saveScroll(window.scrollY);
  }, [key, saveScroll]);

  useEffect(() => {
    window.scrollTo(0, scrollY || 0);
  }, [scrollY]);

  return null;
};

export default ScrollRestoration;
