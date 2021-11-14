import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {


  return (
    <div className='hero-container'>
      {/* <video src='../assets/videos/video-2.mp4' autoPlay loop muted />  */}
      <div className='hero-section'></div>
      <div className='hero-section' id="hero-bg">
      <div className='hero-section-card'>
      <h1>Viaja y Vive Tu Sueño</h1>
      <p><i class="fas fa-book-reader"> </i>   Tours</p>
      <p><i class="fas fa-swimmer"> </i>   Actividades</p>
      <p><i class="fas fa-shuttle-van"> </i>   Transportación</p>
      <p><i class="fas fa-bed"> </i>   Hospedaje</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Ver Promociones
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Hablar con alguien <i className="fa fa-suitcase-rolling" />
        </Button>
      </div>
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
