import { useState } from 'react';

const useScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toogleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toogleVisible);

  return { visible, scrollToTop };
};

export { useScrollButton };
