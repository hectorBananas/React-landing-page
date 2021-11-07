import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='../assets/videos/video-2.mp4' autoPlay loop muted />  */}
      <h1>Haz Realidad Tu Viaje</h1>
      <p>¿En Que Estas Soñando?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className="fa fa-suitcase-rolling" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
