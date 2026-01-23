import React, { useState } from 'react'
import NumberGuessingGame from './NumberGuessingGame'

const Projects = () => {
    const [showGame, setShowGame] = useState(false)

    const projects = [
        {
            title: 'E-Commerce Dashboard',
            desc: 'A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.',
            tags: ['React', 'Chart.js', 'Firebase']
        },
        {
            title: 'Python Number Guessing Game',
            desc: 'A beginner-friendly game where players guess a random number. Features step-by-step code explanations for Python learners.',
            tags: ['Python', 'Beginner', 'Game Logic'],
            isGame: true
        }
    ]

    const cardStyles = {
        background: 'var(--bg-card)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: 'var(--transition-normal)',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    }

    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
    }

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="project-grid" style={gridStyles}>
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            style={cardStyles}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                height: '200px',
                                background: 'linear-gradient(45deg, rgba(236,72,153,0.1), rgba(217,70,239,0.1))',
                                borderRadius: '8px',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {project.isGame ? (
                                    <span style={{ fontSize: '3rem' }}>🎮</span>
                                ) : (
                                    <span style={{ fontSize: '3rem' }}>💻</span>
                                )}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.desc}</p>

                            {project.isGame && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setShowGame(!showGame)
                                    }}
                                    style={{
                                        marginBottom: '1.5rem',
                                        padding: '0.6rem 1rem',
                                        borderRadius: '8px',
                                        background: 'rgba(236, 72, 153, 0.1)',
                                        color: 'var(--accent-primary)',
                                        border: '1px solid rgba(236, 72, 153, 0.2)',
                                        fontWeight: '600'
                                    }}
                                >
                                    {showGame ? 'Hide Game' : 'Play In Browser'}
                                </button>
                            )}

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--accent-secondary)',
                                        background: 'rgba(217, 70, 239, 0.05)',
                                        padding: '0.2rem 0.5rem',
                                        borderRadius: '4px'
                                    }}>#{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {showGame && (
                    <div className="animate-fade-in" style={{ marginTop: '4rem' }}>
                        <NumberGuessingGame />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Projects
