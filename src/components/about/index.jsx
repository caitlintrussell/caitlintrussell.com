import React, { Component } from 'react';
import self from './self.jpg';
import { animateScroll } from 'react-scroll';

import './about.css';
import Arrow from '../arrow';

class About extends Component {
  componentDidMount() {
    animateScroll.scrollTo(300);
  }
  render() {
    return (
      <div>
      <div className="Main">
        <div className="About-img">
          <img src={self} className="img-responsive Selfie" alt="Caitlin" />
        </div>
        <div className="About-text">
          <h2>Hi there!</h2>
          <h3>
            I'm Caitlin. I'm a full stack software developer!
          </h3>
          <p>
            I live in Chicago and sometimes find myself at the foot of ancient ruins. I love javascript in all of it's forms and I've been making fiddling around on the web since I was 12. More recently, I completed a software developing intensive at Fullstack Academy of Code. Thanks for visiting! <i className="far fa-smile" />
          </p>
          <br />
          <p>
            <a href="https://github.com/caitlintrussell" target="blank">
              <i className="glyph fab fa-github fa-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/caitlintrussell/"
              target="blank"
            >
              <i className="glyph fab fa-linkedin fa-lg" />
            </a>
            <a href="https://angel.co/caitlintrussell" target="blank">
              <i className="glyph fab fa-angellist fa-lg" />
            </a>
            <a href="mailto:caitlintrussell.com" target="blank">
              <i className="glyph fas fa-envelope fa-lg" />
            </a>
          </p>
        </div>

      </div>
      <Arrow />
      </div>
    );
  }
}

export default About;
