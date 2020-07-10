import React from 'react';
import './homeHero.scss';

export default function HomeHero (props) {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Home Hero</h1>
          <p>This is the home page</p>
          <button>Home Button</button>
        </div>
        <img src={props.image}/>
      </section>
    </>
  );
}