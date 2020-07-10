import React from 'react';
import './newsHero.scss';

export default function NewsHero (props) {
  return (
    <>
      <section className="hero">
        <video className="hero-content" poster={props.video.image} controls>
          <source src={props.video.source} type="video/mp4" className="video-source"/>
        </video>
      </section>
    </>
  );
}