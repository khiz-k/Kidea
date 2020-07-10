import React from 'react';
import './moviesDetails.scss';
import Card from '../../Card/Card';
export default function MoviesDetails (props) {
  return (
    <>
      <section className="movies-list">

        <Card className='card1'/>
        <Card className='card2' />
        <Card className='card3'/>
        <Card className='card4'/>
        <Card className='card5'/>
        <Card className='card6'/>

      </section>
    </>
  );
}