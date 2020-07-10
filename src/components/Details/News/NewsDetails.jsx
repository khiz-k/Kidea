import React from 'react';
import './newsDetails.scss';

export default function NewsDetails (props) {
  return (
    <>
      <section className="news-list">
      <div>
        <h2 className="about__title">Covid-19: The Global Pandemic</h2>
        <div className="about__info">
          <article className="about__quote">
            <h3>“We are getting more and more complacent with our take vs Covid. We need to be smarter than this.</h3>
            <h4 className="about__quote__author">- Dr. Ross Mcguire</h4>
          </article>
          <article className="about__article">
            <h3 className="about__article__title">The Facts </h3>
            <div className="about__article__paragraph">
              <h4 className="about__article__paragraph__text">Emergencies are still emergencies. Hospitals have protocols and experts in place to treat people with heart or stroke symptoms – even during the COVID-19 crisis.</h4>
              <h4 className="about__article__paragraph__text">The risk of getting COVID-19 is similar for people with no health conditions as it is for those with a heart condition or vascular cognitive impairment, or who have had a stroke. 1</h4>
            </div>
          </article>
        </div>
      </div>
      </section>
    </>
  );
}
