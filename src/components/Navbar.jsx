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
        backgroundColor: scrolled || mobileMenuOpen ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: (scrolled || mobileMenuOpen) ? 'blur(10px)' : 'none',
        boxShadow: (scrolled || mobileMenuOpen) ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
    }

    const contentStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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

    return (
        <nav style={navStyles}>
            <div className="container" style={contentStyles}>
                <a href="#" style={logoStyles}>Portfolio</a>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    style={mobileMenuBtnStyles}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span style={{ ...barStyles, transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
                    <span style={{ ...barStyles, opacity: mobileMenuOpen ? 0 : 1 }}></span>
                    <span style={{ ...barStyles, transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
                </button>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#hero" style={{ ...linkStyles, marginLeft: '2rem' }}>Home</a>
                    <a href="#about" style={{ ...linkStyles, marginLeft: '2rem' }}>About</a>
                    <a href="#education" style={{ ...linkStyles, marginLeft: '2rem' }}>Education</a>
                    <a href="#projects" style={{ ...linkStyles, marginLeft: '2rem' }}>Projects</a>
                    <a href="#testimonials" style={{ ...linkStyles, marginLeft: '2rem' }}>Testimonials</a>
                    <a href="#comments" style={{ ...linkStyles, marginLeft: '2rem' }}>Comments</a>
                    <a href="#contact" style={{ ...linkStyles, marginLeft: '2rem', color: 'var(--accent-primary)' }}>Contact</a>
                </div>

                {/* Mobile Menu Overlay */}
                <div className="mobile-nav" style={{ transform: `translateX(${mobileMenuOpen ? '0' : '100%'})` }}>
                    {['Home', 'About', 'Education', 'Projects', 'Testimonials', 'Comments', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{
                                fontSize: '1.5rem',
                                color: item === 'Contact' ? 'var(--accent-primary)' : 'var(--text-primary)',
                                fontWeight: '600'
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
