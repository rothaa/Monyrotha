import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Particles from './Particles'

const Layout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
                <Particles
                    particleColors={['#ec4899', '#d946ef']} /* Using theme colors */
                    particleCount={200}
                    particleSpread={10}
                    speed={0.5}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={true}
                    disableRotation={false}
                />
            </div>
            {/* <Navbar /> */}
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
