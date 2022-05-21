import React from 'react'
import Feature from '../../components/feature/Feature';
import aboutMe from '../../assets/aboutMe.JPG';
import './about.css';
const aboutData = [
  {
    title: 'Name',
    text: 'Dinesh Kumar Rana',
  },
  {
    title: 'Date of birth',
    text: '28 september 2001',
  },
  {
    title: 'Address',
    text: 'Koteshwor, Kathmandu, Nepal',
  },
  {
    title: 'Zip code',
    text: '44600',
  },
  {
    title: 'E-mail',
    text: 'ranad4508@gmail.com',
  },
  {
    title: 'Phone no.',
    text: '+977 9865747518',
  }
];

const About = () => (
  <div className="about section_padding" id="about">
    <h1 className="about-text">About Me</h1>
    <div className="about-heading">
      <div className='about-image'>
        <img src={aboutMe} alt="aboutme" />
      </div>
      <div className="about-container">
        {aboutData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>

  </div>
);

export default About