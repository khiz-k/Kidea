import React from 'react';
import './moviesHero.scss';

export default function MoviesHero (props) {
  return (
    <>
      <section className="movies-hero">
        <iframe className="movies-hero-content" width="777" height="583" src="https://www.youtube.com/embed/Nyrn_prvr08" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </>
  );
}
