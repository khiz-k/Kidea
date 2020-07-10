import React from 'react';
import './aboutHero.scss';

export default function AboutHero (props) {
  return (
    <>
       <section className="about-hero">
        <div className='about-hero-left'>
          <h1 className="about-hero-header">Team <span className='about-hero-important'>Happy</span> Feet</h1>
          <p className="about-hero-text">Group of happy-go-lucky tech savvy individuals embracing the idea of .</p>
        </div>
        <div className="about-hero-right">
          <div className="coupled-images">
          <img src='./assets/Khizar.png'className='about-hero-img1'/>
          <img src='./assets/Rey.jpg'className='about-hero-img2'/>
          </div>
          <div className="coupled-images">
          <img src='./assets/Doraa.jpg'className='about-hero-img3'/>
          <img src='./assets/Bonney.png' className='about-hero-img4'/>
          </div>
        </div>
      </section>
    </>
  );
}
