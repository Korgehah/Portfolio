// TODO: Удали неиспользуемый код. Тут явно не то, что нужно для darkTheme
import { useEffect, useState } from 'react';

const useDarkTheme = () => {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
};

export { useDarkTheme };
