

import React from 'react';
import { Link, Route } from 'react-router-dom';

import './header.css';
import logo from './nametrans.svg';
import divider from './divider.svg';
import Button from '../button';
import Divider from '../divider';
import About from '../about';
import Projects from '../projects';
import Journal from '../journal';

const Header = () => {
  const publicRoute = process.env.PUBLIC_URL;
  console.log(publicRoute);
  return (

    <div>
    <div className="Header">
      <div className="Title">
        <img src={logo} className="img-responsive" alt="Caitlin Trussell Logo"/>
        <img src={divider} className="img-responsive" alt="--------------"/>
        <div className="Nav">
          <div className="Nav-btn">
            <Link to={`${publicRoute}/about`}>
              <Button name="about" />
            </Link>
          </div>
          <div className="Nav-btn">
            <Link to={`${publicRoute}/projects`}>
            <Button name="projects" />
            </Link>
          </div>
          <div className="Nav-btn">
            <Link to={`${publicRoute}/journal`}>
              <Button name="journal" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Divider />
        <Route path={`${publicRoute}/about`} component={About} />
        <Route path={`${publicRoute}/projects`} component={Projects} />
        <Route path={`${publicRoute}/journal`} component={Journal} />

    </div>
  )
}

export default Header;
