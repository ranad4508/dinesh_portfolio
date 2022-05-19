import React from 'react';
import { Feature } from '../../components';
import './skills.css';
const Skills = () => {
  return (
    <div className='skills section__margin ' id='skills'>
      <div className='skills-feature'>
        <Feature title='My Skills' text='I have completed the 35 hours of front end web designing course from Orchid International College which includes HTML5, CSS3, Bootstrap5 basic, and some javascript and jQuery library.' />
      </div>
      <div className='skills-heading'>
        <h1 className='gradient__text'>
          FrontEnd/Web Designing course
        </h1>
        <p>Explore the course</p>
      </div>
      <div className='skills-container'>
        <Feature title="HTML5" text="HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation." />
        <Feature title="CSS3" text="CSS3 is the latest version of the CSS specification. CSS3 adds several new styling features and improvements to enhance the web presentation capabilities." />
        <Feature title="Bootstrap5" text="Bootstrap 5 is the newest version of Bootstrap, which is the most popular HTML, CSS, and JavaScript framework for creating responsive, mobile-first websites." />
        <Feature title="React JS" text="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies." />
      </div>
      <div className='skills-container_c'>
        <h1 className='skills-header'>C-Programming</h1>
        <p className='skills-text'>C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on.</p>
      </div>
    </div>
  )
}

export default Skills