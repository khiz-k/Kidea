import React from 'react';
import './newsHero.scss';

export default function NewsHero (props) {
  return (
    <>
      <section className="news-hero">
      <iframe className="news-hero-content" width="777" height="583" src="https://www.youtube.com/embed/MVvVTDhGqaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {/* <img className="news-hero-content" src="./assets/covid-info.jpg"/> */}
      </section>
    </>
  );
}
