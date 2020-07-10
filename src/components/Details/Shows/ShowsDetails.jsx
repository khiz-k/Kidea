import React from "react";
import "./showsDetails.scss";
import CategoryNav from '../../CategoryNav/CategoryNav';
import Card from '../../Card/Card';

export default function ShowsDetails(props) {
  return (
    <>
      <section className="shows-list">
        <CategoryNav />

        <section className="movies-list">
          <Card className="card1" />
          <Card className="card2" />
          <Card className="card3" />
          <Card className="card4" />
          <Card className="card5" />
          <Card className="card6" />
        </section>
      </section>
    </>
  );
}
