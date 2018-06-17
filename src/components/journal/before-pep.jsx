import React from 'react';
import posts from './posts';
import Arrow from '../arrow';
import Paragraph from './paragraph';

const BeforePep = () => {
  return (
    posts.map( (post) => {
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
    })
  )
}

export default BeforePep;
