import React from 'react';
import { BiUpArrow } from 'react-icons/bi';

const UpButton = () => {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <div className='UpButton'>
      <button onClick={scrollToTop}><BiUpArrow /></button>
    </div>
  )
}

export default UpButton;