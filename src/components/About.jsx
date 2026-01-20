import React from 'react'

const About = () => {
    const containerStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
    }

    const imagePlaceholderStyles = {
        width: '100%',
        height: '400px',
        background: 'var(--bg-card)',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)',
    }

    return (
        <section id="about" className="section">
            <div className="container" style={containerStyles}>
                <div style={{ width: '100%', height: '400px', background: 'var(--bg-card)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                    <img src="/mypic.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
                </div>
                <div>
                    <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>About Me</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        I am a dedicated developer with a strong focus on user experience and clean code.
                        With a background in computer science and design, I bridge the gap between aesthetics and functionality.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {['React', 'Node.js', 'TypeScript', 'CSS/Sass', 'Figma', 'Git'].map(skill => (
                            <span key={skill} style={{
                                padding: '0.5rem 1rem',
                                background: 'rgba(236, 72, 153, 0.1)',
                                color: 'var(--accent-primary)',
                                borderRadius: '8px',
                                fontSize: '0.9rem'
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
