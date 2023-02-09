import React from 'react'
import "../style.scss";
import HeroImg from '../assets/Programming.svg';
// import Hackvideo from "../assets/Hackhound.mp4";

function HeroSection() {
  return (
    <section className="MainHero ">
      <header className="container header-section flex ">
        <div className="header-left">
          <h1>A Platform For Next Generation of Hackers !</h1>
          <p>Place for imparting education to next-generation students.</p>
          <a
            href="https://forms.gle/KouWzLBiyER8Kab86"
            className="primary-button"
          >
            Join Now
          </a>
        </div>
        <div className="header-right">
          <img src={HeroImg} alt="Hero" />
        </div>
        
      </header>
    </section>
  );
}

export default HeroSection