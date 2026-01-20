import React from 'react'

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            color: 'var(--text-secondary)'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} My Portfolio. Built with React & Vite.</p>
            </div>
        </footer>
    )
}

export default Footer
