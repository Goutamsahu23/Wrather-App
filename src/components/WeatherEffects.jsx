import { useState, useEffect } from 'react';

const WeatherEffects = ({ weatherCondition }) => {
  const [windowWidth, setWindowWidth] = useState(1000);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (!weatherCondition) return null;

  const condition = weatherCondition.toLowerCase();
  const isRain = condition.includes('rain') || condition.includes('drizzle');
  const isSnow = condition.includes('snow');
  const isSunny = condition.includes('clear') || condition.includes('sun');
  const isCloudy = condition.includes('cloud');
  const isThunderstorm = condition.includes('thunderstorm') || condition.includes('storm');
  const isFog = condition.includes('fog') || condition.includes('mist') || condition.includes('haze');

  return (
    <div className="weather-effects">
      {isRain && (
        <div className="rain-effect">
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {Array.from({ length: 50 }).map((_, i) => {
              const x = Math.random() * 100;
              const delay = Math.random() * 2;
              const duration = 0.5 + Math.random() * 0.5;
              return (
                <line
                  key={i}
                  x1={`${x}%`}
                  y1="0%"
                  x2={`${x}%`}
                  y2="100%"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="y1"
                    values="-10%;110%"
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="y2"
                    values="-10%;110%"
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </line>
              );
            })}
          </svg>
        </div>
      )}
      {isSnow && (
        <div className="snow-effect">
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {Array.from({ length: 50 }).map((_, i) => {
              const x = Math.random() * 100;
              const delay = Math.random() * 3;
              const duration = 2 + Math.random() * 3;
              const size = 4 + Math.random() * 4;
              return (
                <circle
                  key={i}
                  cx={`${x}%`}
                  cy="0%"
                  r={size}
                  fill="rgba(255, 255, 255, 0.8)"
                >
                  <animate
                    attributeName="cy"
                    values="0%;100%"
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cx"
                    values={`${x}%;${x + (Math.random() - 0.5) * 10}%`}
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="1;0.3;1"
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
          </svg>
        </div>
      )}
      {isSunny && (
        <div className="sun-effect">
          <svg width="150" height="150" viewBox="0 0 150 150" style={{ position: 'absolute', top: '10%', right: '10%' }}>
            <defs>
              <linearGradient id="sunGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
                <stop offset="100%" stopColor="rgba(255, 255, 200, 0.4)" />
              </linearGradient>
            </defs>
            <circle cx="75" cy="75" r="40" fill="url(#sunGradient)">
              <animate
                attributeName="opacity"
                values="0.8;1;0.8"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <g>
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30) * (Math.PI / 180);
                const x1 = 75 + Math.cos(angle) * 50;
                const y1 = 75 + Math.sin(angle) * 50;
                const x2 = 75 + Math.cos(angle) * 65;
                const y2 = 75 + Math.sin(angle) * 65;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(255, 255, 255, 0.6)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values={`0 75 75;360 75 75`}
                      dur="20s"
                      repeatCount="indefinite"
                    />
                  </line>
                );
              })}
            </g>
          </svg>
        </div>
      )}
      {isCloudy && (
        <div className="cloud-effect">
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {Array.from({ length: 3 }).map((_, i) => {
              const startX = -200;
              const y = 100 + i * 80;
              const delay = i * 2;
              const duration = 20 + i * 5;
              return (
                <g key={i}>
                  <circle cx={startX} cy={y} r="40" fill="rgba(255, 255, 255, 0.2)" />
                  <circle cx={startX + 30} cy={y - 30} r="50" fill="rgba(255, 255, 255, 0.2)" />
                  <circle cx={startX + 70} cy={y - 20} r="45" fill="rgba(255, 255, 255, 0.2)" />
                  <circle cx={startX + 100} cy={y} r="35" fill="rgba(255, 255, 255, 0.2)" />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={`${startX} 0;${windowWidth + 400} 0`}
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </g>
              );
            })}
          </svg>
        </div>
      )}
      {isThunderstorm && (
        <>
          <div className="rain-effect">
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              {Array.from({ length: 60 }).map((_, i) => {
                const x = Math.random() * 100;
                const delay = Math.random() * 2;
                const duration = 0.3 + Math.random() * 0.4;
                return (
                  <line
                    key={i}
                    x1={`${x}%`}
                    y1="0%"
                    x2={`${x}%`}
                    y2="100%"
                    stroke="rgba(255, 255, 255, 0.7)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <animate
                      attributeName="y1"
                      values="-10%;110%"
                      dur={`${duration}s`}
                      begin={`${delay}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y2"
                      values="-10%;110%"
                      dur={`${duration}s`}
                      begin={`${delay}s`}
                      repeatCount="indefinite"
                    />
                  </line>
                );
              })}
            </svg>
          </div>
          <div className="lightning-effect">
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              {Array.from({ length: 3 }).map((_, i) => {
                const x = 30 + i * 20;
                const delay = 5 + i * 3;
                return (
                  <polyline
                    key={i}
                    points={`${x},0 ${x - 5},50 ${x + 5},50 ${x},100`}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.9)"
                    strokeWidth="4"
                  >
                    <animate
                      attributeName="opacity"
                      values="0;1;0.5;1;0"
                      dur="0.2s"
                      begin={`${delay}s`}
                      repeatCount="indefinite"
                    />
                  </polyline>
                );
              })}
            </svg>
          </div>
        </>
      )}
      {isFog && (
        <div className="fog-effect">
          <svg width="120%" height="200" style={{ position: 'absolute', bottom: 0, left: '-10%' }}>
            {Array.from({ length: 5 }).map((_, i) => {
              const delay = i * 2;
              const duration = 15 + i * 5;
              return (
                <rect
                  key={i}
                  x="0"
                  y={i * 40}
                  width="100%"
                  height="40"
                  fill="rgba(255, 255, 255, 0.1)"
                >
                  <animate
                    attributeName="x"
                    values="-10%;10%"
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.1;0.2;0.1"
                    dur={`${duration}s`}
                    begin={`${delay}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              );
            })}
          </svg>
        </div>
      )}
    </div>
  );
};

export default WeatherEffects;
