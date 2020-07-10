import React from 'react';
import './aboutDetails.scss';

export default function AboutDetails (props) {
  return (
    <>
      <section className="about-info">
      <h2>About</h2>
        <iframe frameBorder={0} allowTransparency="true" allowFullScreen="true" title="Data Visualization" marginHeight={0} marginWidth={0} scrolling="no" style={{display: 'block', width: '1000px', height: '827px', visibility: 'visible'}} 
        src="https://public.tableau.com/views/CensusDataset/Dashboard?%3Aembed=y&%3AshowVizHome=no&%3Adisplay_count=y&%3Adisplay_static_image=y&%3AbootstrapWhenNotified=true&%3Alanguage=en&:embed=y&:showVizHome=n&:apiID=host0#navType=0&navSrc=Parse" />
      </section>
    </>
  );
}