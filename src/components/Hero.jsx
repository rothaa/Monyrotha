import React from 'react'

const Hero = () => {
    const sectionStyles = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--header-height)',
    }

    const headingStyles = {
        fontSize: '4rem',
        lineHeight: '1.1',
        fontWeight: '800',
        marginBottom: '1.5rem',
    }

    const subtextStyles = {
        fontSize: '1.25rem',
        color: 'var(--text-secondary)',
        maxWidth: '600px',
        marginBottom: '2.5rem',
    }

    const buttonStyles = {
        display: 'inline-block',
        padding: '1rem 2rem',
        borderRadius: '50px',
        background: 'var(--accent-gradient)',
        color: '#fff',
        fontWeight: '600',
        boxShadow: '0 10px 15px -3px rgba(236, 72, 153, 0.3)',
        transition: 'transform 0.2s',
    }

    return (
        <section id="hero" style={sectionStyles}>
            <div className="container">
                <h1 style={headingStyles} className="animate-slide-up">
                    Building digital <br />
                    <span style={{ color: 'var(--accent-primary)' }}>experiences</span> that matter.
                </h1>
                <p style={subtextStyles} className="animate-slide-up delay-100">
                    I'm a Full Stack Developer passionate about crafting accessible, pixel-perfect, and performant web applications.
                </p>
                <a href="#projects" style={buttonStyles} className="animate-slide-up delay-200">View My Work</a>
            </div>
        </section>
    )
}

export default Hero
