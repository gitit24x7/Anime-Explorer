import React from 'react'

const About = () => {
  return (
    <div className="about-container">
      <h1>About Anime Explorer</h1>
      
      <section className="about-section">
        <h2>Welcome to Your Anime Journey!</h2>
        <p>
          Anime Explorer is your gateway to discovering amazing anime series and movies.
          Built with React and powered by the Jikan API, our platform helps you explore
          the vast world of Japanese animation.
        </p>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <ul>
          <li>Browse top-rated anime</li>
          <li>Search for your favorite series</li>
          <li>Save your favorites</li>
          <li>Get detailed information about each show</li>
        </ul>
      </section>

      <section className="tech-section">
        <h2>Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Jikan API</li>
          <li>CSS3</li>
        </ul>
      </section>
    </div>
  )
}

export default About