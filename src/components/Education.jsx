import React from 'react'

const Education = () => {
    const education = [
        {
            degree: 'Studying Bachelor of Science in Computer Science',
            institution: 'Royal University of Phnom Penh',
            year: '2024 - Present',
            desc: 'Focused on Networking and Programming'
        },
        {
            degree: 'Graduted High School',
            institution: 'Hun Sen Balaing High School',
            year: '2023',
            desc: 'From grade 10 to 12'
        },
        {
            degree: 'Diploma in Primary School',
            institution: 'Hun Sen Balaing High School',
            year: '2019',
            desc: 'From grade 7 to 9'
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
