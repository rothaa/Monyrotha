import React from 'react'

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Product Manager at TechCorp',
            text: 'One of the most dedicated developers I have worked with. The attention to detail in the UI was impressive.',
            image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=random'
        },
        {
            name: 'Michael Chen',
            role: 'Founder of StartupX',
            text: 'Delivered the project ahead of schedule and the code quality was top-notch. Highly recommended!',
            image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=random'
        },
        {
            name: 'Emily Davis',
            role: 'Creative Director',
            text: 'Great communication skills and technical expertise. Helped us solve some complex animation challenges.',
            image: 'https://ui-avatars.com/api/?name=Emily+Davis&background=random'
        }
    ]

    const cardStyles = {
        background: 'var(--bg-card)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: 'var(--transition-normal)',
    }

    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem',
    }

    const imageStyles = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '1rem',
    }

    return (
        <section id="testimonials" className="section">
            <div className="container">
                <h2 className="section-title">Testimonials</h2>
                <div className="testimonial-grid" style={gridStyles}>
                    {testimonials.map((item, i) => (
                        <div
                            key={i}
                            style={cardStyles}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontStyle: 'italic', lineHeight: '1.6' }}>
                                "{item.text}"
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={item.image} alt={item.name} style={imageStyles} />
                                <div>
                                    <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>{item.name}</h4>
                                    <span style={{ color: 'var(--accent-primary)', fontSize: '0.85rem' }}>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
