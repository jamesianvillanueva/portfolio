import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ShowParticles = () => {
    const particlesInit = async (load) => {
        await loadFull(load);
    };
    return(
        <Particles
        className="absolute h-full top-0 w-auto"
        id="tsparticles"
        init={particlesInit}
        options={{
            fullScreen: false,
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    },
                    resize: true,
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: true,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
      />
    )
}

export default ShowParticles