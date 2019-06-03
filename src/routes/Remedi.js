import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav';

export default function Remedi() {
  return (
    <div className = 'page'>
      <div className = 'Remedi'>
      <Nav/>
      
      <div className = 'RemediContainer'>

        <div className = 'RemediHeaderContainer'>
          <h2 className = 'RemediHeader'>Remedi</h2>
          <img 
            src = 'http://res.cloudinary.com/aaronculp/image/upload/c_scale,h_502,w_258/v1559072702/Portfolio/Single.png'
            alt = 'Remedi'
            className = 'RemediImage'
          />
        </div>

        <section className = 'RemediMiddle'>
          <img 
            src = 'http://res.cloudinary.com/aaronculp/image/upload/c_scale,h_502,w_249/v1559073499/Portfolio/Login.png'
            alt = 'Remedi'
          />
          <div className = 'wireframesText'>
            <p style = {{width: '500px'}}>Remedi was my final project while attending General Assembly's 12 Week Web Development Immersive</p>
            <p style = {{width: '500px'}}>Remedi is a health wellness mobile application for both iOS and Android devices.</p>
            <p style = {{width: '500px'}}>Remedi was my first project built out in React Native! Super cool build and excited to get more familiar with it!</p>
          </div>
          <img 
            src = 'http://res.cloudinary.com/aaronculp/image/upload/c_scale,h_502/v1559072519/Portfolio/Profile.png'
            alt = 'Remedi'
          />
        </section>

        <section className = 'RemediMiddle'>
          <p className = 'soloText'>The idea of Remedi is to first input your dietary restrictions. Then you can select your current meal time, select your level of hunger and then add what symptoms you are having. Remedi then will return what you should take to alleviate those symptoms!</p>
        </section>

        <section className = 'RemediMiddle'>
        <video 
            src = 'https://res.cloudinary.com/aaronculp/video/upload/c_scale,h_502,w_258/v1559233387/Portfolio/IMG_5345.TRIM.mov'
            className ='videoRemedi'
            autoPlay = {true}
            loop = {true}
          />
          <div className ='designers'>
            <p> Remedi was created by the following UX/UI Designers!</p>
            <a href = 'http://www.raquel-winiarsky.com'>
              <p>Raquel Winiarsky</p>
            </a>
            <p>Ariella Mamlin</p>
            <p>Irene Inouye</p>
            <p>Jill Moloney</p>
          </div>
        </section>

        <Link to = '/Portfolio' style = {{textDecoration: 'none'}}>
            <section className = 'footer'>
              <p style = {{marginBottom: '50px'}}>Next Project!</p>
            </section>
        </Link>

        </div>
      </div>
    </div>
  )
}
