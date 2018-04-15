
import React from 'react';
const Paragraph = (props) => {
  if (props.para.title){
  return (
    <div>
      <h4>{props.para.title}</h4>
      <p className="Inner-text">{props.para.content}</p>
    </div>
  )
  }
  else return (
  <div>
    <p className="Inner-text">{props.para.content}</p>
  </div>
  )
}


export default Paragraph;
