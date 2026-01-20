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

    const navStyles = {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1.5rem 0',
        transition: 'var(--transition-normal)',
        backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
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
    }

    const linkStyles = {
        marginLeft: '2rem',
        color: 'var(--text-secondary)',
        transition: 'var(--transition-fast)',
        fontSize: '0.95rem',
        fontWeight: '500',
    }

    return (
        <nav style={navStyles}>
            <div className="container" style={contentStyles}>
                <a href="#" style={logoStyles}>Portfolio</a>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="#hero" style={linkStyles}>Home</a>
                    <a href="#about" style={linkStyles}>About</a>
                    <a href="#projects" style={linkStyles}>Projects</a>
                    <a href="#contact" style={{ ...linkStyles, color: 'var(--accent-primary)' }}>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
