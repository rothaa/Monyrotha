import React, { useRef, useEffect } from "react";

const Particles = ({
    particleColors = ["#ffffff", "#ffffff"],
    particleCount = 200,
    particleSpread = 10,
    speed = 0.1,
    particleBaseSize = 100,
    moveParticlesOnHover = false,
    alphaParticles = false,
    disableRotation = false,
    className,
}) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * (particleBaseSize / 20) + 1; // Normalize size
                this.speedX = (Math.random() - 0.5) * speed;
                this.speedY = (Math.random() - 0.5) * speed;
                this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
                this.alpha = alphaParticles ? Math.random() : 1;
                this.rotation = disableRotation ? 0 : Math.random() * 360;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;

                if (!disableRotation) {
                    this.rotation += 0.5;
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        const particlesArray = [];
        for (let i = 0; i < particleCount; i++) {
            particlesArray.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [particleColors, particleCount, speed, particleBaseSize, alphaParticles, disableRotation]);

    return <canvas ref={canvasRef} className={className} style={{ width: '100%', height: '100%', display: 'block' }} />;
};

export default Particles;
