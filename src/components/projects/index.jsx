
import React, {Component} from 'react';
import {animateScroll} from 'react-scroll';
import './projects.css';
import yats from './yats-1.png';
import guessingGame from './guessing-game.png';
import ct from './ct.png';
import Arrow from '../arrow';


const projects = [
  {
    name: 'Guessing Game',
    tech: ['javascript',],
    img: guessingGame,
    url: 'https://caitlintrussell.github.io/guessingGame/',
    description: 'Made in the Fullstack Academy Foundations program. A simple number 1-100 guessing game.',
  },
  {
    name: 'Portfolio',
    tech: ['javascript', 'react'],
    img: ct,
    url: 'http://caitlintrussell.com',
    description: 'Refactored and redesigned during review week after the junior phase at Fullstack Academy.',
  },
  {
    name: 'Yats',
    tech: ['wordpress'],
    img: yats,
    url: 'http://yatscajuncreole.com',
    description: `Website for a cajun restaurant chain in Indiana, Ohio and Tennessee. Includes wordpress posting ability for individual stores to set their daily menus. If you're in the area, get the gumbo!`,
  },
];

const findGlyph = (name) => {
  switch (name) {
    case 'javascript':
    return 'glyph fab fa-js-square fa-lg';
    case 'react':
    return 'glyph fab fa-react fa-lg';
    case 'wordpress':
    return 'glyph fab fa-wordpress fa-lg';
    case 'github':
    return 'glyph fab fa-github fa-lg'
    default:
    return '';
  }
};

class Projects extends Component {
  componentDidMount() {
    animateScroll.scrollTo(400);
  }
  render() {
    return (
      <div>
      {projects.map( (project) => {
        return (
          <div className="Project-main" key={project.name}>
            <div className="Project-img">
            <img src={project.img} className="img-responsive img-project Screenshot" alt="screenshot"/>
            </div>
            <div className="Project-text">
              <h2><a href={project.url} target="blank">{project.name}</a></h2>
              <h4>{project.tech.map( (elem) => <i key={elem} className={findGlyph(elem)} />)}</h4>
              <p>{project.description}</p>
            </div>

          </div>
        )
      })}
      <Arrow />
      </div>
    )
  }
}

export default Projects;
