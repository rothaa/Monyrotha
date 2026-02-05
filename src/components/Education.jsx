import React from 'react'

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Science in Computer Science',
            status: 'Currently Studying',
            institution: 'Royal University of Phnom Penh',
            year: '2024 - Present',
            desc: 'Focused on Networking and Programming',
            icon: '🎓'
        },
        {
            degree: 'High School BacII',
            status: 'Graduated',
            institution: 'Hun Sen Balaing High School',
            year: '2019-2023',
            desc: 'Completed grades 10-12',
            icon: '📚'
        },
        {
            degree: 'High School Diploma',
            status: 'Completed',
            institution: 'Hun Sen Balaing High School',
            year: '2017-2019',
            desc: 'Completed grades 7-9',
            icon: '📚'
        },
        {
            degree: 'Primary School Certificate',
            status: 'Completed',
            institution: 'Kampong Thom Primary School',
            year: '2011-2017',
            desc: 'Completed grades 1-6',
            icon: '✏️'
        }
    ]

    return (
        <section id="education" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background accent blob */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-secondary)',
                filter: 'blur(120px)',
                opacity: '0.1',
                zIndex: 0,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Education Journey</h2>
                <p style={{
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    maxWidth: '600px',
                    margin: '0 auto 4rem',
                    fontSize: '1.1rem',
                    lineHeight: '1.8'
                }}>
                </p>

                {/* Timeline Container */}
                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    position: 'relative',
                }}>
                    {/* Timeline Line */}
                    <div style={{
                        position: 'absolute',
                        left: '40px',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: 'linear-gradient(180deg, var(--accent-primary), var(--accent-secondary))',
                        opacity: '0.3',
                    }} />

                    {/* Education Items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                        {education.map((item, i) => (
                            <div
                                key={i}
                                className="animate-slide-up"
                                style={{
                                    position: 'relative',
                                    paddingLeft: '100px',
                                    animationDelay: `${i * 0.1}s`,
                                }}
                            >
                                {/* Timeline Dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '28px',
                                    top: '8px',
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-gradient)',
                                    boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 2,
                                }}>
                                    <div style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        background: 'white',
                                    }} />
                                </div>

                                {/* Card */}
                                <div
                                    style={{
                                        background: 'rgba(30, 41, 59, 0.4)',
                                        backdropFilter: 'blur(16px)',
                                        WebkitBackdropFilter: 'blur(16px)',
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateX(10px) translateY(-5px)'
                                        e.currentTarget.style.border = '1px solid rgba(236, 72, 153, 0.3)'
                                        e.currentTarget.style.boxShadow = '0 20px 60px rgba(236, 72, 153, 0.15)'
                                        e.currentTarget.style.background = 'rgba(30, 41, 59, 0.6)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateX(0) translateY(0)'
                                        e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.08)'
                                        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)'
                                        e.currentTarget.style.background = 'rgba(30, 41, 59, 0.4)'
                                    }}
                                >
                                    {/* Gradient overlay on hover */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '4px',
                                        background: 'var(--accent-gradient)',
                                        opacity: 0.6,
                                    }} />

                                    {/* Header with Icon */}
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                                        <div style={{
                                            fontSize: '2.5rem',
                                            lineHeight: 1,
                                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                                        }}>
                                            {item.icon}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                                                <h3 style={{
                                                    fontSize: '1.5rem',
                                                    color: 'var(--text-primary)',
                                                    fontWeight: '700',
                                                    margin: 0,
                                                }}>
                                                    {item.degree}
                                                </h3>
                                                <span style={{
                                                    background: i === 0 ? 'var(--accent-gradient)' : 'rgba(148, 163, 184, 0.2)',
                                                    color: i === 0 ? 'white' : 'var(--text-secondary)',
                                                    padding: '0.25rem 0.75rem',
                                                    borderRadius: '20px',
                                                    fontSize: '0.75rem',
                                                    fontWeight: '600',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.5px',
                                                }}>
                                                    {item.status}
                                                </span>
                                            </div>
                                            <div style={{
                                                color: 'var(--accent-primary)',
                                                fontSize: '1.25rem',
                                                fontWeight: '700',
                                                marginBottom: '0.5rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                                background: 'rgba(236, 72, 153, 0.08)',
                                                padding: '0.5rem 0.75rem',
                                                borderRadius: '8px',
                                                width: 'fit-content',
                                            }}>
                                                <span style={{ fontSize: '1.1rem' }}>🏛️</span>
                                                {item.institution}
                                            </div>
                                            <div style={{
                                                color: 'var(--text-secondary)',
                                                fontSize: '0.9rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.5rem',
                                            }}>
                                                <span>📅</span>
                                                {item.year}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p style={{
                                        color: 'var(--text-secondary)',
                                        lineHeight: '1.7',
                                        fontSize: '1rem',
                                        margin: 0,
                                        paddingLeft: '3.5rem',
                                    }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
