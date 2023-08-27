import React, { Fragment, useEffect, useState } from 'react';
import "./character-display.scss";
import SearchSelect from "../SearchSelect/index.js";
import sky from "../../assets/skywalk.jpeg"

const CharacterDisplay = ({ characterData, selectedCharacter }) => {
  const [showCharacteristics, setShowCharacteristics] = useState([]);

  useEffect(() => {
    const filteredCharacters = Object.values(selectedCharacter).flatMap(
      (selected) => {
        if (selected.name !== undefined) {
          return Object.values(characterData).filter(
            (match) => match.name === selected.name
          );
        }
        return []; // Return an empty array if selected.name is undefined
      }
    );

    console.log(filteredCharacters);
    setShowCharacteristics(filteredCharacters);
  }, [selectedCharacter, characterData]);
  console.log(typeof showCharacteristics);
  return (
    <div className="character-display">
      <div className="character-display-characteristics">
        {/* {showCharacteristics === [] ? ( */}
        {Object.values(showCharacteristics).map((item, key) => (
          <div className="character-display-wrap" key={key}>
            <h2>{item.name}</h2>
            <div className="character-display-characteristics-img">
              <img src={sky} alt="" />
            </div>
            <div className="character-display-attributes mobile">
              <div>
                <span>age: </span>
                <span>1</span>
              </div>
              <div>
                <span>mass: </span>
                <span>2</span>
              </div>
              <div>
                <span>height:</span>
                <span>3</span>
              </div>
              <div>
                <span>hair color:</span>
                <span>4</span>
              </div>
              <div>
                <span>skin color:</span>
                <span>5</span>
              </div>
              <div className="character-display-attributes"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterDisplay;

    // const getCharacterName = Object.values(characterData).filter(
    //   (selected) => selected.name === selectedCharacter[i].name
    // );
    // console.log(getCharacterName, '4');
    // setShowCharacteristics(getCharacterName);

    // {
    //   if(selected !== undefined) {
    //     console.log(selected.name, "//////")
    // Object.values(characterData).filter(
    // (match) => console.log(match.name === selected.name, 'MATCH')
    // )
    // setShowCharacteristics(displayCharacter);
    // console.log(showCharacteristics, 'displayCharacter');
    //   }
    // })
    // console.log(getCharacterName, 'displayCharacter');
    //     !Object.values(characterData).some(
    //       (match) => selected.name === match.name
    //     )
    // );
// ) : (
//               <Fragment>
                
//                 {/* <h2>{item.name}</h2> */}
//                 <div className="character-display-characteristics-img">
//                   <img src={sky} alt="" />
//                 </div>
//                 <div className="character-display-attributes mobile">
//                   <div>
//                     <span>age: </span>
//                     <span>1</span>
//                   </div>
//                   <div>
//                     <span>mass: </span>
//                     <span>2</span>
//                   </div>
//                   <div>
//                     <span>height:</span>
//                     <span>3</span>
//                   </div>
//                   <div>
//                     <span>hair color:</span>
//                     <span>4</span>
//                   </div>
//                   <div>
//                     <span>skin color:</span>
//                     <span>5</span>
//                   </div>
//                   <div className="character-display-attributes">

//                   </div>
//                 </div>
//               </Fragment>
//             )}
//           </div>
//          );
//       })} 