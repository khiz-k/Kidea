import React from 'react';
import './style.scss';

export default function Card(props) {
    return (
        <section className={props.className+' card'}>
        <section className="card-top">

        </section>
        <section className="card-bottom">
          <p className='card-star'>★★★★</p>
          <p className="card-title">Sesame Street</p>
          <p className="card-body">Classic show endures changes, but learning content remains.</p>
        </section>
      </section>
    )
}
