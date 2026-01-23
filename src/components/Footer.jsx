import React from 'react'

const Footer = () => {
    const footerStyles = {
        padding: '4rem 0 2rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(10px)',
    }

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/rothaa', icon: 'i' },
        { name: 'LinkedIn', url: '#', icon: 'in' },
        { name: 'Twitter', url: '#', icon: '𝕏' }
    ]

    return (
        <footer style={footerStyles}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    {socialLinks.map(link => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-secondary)',
                                transition: 'var(--transition-normal)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                fontSize: '0.9rem',
                                fontWeight: 'bold'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'var(--accent-gradient)'
                                e.currentTarget.style.color = '#fff'
                                e.currentTarget.style.transform = 'translateY(-3px)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                                e.currentTarget.style.color = 'var(--text-secondary)'
                                e.currentTarget.style.transform = 'translateY(0)'
                            }}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>
                        ROTHA PORTFOLIO
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} All rights reserved. Built with passion & React.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
