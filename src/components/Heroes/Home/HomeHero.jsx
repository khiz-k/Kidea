import React from 'react';
import './homeHero.scss';
import {Link} from 'react-router-dom';
export default function HomeHero (props) {
  return (
    <>
      <section className="homehero">
        <div className='homehero-left'>
          <h1 className="homehero-header">Educational <span className='homehero-important'>Media</span> for <span className="homehero-important">Kids</span> to watch</h1>
          <p className="homehero-text">Parents face a really difficult time tracking what their kids are watching. Kidea suggests very specific content that is age-targeted so you don’t have to worry anymore.</p>
          <Link to="/about">

          <button className="homehero-button">ABOUT US</button>

          </Link>
        </div>
        <div className="homehero-right">
        <img src='./assets/WhimsicalAnimal_08.svg'className='homehero-img1'/>
        <img src='./assets/WhimsicalAnimal_13.svg'className='homehero-img2'/>

        </div>
      </section>
    </>
  );
}