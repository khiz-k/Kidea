import React from 'react';
import './moviesHero.scss';

export default function MoviesHero (props) {
  return (
    <>
      <section className="movies-hero">
        <video className="hero-content" poster={props.video.image} controls>
          <source src={props.video.source} type="video/mp4" className="video-source"/>
        </video>
      </section>
    </>
  );
}