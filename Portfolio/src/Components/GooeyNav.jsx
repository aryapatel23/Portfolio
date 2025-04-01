import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const GooeyNav = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = ["#fff", "#f0f0f0", "#e0e0e0", "#d9d9d9", "#cfcfcf"], // Light shades for white theme
  initialActiveIndex = 0,
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const noise = (n = 1) => n / 2 - Math.random() * n;
  
  const getXY = (distance, pointIndex, totalPoints) => {
    const angle =
      ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (element) => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty("--time", `${bubbleTime}ms`);
    
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove("active");
      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.classList.add("particle");
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        particle.style.setProperty("--color", `${p.color}`);
        particle.style.setProperty("--rotate", `${p.rotate}deg`);
        point.classList.add("point");
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add("active");
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e, index) => {
    const liEl = e.currentTarget;
    if (activeIndex === index) return;
    setActiveIndex(index);
    updateEffectPosition(liEl);
    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".particle");
      particles.forEach((p) => filterRef.current.removeChild(p));
    }
    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth;
      textRef.current.classList.add("active");
    }
    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add("active");
    }
  }, [activeIndex]);

  return (
    <>
      <style>
        {`
          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
          }
          .effect.text {
            color: black;
            transition: color 0.3s ease;
          }
          .effect.text.active {
            color: black;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 8px;
            padding: 5px 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Light shadow */
          }
          .effect.filter {
            filter: blur(7px) contrast(100);
            mix-blend-mode: lighten;
          }
          .particle,
          .point {
            display: block;
            opacity: 0;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            transform-origin: center;
          }
          .particle {
            position: absolute;
            animation: particle 1s ease forwards;
          }
          .point {
            background: var(--color);
            opacity: 1;
          }
          @keyframes particle {
            0% {
              transform: translate(var(--start-x), var(--start-y));
              opacity: 1;
            }
            100% {
              transform: translate(var(--end-x), var(--end-y));
              opacity: 0;
            }
          }
          li {
            color: black;
            cursor: pointer;
            padding: 10px 20px;
            border-radius: 8px;
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          li.active {
            color: black;
            background: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          }
        `}
      </style>
      <div className="relative" ref={containerRef}>
        <nav className="flex relative">
          <ul
            ref={navRef}
            className="flex gap-8 list-none p-0 px-4 m-0 relative z-[3]"
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={`py-2 px-4 rounded-lg relative ${activeIndex === index ? "active" : ""}`}
                onClick={(e) => handleClick(e, index)}
              >
                <a href={item.href} className="outline-none">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="effect filter" ref={filterRef} />
        <span className="effect text" ref={textRef} />
      </div>
    </>
  );
};

export default GooeyNav;
