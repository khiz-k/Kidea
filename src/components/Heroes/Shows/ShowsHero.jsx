import React from 'react';
import './showsHero.scss';

export default function ShowsHero (props) {
  return (
    <>
      <section className="shows-hero">
      <iframe className="shows-hero-content" width="777" height="583" src="https://www.youtube.com/embed/mJaxCjNJDww" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </>
  );
}
