import React from 'react'

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University of Technology',
            year: '2020 - 2024',
            desc: 'Focused on software engineering, algorithms, and web development. Graduated with honors.'
        },
        {
            degree: 'Full Stack Development Bootcamp',
            institution: 'Tech Academy',
            year: '2019',
            desc: 'Intensive course covering React, Node.js, and modern web practices.'
        }
    ]

    const cardStyles = {
        background: 'var(--bg-card)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: 'var(--transition-normal)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    }

    const listStyles = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    }

    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-list" style={listStyles}>
                    {education.map((item, i) => (
                        <div key={i} style={cardStyles}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.degree}</h3>
                            <div style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                {item.institution} • {item.year}
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education
