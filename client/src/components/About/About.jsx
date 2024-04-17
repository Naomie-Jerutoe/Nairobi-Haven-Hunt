// import React from 'react'
import "./About.css"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function About() {
  return (
    <div>
      <h1 className='about'> Welcome to Nairobi Haven Hunt Properties </h1>
      <div className="aboutus-content">
        <p>
          In their online group discussion, four visionary minds united to
          create Nairobi Haven Hunt, a revolutionary platform that would transform the
          way people find homes.
          <br /> Inspired by the challenges of house hunting and the cumbersome
          process of connecting tenants with landlords, the founders embarked on
          a mission to simplify and streamline the entire experience. It all
          began during a casual conversation at a local nyamachoma joint, where
          the founders shared their frustrations with the traditional rental
          process.
          <br /> Motivated by a shared desire to make a positive impact, they
          hatched the idea for Nairobi Haven Hunt. The name itself,reflected their commitment to creating a platform that felt
          personal and welcoming. Pooling their diverse skills in technology,
          design, and business, the founders embarked on a journey to build a
          user-friendly website. Nairobi Haven Hunt quickly evolved into a sophisticated
          online space where tenants could effortlessly browse available homes
          and connect with property owners. The platform's intuitive interface
          and advanced search features set it apart, making it a go-to
          destination for those in search of their dream home.
          <br />
          Happy House Searching
        </p>
      </div>

      <div className="mission--vision">
        <div className="mission">
          <h1 className="mission--title">Our Mission</h1>
            <p>
              Nairobi Haven Hunt is dedicated to simplifying the rental experience by
              connecting tenants with house owners seamlessly. Our mission is to
              create a user-friendly online platform that fosters trust,
              community, and convenience, ensuring that finding the perfect home
              becomes a delightful journey for everyone involved.
            </p>
          
        </div>
        <div className="vision">
          <h1 className="vision--title">Our Vision</h1>
            <p>
              Our vision at Nairobi Haven Hunt is to be the premier online destination for
              hassle-free home connections. We aspire to redefine the rental
              landscape, making finding and securing the ideal home effortless.
            </p>
        </div>
      </div>
      <h3>Meet the team behind Nairobi Haven Hunt Properties</h3>
      <div className="main">
        <div className="my-container">
          <div className="team-image">
            <img src="https://rb.gy/oq9v9w" alt="Abel" />
          </div>
          <div className="team">
            <p>Abel Kipkorir</p>
            <p>Frontend Engineer</p>
          </div>
        </div>

        <div className="my-container">
          <div className="team-image">
            <img src="https://rb.gy/gi4gtz" alt="Naomie" />
          </div>
          <div className="team">
            <p>Naomie Jeruto</p>
            <p>Team Lead</p>
          </div>
        </div>

        <div className="my-container">
          <div className="team-image">
            <img src="https://rb.gy/8h7549" alt="Brian" />
          </div>
          <div className="team">
            <p>Brian Mariga</p>
            <p>Backend developer</p>
          </div>
        </div>

        <div className="my-container">
          <div className="team-image">
            <img src="https://rb.gy/9308mu" alt="Dennis" />
          </div>
          <div className="team">
            <p>Dennis Kioko</p>
            <p>Backend developer</p>
          </div>
        </div>
      </div>

      <div className="contact-details">
        <div className="phone">
          <h3>
            <PhoneIcon /> <br></br>Phone: +25478383838
          </h3>
        </div>

        <div className="email">
          <h3>
            <EmailIcon /> <br />
            Email: nairobihavenhunt@gmail.com
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About