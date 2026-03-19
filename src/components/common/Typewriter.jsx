import React, { useState, useEffect } from 'react';

const Typewriter = ({
  text = "Building the future, one line at a time...",
  speed = 20,
  deleteSpeed = 10,
  pauseDuration = 3000,
  loop = true,
  className = "",
  showCursor = true,
  cursorColor = "text-blue-400"
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        if (loop) {
          setIsDeleting(true);
        }
      }, pauseDuration);
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
      }
    } else {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, speed);
      } else if (loop) {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, text, speed, deleteSpeed, pauseDuration, loop]);

  return (
    <div className={`font-mono ${className}`}>
      <span className="text-gray-400 text-lg leading-relaxed">
        {displayText}
        {showCursor && (
          <span 
            className={`${cursorColor}`}
            style={{
              animation: 'blink 0.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              marginLeft: '2px',
              display: 'inline-block'
            }}
          >
            |
          </span>
        )}
      </span>
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Typewriter;