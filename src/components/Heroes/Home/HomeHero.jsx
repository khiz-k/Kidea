import React from 'react';
import './homeHero.scss';

export default function HomeHero (props) {
  return (
    <>
      <section className="home-hero">
        <div>
          <h1 className="hero-header">Educational Media for Kids to watch</h1>
          <p className="hero-text">Lorem ipsum</p>
          <button className="hero-button">ABOUT US</button>
        </div>
        <img src={props.image}/>
      </section>
    </>
  );
}