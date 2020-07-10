import React from 'react';
import './aboutHero.scss';

export default function AboutHero (props) {
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