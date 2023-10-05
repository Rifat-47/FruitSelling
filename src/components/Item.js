import React from 'react'
import Img from "./../../src/static/images/demo.jpg"
const Item = (props) => {
  const { text } = props;
  return (
    <li className='item-container'>
      <div className='img-container'>
        <img src={Img}></img>
      </div>
      <div className='heading'>Jackfruit</div>
      <div className='subheading'>Location: Dhaka</div>
      <div className='description'>{text}</div>
    </li>
  )
}

export default Item