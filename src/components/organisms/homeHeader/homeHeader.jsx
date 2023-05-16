import React from 'react';
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <div className='signin/signup'>
      <div className='navBar'>
        <p>Start</p>
        <p>O co chodzi?</p>
        <p>O nas</p>
        <p>Fundacja i organizacje</p>
        <p>Kontakt</p>
      </div>
      <Link to={www.www}>Sign in</Link>
      <Link to={www.www}>Sign up</Link>
    </div>
  );
}

export default HomeHeader;
