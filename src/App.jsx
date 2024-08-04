import anime from "animejs/lib/anime.es.js";
import { useEffect } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SocialBar from "./components/SocialBar";

const App = () => {
  useEffect(() => {
    anime({
      targets: ".beam",
      translateX: function () {
        return anime.random(-1000, 1000);
      },
      translateY: function () {
        return anime.random(-1000, 1000);
      },
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      opacity: [
        { value: 1, easing: "easeInOutQuad", duration: 500 },
        { value: 0, easing: "easeOutSine", duration: 1200 },
      ],
      duration: 2000,
      easing: "easeInOutQuad",
      loop: true,
      delay: anime.stagger(100, { start: 500 }),
    });
  }, []);

  return (
    <>
      <div id="beam-container" className="w-full h-full absolute top-0 left-0">
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
        <NavBar />
        <Hero />
        <SocialBar />
      </div>
    </>
  );
};

export default App;
