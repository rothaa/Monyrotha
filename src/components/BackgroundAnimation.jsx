import React from 'react'

const BackgroundAnimation = () => {
    // Generate random positions and delays for "cute" bubbles
    const blobs = Array.from({ length: 6 }).map((_, i) => ({
        width: Math.random() * 300 + 100 + 'px',
        height: Math.random() * 300 + 100 + 'px',
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: Math.random() * 5 + 's',
        background: i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
        opacity: 0.15
    }))

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            pointerEvents: 'none'
        }}>
            {blobs.map((blob, i) => (
                <div key={i} className="floating-blob" style={{
                    position: 'absolute',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    ...blob
                }} />
            ))}
        </div>
    )
}

export default BackgroundAnimation
