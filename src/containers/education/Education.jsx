import React from 'react'
import education from '../../assets/education.jpg';
import './education.css';

const Education = () => (
  <div className="possibility section__padding" id="education">
    <div className="possibility-image">
      <img src={education} alt="possibility" />
    </div>
    <div className="possibility-content">
      <h4>Education</h4>
      <h1 className="gradient__text">Bachelor of Computer Application</h1>
      <p>I am a student of Bachelor of Computer Application year started from 2021. I am currently studying a BCA course in Orchid Int'l College </p>
      <h1 className="gradient__text">Science in Intermediate</h1>
      <p>I have completed my +2/Intermediate from NASA international college</p>
    </div>
  </div>
);
export default Education