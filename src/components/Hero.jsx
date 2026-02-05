import React, { useState, useEffect } from 'react'

const Hero = () => {
    const [text, setText] = useState('')
    const fullText = "Hi, I'm Mao Monyrotha"
    const [isTyping, setIsTyping] = useState(true)

    useEffect(() => {
        if (isTyping) {
            if (text.length < fullText.length) {
                setTimeout(() => {
                    setText(fullText.slice(0, text.length + 1))
                }, 100)
            } else {
                setIsTyping(false)
            }
        }
    }, [text, isTyping])

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: 'var(--header-height)',
        }}>
            {/* Background Gradient Blob for Focus */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: -1,
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '2rem',
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '3rem',
                    background: 'rgba(30, 41, 59, 0.3)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '2rem',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                }} className="animate-slide-up">

                    {/* Profile Image */}
                    <div style={{
                        position: 'relative',
                        width: '150px',
                        height: '150px',
                        marginBottom: '0.5rem'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: '-5px',
                            borderRadius: '50%',
                            background: 'var(--accent-gradient)',
                            filter: 'blur(10px)',
                            opacity: 0.7,
                            animation: 'pulse-glow 3s infinite'
                        }}></div>
                        <img
                            src="/favicon.png"
                            alt="Mao Monyrotha"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                border: '3px solid rgba(255, 255, 255, 0.1)',
                                position: 'relative',
                                zIndex: 1,
                                background: 'var(--bg-card)'
                            }}
                        />
                    </div>

                    {/* Badge */}
                    <div style={{
                        padding: '0.5rem 1.5rem',
                        background: 'rgba(236, 72, 153, 0.1)',
                        border: '1px solid rgba(236, 72, 153, 0.3)',
                        borderRadius: '50px',
                        color: 'var(--accent-primary)',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'block' }}></span>
                        Available for Internship
                    </div>

                    {/* Typing Title */}
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: '1.2',
                        marginBottom: '1rem',
                        minHeight: '1.2em', // Prevent layout shift
                    }}>
                        <span style={{
                            background: 'var(--accent-gradient)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            {text}
                        </span>
                        <span style={{
                            display: 'inline-block',
                            width: '4px',
                            height: '1em',
                            background: 'var(--accent-primary)',
                            marginLeft: '5px',
                            verticalAlign: 'middle',
                            animation: 'blink 1s infinite'
                        }}></span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                        color: 'var(--text-secondary)',
                        maxWidth: '700px',
                        lineHeight: '1.6',
                        marginBottom: '2rem',
                    }}>
                        <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Computer Science Student</span> passionate about building
                        <span style={{ color: 'var(--accent-secondary)' }}> beautiful</span>,
                        accessible, and pixel-perfect web experiences.
                    </p>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1.5rem' }}>
                        <a href="#projects"
                            style={{
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                background: 'var(--accent-gradient)',
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '1.1rem',
                                border: 'none',
                                boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-3px)'
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(236, 72, 153, 0.6)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(236, 72, 153, 0.4)'
                            }}
                        >
                            View My Work 🚀
                        </a>
                        <a href="/Mao Monyrotha.cv.pdf" target="_blank" rel="noopener noreferrer"
                            style={{
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'white',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'
                                e.currentTarget.style.transform = 'translateY(-3px)'
                                e.currentTarget.style.border = '1px solid var(--accent-primary)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            Download CV 📄
                        </a>
                    </div>

                    {/* Social Links */}
                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
                        {[
                            { icon: '🐙', link: 'https://github.com/rothaa', label: 'GitHub' },
                            { icon: '✈️', link: 'https://t.me/monyrothaa', label: 'Telegram' },
                            { icon: '📘', link: 'https://www.facebook.com/share/16nEyJ7ZPM/?mibextid=wwXIfr', label: 'Facebook' }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={social.label}
                                style={{
                                    fontSize: '1.5rem',
                                    padding: '0.8rem',
                                    borderRadius: '50%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'var(--accent-gradient)'
                                    e.currentTarget.style.transform = 'translateY(-3px)'
                                    e.currentTarget.style.borderColor = 'transparent'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Icons Background Elements */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
                {/* Top Left */}
                <div className="floating-blob" style={{
                    position: 'absolute', top: '20%', left: '10%', fontSize: '3rem', opacity: 0.2, animationDelay: '0s'
                }}>⚛️</div>
                {/* Bottom Right */}
                <div className="floating-blob" style={{
                    position: 'absolute', bottom: '20%', right: '10%', fontSize: '3rem', opacity: 0.2, animationDelay: '2s'
                }}>💻</div>
                {/* Top Right */}
                <div className="floating-blob" style={{
                    position: 'absolute', top: '25%', right: '15%', fontSize: '2.5rem', opacity: 0.2, animationDelay: '4s'
                }}>🎨</div>
                {/* Bottom Left */}
                <div className="floating-blob" style={{
                    position: 'absolute', bottom: '30%', left: '15%', fontSize: '2.5rem', opacity: 0.2, animationDelay: '1s'
                }}>🚀</div>
            </div>

            <style>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                
                @keyframes pulse-glow {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                }
            `}</style>
        </section>
    )
}

export default Hero
