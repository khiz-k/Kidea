import React from 'react';
import './homeHero.scss';

export default function HomeHero (props) {
  return (
    <>
      <section className="homehero">
        <div>
          <h1 className="homehero-header">Educational Media for Kids to watch</h1>
          <p className="homehero-text">Lorem ipsum</p>
          <button className="homehero-button">ABOUT US</button>
        </div>
        <img src={props.image}/>
      </section>
    </>
  );
}