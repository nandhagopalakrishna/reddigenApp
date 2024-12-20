import { useState, useEffect } from 'react';

export function useScrollBehavior() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDirection && 
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }

      // Show navbar when scrolling up or at the top
      if (scrollY < lastScrollY || scrollY < 100) {
        setShowNavbar(true);
      } 
      // Hide navbar when scrolling down and not at the top
      else if (scrollY > 100 && scrollY > lastScrollY) {
        setShowNavbar(false);
      }
      
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    window.addEventListener('scroll', updateScrollDirection);
    
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection, lastScrollY]);

  return { scrollDirection, showNavbar };
}