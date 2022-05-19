import React from 'react';
import './footer.css';
const Footer = () => (
  <div className="footer section__padding" id='contact'>
    <div className="footer-heading">
      <h1 className="gradient__text">Contact Us</h1>
    </div>
    <div class="form-container">
      <form>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your first name.." />

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="usa">Nepal</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
          <option value="usa">Japan</option>
          <option value="usa">China</option>
        </select>

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>


    <div className="footer-links">
      <div className="footer-links_div">
        <p>Kathmandu Nepal <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Policy</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>+977-9865747518</p>
        <p>ranad4508@gmail.com</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>&copy;2022 Dinesh Kumar Rana. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;