import React, { useEffect, useState  } from 'react';
import { useRouter } from "next/router"
import "./search-select.scss"
import { Autocomplete, TextField } from '@mui/material';

const SearchSelect = ({ characterData, item }) => {
  const router = useRouter(); 
  const [selectedCharacterOne, setSelectedCharacterOne] = useState([]);
  const [selectedCharacterTwo, setSelectedCharacterTwo] = useState([]);

    useEffect(() => {
      const { query } = router;

      // Handle the query parameter value if available for each field
      if (query.selectedCharacterOne) {
        setSelectedCharacterOne(query.selectedCharacterOne);
      }

      if (query.selectedCharacterTwo) {
        setSelectedCharacterTwo(query.selectedCharacterTwo);
      }
    }, [router]);
  
    /**
     * 
     * @param {*} event 
     * @param {*} value 
     * 
     * Two different handleChange func for two selects
     */
  const characterOneHandleChange = (event, value) => {
    setSelectedCharacterOne(value);
    // Passes values to homepage query 
    router.push(
      {
        pathname: '/',
        query: { ...router.query, selectedCharacterOne: value },
      },
      router.asPath,
      {shallow: true}
    );
  }

  const characterTwoHandleChange = (event, value) => {
    setSelectedCharacterTwo(value);
    router.push(
      {
        pathname: '/',
        query: { ...router.query, selectedCharacterTwo: value },
      },
      router.asPath,
      { shallow: true }
    );
  }
    return (
      <div className="search-select">
        <Autocomplete
          id="disabled-options-demo"
          options={
            Object.keys(characterData)
              .map((i) => characterData[i].name)
              .sort()
          }
          onChange={characterOneHandleChange}
          getOptionDisabled={(option) => option === selectedCharacterTwo}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose your character one" />
          )}
        />
        <Autocomplete
          id="disabled-options-demo"
          options={
            Object.keys(characterData)
              .map((i) => characterData[i].name)
              .sort()
          }
          onChange={characterTwoHandleChange}
          getOptionDisabled={(option) => option === selectedCharacterOne}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose your character two" />
          )}
        />
      </div>
    );
};

export default SearchSelect;