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
            brandBg: '#333'
        },
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/share/16nEyJ7ZPM/?mibextid=wwXIfr',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-2.204c0-.69.47-1.155 1.108-1.155h2.892v-3.641l-3.32-.001c-3.144 0-5.322 2.156-5.322 5.37v1.631z" />
                </svg>
            ),
            brandBg: '#1877F2'
        },
        {
            name: 'Telegram',
            url: 'https://t.me/monyrothaa',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0a12 12 0 0 0-12 12c0 6.627 5.373 12 12 12a12 12 0 0 0 12-12c0-6.627-5.373-12-12-12zm5.83 7.027c.186 1.343-.372 4.636-1.116 8.261-.314 1.513-.762 2.023-1.07 2.053-.674.062-1.185-.444-1.839-.873-1.02-.676-1.594-1.096-2.583-1.745-1.144-.754-.395-1.168.25-1.83.167-.172 3.08-2.822 3.136-3.058.007-.03.013-.14-.05-.197-.064-.056-.157-.038-.222-.023-.093.02-1.565 1-4.42 2.923-.418.287-.796.429-1.137.422-.373-.008-1.094-.21-1.63-.384-.658-.214-1.185-.328-1.136-.694.025-.19.284-.383.77-.581 3.014-1.312 5.023-2.176 6.03-2.592 2.87-1.18 3.465-1.385 3.858-1.392.086-.002.278.02.403.122a.455.455 0 0 1 .151.319z" />
                </svg>
            ),
            brandBg: '#0088CC'
        }
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
                                width: '45px',
                                height: '45px',
                                borderRadius: '12px',
                                background: 'rgba(255,255,255,0.03)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-secondary)',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                position: 'relative'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = link.brandBg
                                e.currentTarget.style.color = '#fff'
                                e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)'
                                e.currentTarget.style.boxShadow = `0 10px 20px ${link.brandBg}40`
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                                e.currentTarget.style.color = 'var(--text-secondary)'
                                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                                e.currentTarget.style.boxShadow = 'none'
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
