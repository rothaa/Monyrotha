import React from 'react'

const About = () => {
    const skills = [
        'HTML', 'CSS', 'JavaScript', 'Node.js',
        'Python', 'Supabase', 'Git', 'C++',
        'C', 'C#', 'Java'
    ]

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="about-grid">
                    {/* Image Side */}
                    <div className="about-image-wrapper">
                        <div className="about-img-container">
                            <img
                                src="/rothaa.jpg"
                                alt="Mao Monyrotha Profile"
                                className="about-img"
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="about-content">
                        <h2 className="section-title">About Me</h2>

                        <p className="about-description">
                            I'm Mao Monyrotha, a passionate third-year Computer Science student at the Royal University of Phnom Penh.
                            My journey in tech is driven by a desire to create impactful web experiences.
                            I specialize in building modern, responsive applications and am constantly exploring the latest technologies in web development.
                            Currently, I'm eager to bring my skills to a professional team as an intern.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">Year 3</span>
                                <span className="stat-label">Student</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">Open</span>
                                <span className="stat-label">To Work</span>
                            </div>
                        </div>

                        <div className="skills-wrapper">
                            {skills.map(skill => (
                                <span key={skill} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
