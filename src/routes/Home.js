import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className = 'page'>
      <div className = 'homeContainer'>
        <Nav/>
        
        <div className = 'projectsContainer'>

        <div className = 'Remedi'>
          <Link to = '/Remedi'>
            <img 
                src = 'https://res.cloudinary.com/aaronculp/image/upload/v1543970506/Portfolio/RemediMobile.jpg' 
                alt = 'Remedi'
                className = 'homeImage'
            />
          </Link>
          </div>

          <div className = 'RickMorty'>
          <Link to = '/RickAndMorty'>
            <img 
                src = 'https://res.cloudinary.com/aaronculp/image/upload/v1543943983/Portfolio/Run-the-Jewels-Rick-and-Morty.jpg' 
                alt = 'Rick & Morty Space Adventures'
                className = 'homeImage'
            />
          </Link>
          </div>

          <div className = 'Portfolio'>
          <Link to = '/Portfolio'>
            <img 
                src = 'https://res.cloudinary.com/aaronculp/image/upload/v1544029415/MAC.png' 
                alt = 'Portfolio'
                className = 'homeImage'
            />
            </Link>
          </div>

          <div className = 'D17'>
          <Link to = '/D17'>
            <img 
                src = 'https://res.cloudinary.com/aaronculp/image/upload/v1537200945/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9.jpg' 
                alt = 'D17'
                className = 'homeImage'              
            />
            </Link>
          </div>

          <div className = 'AHRC'>
          <Link to = '/AHRC'>
            <img 
                src = 'https://res.cloudinary.com/aaronculp/image/upload/v1543943983/Portfolio/Run-the-Jewels-Rick-and-Morty.jpg' 
                alt = 'AHRC'
                className = 'homeImage'
            />
            </Link>
          </div>


        </div>
      </div>
    </div>
  )
}
