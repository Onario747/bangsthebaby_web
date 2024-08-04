import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import SocialBar from "./components/SocialBar";

const App = () => {
  useEffect(() => {
    anime({
      targets: ".beam",
      translateX: [
        { value: "100vw", duration: 5000 },
        { value: "-100vw", duration: 0 },
      ],
      translateY: [
        { value: "100vh", duration: 5000 },
        { value: "-100vh", duration: 0 },
      ],
      rotate: [{ value: 360, easing: "easeInOutSine", duration: 5000 }],
      scale: [
        { value: 0.5, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      opacity: [
        { value: 1, easing: "easeInOutQuad", duration: 500 },
        { value: 0, easing: "easeOutSine", duration: 1200 },
      ],
      easing: "linear",
      loop: true,
      delay: anime.stagger(100, { start: 500 }),
    });
  }, []);

  return (
    <div className="relative w-full h-full">
      <div id="beam-container" className="fixed w-full h-full top-0 left-0 z-0">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="beam"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <SocialBar />
      </div>
    </div>
  );
};

export default App;
