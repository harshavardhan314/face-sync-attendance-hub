
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimationInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 120,
      easing: 'ease-out-cubic'
    });

    // Update animations on window resize
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  return null;
};

export default AnimationInit;
