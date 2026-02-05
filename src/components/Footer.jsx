import React from 'react'

const Footer = () => {
    const footerStyles = {
        padding: '4rem 0 2rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(15, 23, 42, 0.5)',
        backdropFilter: 'blur(10px)',
    }

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/rothaa',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/share/16nEyJ7ZPM/?mibextid=wwXIfr',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.204c0-.69.47-1.155 1.108-1.155h2.892v-3.641l-3.32-.001c-3.144 0-5.322 2.156-5.322 5.37v1.631z" />
                </svg>
            ),
        },
        {
            name: 'Telegram',
            url: 'https://t.me/monyrothaa',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0a12 12 0 0 0-12 12c0 6.627 5.373 12 12 12a12 12 0 0 0 12-12c0-6.627-5.373-12-12-12zm5.83 7.027c.186 1.343-.372 4.636-1.116 8.261-.314 1.513-.762 2.023-1.07 2.053-.674.062-1.185-.444-1.839-.873-1.02-.676-1.594-1.096-2.583-1.745-1.144-.754-.395-1.168.25-1.83.167-.172 3.08-2.822 3.136-3.058.007-.03.013-.14-.05-.197-.064-.056-.157-.038-.222-.023-.093.02-1.565 1-4.42 2.923-.418.287-.796.429-1.137.422-.373-.008-1.094-.21-1.63-.384-.658-.214-1.185-.328-1.136-.694.025-.19.284-.383.77-.581 3.014-1.312 5.023-2.176 6.03-2.592 2.87-1.18 3.465-1.385 3.858-1.392.086-.002.278.02.403.122a.455.455 0 0 1 .151.319z" />
                </svg>
            ),
        }
    ]

    return (
        <footer style={footerStyles}>
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: '700',
                            background: 'var(--accent-gradient)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            marginBottom: '0',
                            width: 'fit-content'
                        }}>
                            ROTHA PORTFOLIO
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Building digital experiences with passion and precision. Let's create something amazing together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: '600' }}>Quick Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <a href="#hero" className="footer-link">Home</a>
                            <a href="#about" className="footer-link">About</a>
                            <a href="#projects" className="footer-link">Projects</a>
                            <a href="#contact" className="footer-link">Contact</a>
                        </div>
                    </div>

                    {/* Connect */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: '600' }}>Connect</h4>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Feel free to reach out for collaborations or just a friendly hello.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {socialLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '1.5rem',
                                        transition: 'color 0.3s ease',
                                    }}
                                    className="social-icon"
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} Mao Monyrotha. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
