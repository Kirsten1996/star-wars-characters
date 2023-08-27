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
  
  const characterOneHandleChange = (event, value) => {
    setSelectedCharacterOne(value);
    console.log(selectedCharacterOne);
    console.log(router)
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
    console.log(selectedCharacterTwo);
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
              .sort() || []
          }
          onChange={characterOneHandleChange}
          getOptionDisabled={(option) => option === selectedCharacterTwo}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose your character" />
          )}
        />
        <Autocomplete
          id="disabled-options-demo"
          options={
            Object.keys(characterData)
              .map((i) => characterData[i].name)
              .sort() || []
          }
          onChange={characterTwoHandleChange}
          getOptionDisabled={(option) => option === selectedCharacterOne}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose your character" />
          )}
        />
      </div>
    );
};

export default SearchSelect;