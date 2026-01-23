import React from 'react'

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Dashboard',
            desc: 'A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.',
            tags: ['React', 'Chart.js', 'Firebase']
        },
        {
            title: 'Social Media App',
            desc: 'A real-time social platform allowing users to share updates, images, and connect with friends.',
            tags: ['Next.js', 'Socket.io', 'MongoDB']
        },
        {
            title: 'Task Management Tool',
            desc: 'Productivity application for teams to track progress, assign tasks, and manage deadlines effectively.',
            tags: ['Vue.js', 'Vuex', 'Tailwind']
        }
    ]

    const cardStyles = {
        background: 'var(--bg-card)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: 'var(--transition-normal)',
        cursor: 'pointer',
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
                                background: 'rgba(0,0,0,0.2)',
                                borderRadius: '8px',
                                marginBottom: '1.5rem'
                            }}></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{project.desc}</p>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--accent-secondary)'
                                    }}>#{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
