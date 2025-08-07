import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function ParticlesBg() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 1000,
            },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.2,
            random: true,
          },
          size: {
            value: { min: 1, max: 2 },
            random: true,
          },
          links: {
            enable: true,
            distance: 140,
            color: "#ffffff",
            opacity: 0.08,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: {
              default: "out",
            },
            random: true,
            straight: false,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.25,
              },
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
    />
  );
}

