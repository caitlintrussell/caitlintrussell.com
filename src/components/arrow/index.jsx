
import React from 'react';
import './arrow.css';
import {animateScroll} from 'react-scroll';

const scrollToTop = () => {
    animateScroll.scrollToTop();
}

const Arrow = () => {
  return (
    <div className="Arrow-container" >
      <div className="Arrow">
        <a onClick={scrollToTop}>
          <i className="glyph far fa-caret-square-up fa-3x" />
        </a>
      </div>
    </div>
  )
}

export default Arrow;
