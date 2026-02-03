import React from 'react'

const About = () => {
    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'clamp(2rem, 8vw, 4rem)',
        alignItems: 'center',
    }

    return (
        <section id="about" className="section">
            <div className="container" style={gridStyles}>
                <div className="profile-img-container" style={{
                    width: '100%',
                    aspectRatio: '1/1',
                    maxWidth: '450px',
                    margin: '0 auto',
                    background: 'var(--bg-card)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                }}>
                    <img
                        src="/favicon.png"
                        alt="Profile"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>
                <div style={{ padding: '1rem 0' }} className="about-content">
                    <h2 className="section-title" style={{ textAlign: 'inherit', marginBottom: '1.5rem' }}>About Me</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        My name is Mao Monyrotha. I am a third year student at the Faculty of Computer Science in Royal University of Phnom Penh. I want to become a Web Designer and Developer.
                        Now I am looking for an internship opportunity.
                    </p>
                    <div className="skills-container" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        {['HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'Supabase', 'Git', 'C++', 'C', 'C#', 'Java'].map(skill => (
                            <span key={skill} style={{
                                padding: '0.6rem 1.2rem',
                                background: 'rgba(236, 72, 153, 0.05)',
                                color: 'var(--accent-primary)',
                                border: '1px solid rgba(236, 72, 153, 0.2)',
                                borderRadius: '50px',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                transition: 'var(--transition-fast)'
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'var(--accent-gradient)'
                                    e.currentTarget.style.color = '#fff'
                                    e.currentTarget.style.border = '1px solid transparent'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'rgba(236, 72, 153, 0.05)'
                                    e.currentTarget.style.color = 'var(--accent-primary)'
                                    e.currentTarget.style.border = '1px solid rgba(236, 72, 153, 0.2)'
                                }}
                            >
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
