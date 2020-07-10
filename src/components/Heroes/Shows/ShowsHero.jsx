import React from 'react';
import './showsHero.scss';

export default function ShowsHero (props) {
  return (
    <>
      <section className="shows-hero">
        <video className="hero-content" poster={props.video.image} controls>
          <source src={props.video.source} type="video/mp4" className="video-source"/>
        </video>
      </section>
    </>
  );
}