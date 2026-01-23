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
        maxWidth: '100%',
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

    const secondaryButtonStyles = {
        display: 'inline-block',
        padding: '1rem 2rem',
        borderRadius: '50px',
        background: 'transparent',
        color: '#fff',
        fontWeight: '600',
        border: '1px solid var(--accent-primary)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    }

    return (
        <section id="hero" style={sectionStyles}>
            <div className="container">
                <h1 style={headingStyles} className="animate-slide-up">
                    Building digital <br />
                    <span style={{ color: 'var(--accent-primary)' }}>experiences</span> that matter.
                </h1>
                <p style={subtextStyles} className="animate-slide-up delay-100">
                    I'm a student of Computer Science, and I'm passionate about crafting accessible, pixel-perfect, and performant web applications.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }} className="animate-slide-up delay-200">
                    <a href="#projects" style={buttonStyles}>View My Work</a>
                    <a
                        href="/CV.pdf"
                        download
                        style={secondaryButtonStyles}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(236, 72, 153, 0.1)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
