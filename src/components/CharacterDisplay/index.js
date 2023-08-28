import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import "./character-display.scss";
import SearchSelect from "../SearchSelect/index.js";

const CharacterDisplay = ({ characterData, selectedCharacter }) => {
  const [showCharacteristics, setShowCharacteristics] = useState([]);

  useEffect(() => {
    /**
     * Mapping selectedCharacter to get character name
     * then filters characterData for character's object data
     */
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

    setShowCharacteristics(filteredCharacters);

  }, [
    selectedCharacter,
    characterData,
  ]);

  const getStatClass = (value, key, index, parentObj) => {
    if (parentObj.length > 1) {
      let positionToCheck;
      if (index === 0) {
        positionToCheck = 1;
      } else {
        positionToCheck = 0;
      }
      if (parseInt(value) > parseInt(parentObj[positionToCheck][key])) {
        return 'character-display-highlighted';
      } else {
        return '';
      }
    } else {
      return '';
    }
  };

  /**
   * 
   * @param {*} image_url 
   * 
   * Checks if image path exists
   */
  const imageExists = (image_url) => {
    // Create a new XMLHttpRequest object.
    let http = new XMLHttpRequest();

    // Send the HEAD request to the server.
    http.open('HEAD', image_url, false);
    http.send();

    // Check if the response status code is not 404 (Not Found).
    // If it's not 404, the image is considered to exist, so return 'true'.
    // If the status code is 404, the image doesn't exist, so return 'false'.
    return http.status != 404;
  }

  /**
   * 
   * @param {*} name 
   * Gets the name of the character and looks if image exists
   */
  const getImageFromId = (name) => {
    console.log(name);
    const parameterized = name.trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/, '')
    .replace(/\s/g, '-');
    const path = `/${parameterized}.jpeg`;
    if (imageExists(path)) {
      return `/${parameterized}.jpeg`;
    } else {
      return '/placeholder.jpeg';
    }
  }

  return (
    <div className="character-display">
      <div className="character-display-characteristics">
        {Object.values(showCharacteristics).map((item, key) => (
          <div className="character-display-wrap" key={key}>
            <h2>{item.name}</h2>
            <div className="character-display-characteristics-img">
              <img src={getImageFromId(item.name)} alt="" />
            </div>
            <div className="character-display-attributes">
              <div>
                <span>age: </span>
                <span className="">{item.birth_year}</span>
              </div>
              <div>
                <span>mass: </span>
                <span
                className={`${getStatClass(
                  item.mass,
                  'mass',
                  key,
                  showCharacteristics
                )}`}
                >
                  {item.mass}
                </span>
              </div>
              <div>
                <span>height:</span>
                <span
                className={`${getStatClass(
                  item.height,
                  "height",
                  key,
                  showCharacteristics
                )}`}
                >
                  {item.height}
                </span>
              </div>
              <div>
                <span>hair color:</span>
                <span>{item.hair_color}</span>
              </div>
              <div>
                <span>skin color:</span>
                <span>{item.skin_color}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterDisplay;

        //           className={`${highestCharacterHeight[0] > highestCharacterHeight[1]}
        // ? character-display-highlighted
        // :  ${highestCharacterHeight[0] < highestCharacterHeight[1]}
        // ? character-display-highlighted
        // :  ${highestCharacterHeight[0] === highestCharacterHeight[1]}
        // ? character-display-highlighted
        // : normal`}