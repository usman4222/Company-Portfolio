import { useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const UseScrollAnimation = () => {
  const controls = useAnimation();
  const cardsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const elementPosition = cardsRef.current.getBoundingClientRect().top;
      const scrollPosition = window.innerHeight / 1.5;

      if (elementPosition < scrollPosition && !isVisible) {
        setIsVisible(true);
      }
    };

    const updateAnimation = async () => {
      if (isVisible) {
        await controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener('scroll', scrollHandler);

    updateAnimation();

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [controls, isVisible]);

  return { controls, cardsRef };
};

export default UseScrollAnimation;
