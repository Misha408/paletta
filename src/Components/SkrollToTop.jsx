import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WOW from 'wowjs';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  
  useEffect(() => {
    const wow = new WOW.WOW({
      offset: 300,
    });
    wow.init();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
