import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav';

export default function Portfolio() {
  return (
    <div className = 'Portfolio'>
      <Nav />

      <div className = 'PortfolioContainer'>
        <div className = 'PortfolioHeader'>
          <h2 style = {{marginBottom: '30px'}}>Previous Portfolio Designs</h2>
          <video
            src = 'http://res.cloudinary.com/aaronculp/video/upload/v1559484586/Portfolio/Portfolio.mov'
            width = '90%'
            autoPlay = {true}
            loop = {true}
            style = {{border: 'black 5px solid'}}
          />
        </div>

        <section className = 'portfolioHome'>
          <h2 className = 'homeText'>Home Page</h2>
          <img 
            src = 'https://res.cloudinary.com/aaronculp/image/upload/v1559484568/Portfolio/Screen_Shot_2019-05-31_at_9.49.09_AM.png'
            width = '75%'
            style = {{border: 'black 5px solid'}}
            alt = 'homePage'
            className = 'portfolioHome'
          />
          <video
            src = 'https://res.cloudinary.com/aaronculp/video/upload/v1559484575/Portfolio/PortfolioHome.mov'
            width = '75%'
            autoPlay = {true}
            loop = {true}
            style = {{border: 'black 5px solid', marginTop: '25px'}}
          />
        </section>

        <section className = 'portfolioHome'>
          <h2 className = 'homeText'>About Me Page</h2>
          <img 
            src = 'https://res.cloudinary.com/aaronculp/image/upload/v1559484568/Portfolio/Screen_Shot_2019-05-31_at_9.49.20_AM.png'
            width = '75%'
            style = {{border: 'black 5px solid'}}
            alt = 'homePage'
            className = 'portfolioHome'
          />
          <video
            src = 'https://res.cloudinary.com/aaronculp/video/upload/v1559484576/Portfolio/PortfolioAboutMe.mov'
            width = '75%'
            autoPlay = {true}
            loop = {true}
            style = {{border: 'black 5px solid', marginTop: '25px'}}
          />
        </section>


        <section className = 'portfolioHome'>
          <h2 className = 'homeText'>Projects Page</h2>
          <img 
            src = 'https://res.cloudinary.com/aaronculp/image/upload/v1559484572/Portfolio/Screen_Shot_2019-05-31_at_9.49.29_AM.png'
            width = '75%'
            style = {{border: 'black 5px solid'}}
            alt = 'homePage'
            className = 'portfolioHome'
          />
          <video
            src = 'https://res.cloudinary.com/aaronculp/video/upload/v1559484581/Portfolio/PortfolioProjects.mov'
            width = '75%'
            autoPlay = {true}
            loop = {true}
            style = {{border: 'black 5px solid', marginTop: '25px'}}
          />
        </section>

        <section className = 'portfolioHome'>
          <h2 className = 'homeText'>Contact Me Page</h2>
          <img 
            src = 'https://res.cloudinary.com/aaronculp/image/upload/v1559484569/Portfolio/Screen_Shot_2019-05-31_at_9.49.53_AM.png'
            width = '75%'
            style = {{border: 'black 5px solid'}}
            alt = 'homePage'
            className = 'portfolioHome'
          />
          <video
            src = 'https://res.cloudinary.com/aaronculp/video/upload/v1559484574/Portfolio/ProjectsContactMe.mov'
            width = '75%'
            autoPlay = {true}
            loop = {true}
            style = {{border: 'black 5px solid', marginTop: '25px'}}
          />
        </section>

        <Link to = '/AHRC' style = {{textDecoration: 'none'}}>
            <section className = 'footer'>
              <p style = {{marginBottom: '50px'}}>Next Project!</p>
            </section>
        </Link>


      </div>
    </div>
  )
}
