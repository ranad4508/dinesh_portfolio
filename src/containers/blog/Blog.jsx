import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="blog section__padding" id="blog">
    <div className="blog-heading">
      <h1 className="gradient__text">Recent blogs</h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021"  text="Having a motivational figure in your life is essential. These people can form your support system, undoubtedly making life easier and less stressful. Transition from life as a full-time student to balancing learning with my employment as an auditor has been far from easy.  Every second is spent on the move, accumulating new knowledge, and rushing home to attend online lessons." />
      </div>
      <div className="blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021"  text="I am thankful for where I am, for the people that surround me and encourage me to be the best I can be every day." />
        <Article imgUrl={blog03} date="Sep 26, 2021"  text="For institutions to make real progress, the youth must be provided with an open platform where they can share their views on matters that impact them." />
       
      </div>
    </div>
  </div>
);
export default Blog