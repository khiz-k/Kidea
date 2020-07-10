import React, { Component } from "react";
import './style.scss';
export default class CategoryNav extends Component {
  render() {
    return (
      <div className="categoryNav">
        <button className="categoryNav-button categoryNav-button1">All ages</button>
        <button className="categoryNav-button categoryNav-button2">Preschool(2-4)</button>
        <button className="categoryNav-button categoryNav-button3">Little Kids(5-7)</button>
        <button className="categoryNav-button categoryNav-button4">Big Kids(8-9)</button>
        <button className="categoryNav-button categoryNav-button5">Teens(10-13)</button>
      </div>
    );
  }
}
