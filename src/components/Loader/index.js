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
      <div className="loader-board">
        <div className="loader-content" id="content">
          <p id="title">Episode I</p>
          <p id="subtitle">THE CODER'S MENACE</p>
          <br />
          <p>
            After having spent too much time on the planet of nameOfCompany our
            young hero, Kirsten Ann Stemmet, has decided to spread her
            intergalactic wings in search of greener planetary pastures. As a
            young engineer she’s dreamed of traveling and experiencing the
            furthest reaches of the Republic and the day to do so, has finally
            dawned…
          </p>
          <p>
            In order to be granted a seat on the passenger vessel Method-Data
            she was required to demonstrate her engineering skills to a team of
            experts and thus she constructed that which you’re witnessing right
            now. Why the long backstory you may ask? Is this not a waste of
            precious time? The answer to this question is a resounding, no. As
            we speak data is being harvested from a distant data bank and
            compiled in a manner which would streamline the experience which
            you, dear reader, are about to embark on.
          </p>
          <p>
            Please enjoy these quotes from some of the Republic’s finest
            engineers:
          </p>
          <p>
            "May the code be bug-free and the Force be with you." <br /> "Debugging is
            my ally, and a powerful ally it is." <br /> "In coding, as in life, there
            is no try, only do." <br /> "Fear is the path to the dark side of
            programming." <br /> "A Jedi coder craves not for complexity, but for
            elegant simplicity." <br /> "Do or do not code, there is no copy-paste."
            "Much to learn, you still have, young programmer." <br /> "The bugs will
            be with you, always." <br /> "Code flows through you, like the Force."
            "Your focus determines your code's reality." <br /> "Stay on target, stay
            on deadline." <br /> "The code is strong with this one." <br /> "It's a trap...
            statement!" <br /> "Join the open source side, we have cookies... and
            code." <br /> "In the realm of programming, there is no emotion, there is
            peace." <br /> "The lines of code are ever-changing, but the coding
            principles remain." <br /> "The best refactorings come from the strongest
            tests." <br /> "Strike down your legacy code, and your journey to the
            modern stack will be complete." <br /> "The coding circle is not about
            code; it's about the community." <br /> "The dark bugs of the code cannot
            extinguish the light of debugging." <br /> "Train yourself to let go of
            old technologies, young developer." <br /> "A well-commented code is a
            pathway to many abilities some consider to be unnatural." <br /> "Use the
            patterns, Luke!" <br /> "A true developer embraces the elegant solutions,
            shuns the quick fixes." <br /> "The key to successful debugging is
            mindfulness and patience."
          </p>
        </div>
      </div>
    </div>
  );
};

      export default Loader