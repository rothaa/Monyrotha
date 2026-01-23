import React from 'react'
import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Testimonials from './components/Testimonials'
import Comment from './components/Comments'
import Contact from './components/Contact'

function App() {
    return (
        <Layout>
            <Hero />
            <About />
            <Education />
            <Projects />
            <Testimonials />
            <Comment />
            <Contact />
        </Layout>
    )
}

export default App
