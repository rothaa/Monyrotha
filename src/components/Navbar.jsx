import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navStyles = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'var(--transition-normal)',
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    }

    const contentStyles = {
        // Styles moved to CSS class .navbar-content for better responsive control
    }

    const logoStyles = {
        fontSize: '1.5rem',
        fontWeight: '700',
        background: 'var(--accent-gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        zIndex: 1002,
        position: 'relative',
    }

    const mobileMenuBtnStyles = {
        display: 'none', // Hidden on desktop by default
        flexDirection: 'column',
        gap: '6px',
        cursor: 'pointer',
        zIndex: 1002,
        background: 'transparent',
        border: 'none',
        padding: '0.5rem',
    }

    const barStyles = {
        width: '25px',
        height: '2px',
        backgroundColor: 'var(--text-primary)',
        transition: 'all 0.3s ease',
    }

    const linkStyles = {
        textDecoration: 'none',
        color: 'var(--text-primary)',
        fontWeight: '500',
        transition: 'color 0.3s ease',
        cursor: 'pointer',
    }

    const mobileNavOverlayStyles = {
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        zIndex: 1000,
        opacity: mobileMenuOpen ? 1 : 0,
        visibility: mobileMenuOpen ? 'visible' : 'hidden',
        transition: 'all 0.3s ease',
    }

    return (
        <nav style={navStyles}>
            <div className="navbar-content" style={contentStyles}>
                <a href="#" style={logoStyles}>Portfolio</a>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    style={mobileMenuBtnStyles}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span style={{ ...barStyles, transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
                    <span style={{ ...barStyles, opacity: mobileMenuOpen ? 0 : 1 }}></span>
                    <span style={{ ...barStyles, transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
                </button>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <a href="#hero" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#education" className="nav-link">Education</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#comments" className="nav-link">Comments</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <div
                        style={mobileNavOverlayStyles}
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}

                <div className="mobile-nav" style={{ transform: `translateX(${mobileMenuOpen ? '0' : '100%'})` }}>
                    <button
                        style={{ position: 'absolute', top: '2rem', right: '2rem', color: 'white', fontSize: '2rem', border: 'none', background: 'transparent' }}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        &times;
                    </button>
                    {['Home', 'About', 'Education', 'Projects', 'Comments', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{
                                fontSize: '1.5rem',
                                color: item === 'Contact' ? 'var(--accent-primary)' : 'var(--text-primary)',
                                fontWeight: '600',
                                textDecoration: 'none',
                                padding: '1rem'
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar

