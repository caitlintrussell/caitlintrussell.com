
import React, {Component} from 'react';
import { animateScroll } from 'react-scroll';

import posts from './posts';
import './journal.css';
import Arrow from '../arrow';
import Paragraph from './paragraph';
import PEP from './pep';

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
        {posts.map( (post) => {
          return (
            <div key={post.title}>
              <div className="Journal-main" >
                <div className="Journal-title">
                  <h3>{post.title}</h3>
                  <h4>{post.date}</h4>
                </div>
                <div className="Journal-text">
                  {post.paragraphs.map( (parags) => <Paragraph para={parags} key={parags.content.charCodeAt(5)} /> )}
                </div>
              </div>
              <Arrow />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Journal;
