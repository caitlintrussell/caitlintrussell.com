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
            I'm Caitlin. Former product designer and future software developer.
          </h3>
          <p>
            I live in Chicago and sometimes find myself at the foot of ancient
            ruins. I enjoy javascript in all of it's forms. I'm studying
            programming at Fullstack Academy and documenting my experience in
            learning to code.
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
