import React from 'react';
import './musicHero.scss';

export default function MusicHero (props) {
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