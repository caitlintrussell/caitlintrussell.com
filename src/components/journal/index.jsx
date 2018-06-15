
import React, {Component} from 'react';
import { animateScroll } from 'react-scroll';
import './journal.css';
import PEP from './pep';
import BeforePep from './before-pep';

class Journal extends Component {
  componentDidMount() {
    if (window.innerWidth < 500) animateScroll.scrollTo(200);
    else if (window.innerWidth < 800) animateScroll.scrollTo(300);
    else animateScroll.scrollTo(400);
  }
  render() {
    return (
      <div>
        <PEP />
        <BeforePep />
      </div>
    )
  }
}

export default Journal;
