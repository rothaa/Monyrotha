import React from 'react'

const Contact = () => {
    const formStyles = {
        maxWidth: '600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    }

    const inputStyles = {
        padding: '1rem',
        background: 'var(--bg-card)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        color: 'var(--text-primary)',
        fontFamily: 'inherit',
    }

    const buttonStyles = {
        padding: '1rem',
        background: 'var(--accent-primary)',
        color: '#0f172a',
        borderRadius: '8px',
        fontWeight: '600',
        transition: 'opacity 0.2s',
    }

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <form style={formStyles} action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="9cf78f91-98a1-4115-959c-1d1e650ae585" />
                    <input type="text" name="name" placeholder="Name" required style={inputStyles} />
                    <input type="email" name="email" placeholder="Email" required style={inputStyles} />
                    <textarea name="message" placeholder="Message" rows="5" required style={inputStyles}></textarea>
                    <button type="submit" style={buttonStyles}>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
