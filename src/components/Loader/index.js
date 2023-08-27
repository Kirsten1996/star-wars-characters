import React, { useState, useEffect, Fragment } from "react";
import StarWarsLogo from '../../assets/star_wars_logo.js';
import "./loader.scss"



const Loader = () => {

  return (
    <div className="loader">
      <h1 className="loader-intro">
        A long time ago, in a galaxy far,
        <br /> far away....
      </h1>
      <div className="loader-logo">
        <StarWarsLogo />
      </div>
      <div id="board">  
        <div id="content">
          <p id="title">Episode I</p>
          <p id="subtitle">THE CODER'S MENACE</p>
          <br />
          <p>Turmoil has engulfed the Galactic Republic as Christopher Kade finishes studying to become a master in his trade.</p>        
        </div>  
      </div>
    </div>
  );
};

      export default Loader