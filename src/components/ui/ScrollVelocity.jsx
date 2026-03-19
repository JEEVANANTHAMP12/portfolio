// @ts-nocheck
import { useRef, useLayoutEffect, useState, useEffect, memo, useMemo } from 'react';
import './ScrollVelocity.css';

/** @param {{ current: HTMLElement | null }} ref */
function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    
    // Debounce resize for performance
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateWidth, 100);
    };
    
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [ref]);

  return width;
}

/**
 * @typedef {Object} VelocityTextProps
 * @property {React.ReactNode} children
 * @property {number} baseVelocity
 * @property {string} [className]
 * @property {number} numCopies
 * @property {string} parallaxClassName
 * @property {string} scrollerClassName
 * @property {React.CSSProperties} [parallaxStyle]
 * @property {React.CSSProperties} [scrollerStyle]
 */

/** @type {React.FC<VelocityTextProps>} */
const VelocityText = memo((props) => {
  const {
    children,
    baseVelocity,
    className,
    numCopies,
    parallaxClassName,
    scrollerClassName,
    parallaxStyle,
    scrollerStyle
  } = props;

  const scrollerRef = useRef(null);
  const copyRef = useRef(null);
  const copyWidth = useElementWidth(copyRef);
  const xPos = useRef(0);
  const directionFactor = useRef(1);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const isVisible = useRef(true);

  function wrap(min, max, v) {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  useEffect(() => {
    if (!scrollerRef.current) return;
    
    let animationId;
    let lastTime = performance.now();

    // Intersection observer to pause when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(scrollerRef.current);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      
      if (scrollDelta > 0) {
        directionFactor.current = 1;
      } else if (scrollDelta < 0) {
        directionFactor.current = -1;
      }
      
      lastScrollY.current = currentScrollY;
    };

    const animate = (currentTime) => {
      // Skip if not visible or width not calculated
      if (!isVisible.current || copyWidth === 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const delta = currentTime - lastTime;
      lastTime = currentTime;

      const moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      xPos.current = wrap(-copyWidth, 0, xPos.current + moveBy);

      // Direct DOM manipulation for performance (no React re-renders)
      if (scrollerRef.current) {
        scrollerRef.current.style.transform = `translate3d(${xPos.current}px, 0, 0)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
      observer.disconnect();
    };
  }, [baseVelocity, copyWidth]);

  // Memoize spans to prevent recreation
  const spans = useMemo(() => {
    const result = [];
    for (let i = 0; i < numCopies; i++) {
      result.push(
        <span className={className} key={i} ref={i === 0 ? copyRef : null}>
          {children}
        </span>
      );
    }
    return result;
  }, [children, className, numCopies]);

  return (
    <div className={parallaxClassName} style={parallaxStyle}>
      <div 
        ref={scrollerRef}
        className={scrollerClassName} 
        style={scrollerStyle}
      >
        {spans}
      </div>
    </div>
  );
});

VelocityText.displayName = 'VelocityText';

/**
 * @typedef {Object} ScrollVelocityProps
 * @property {string[]} [texts]
 * @property {number} [velocity]
 * @property {string} [className]
 * @property {number} [numCopies]
 * @property {string} [parallaxClassName]
 * @property {string} [scrollerClassName]
 * @property {React.CSSProperties} [parallaxStyle]
 * @property {React.CSSProperties} [scrollerStyle]
 */

/** @type {React.FC<ScrollVelocityProps>} */
export const ScrollVelocity = memo((props) => {
  const {
    texts = [],
    velocity = 100,
    className = '',
    numCopies = 4,
    parallaxClassName = 'parallax',
    scrollerClassName = 'scroller',
    parallaxStyle,
    scrollerStyle
  } = props;
  return (
    <section>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          className={className}
          baseVelocity={index % 2 !== 0 ? -velocity : velocity}
          numCopies={numCopies}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
        >
          {text}&nbsp;
        </VelocityText>
      ))}
    </section>
  );
});

ScrollVelocity.displayName = 'ScrollVelocity';

export default ScrollVelocity;
