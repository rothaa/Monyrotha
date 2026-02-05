import React from "react";

const Particles = () => {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            background: '#0f172a',
        }}>
            {/* Animated gradient blobs */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-25%',
                width: '80%',
                height: '80%',
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                animation: 'float-1 20s ease-in-out infinite',
            }} />

            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-20%',
                width: '70%',
                height: '70%',
                background: 'radial-gradient(circle, rgba(217, 70, 239, 0.12) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(70px)',
                animation: 'float-2 25s ease-in-out infinite',
            }} />

            <div style={{
                position: 'absolute',
                bottom: '-30%',
                left: '30%',
                width: '60%',
                height: '60%',
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(80px)',
                animation: 'float-3 30s ease-in-out infinite',
            }} />

            {/* Subtle grid overlay for depth */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                opacity: 0.2,
            }} />

            {/* Floating "Star Dust" Particles */}
            <div style={{ position: 'absolute', inset: 0 }}>
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: Math.random() < 0.5 ? '2px' : '3px',
                            height: Math.random() < 0.5 ? '2px' : '3px',
                            background: Math.random() < 0.3 ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.5)',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            borderRadius: '50%',
                            opacity: Math.random() * 0.5 + 0.2,
                            boxShadow: Math.random() < 0.2 ? '0 0 10px var(--accent-primary)' : 'none',
                            animation: `float-particle ${Math.random() * 20 + 20}s linear infinite`,
                            animationDelay: `-${Math.random() * 20}s`,
                        }}
                    />
                ))}
            </div>

            <style>{`
                @keyframes float-particle {
                    0% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) translateX(${Math.random() * 50 - 25}px);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default Particles;
