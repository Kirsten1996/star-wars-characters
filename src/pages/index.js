import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import StarWarsLogo from '../assets/star_wars_logo.js';
import Loader from "../components/Loader";
import SearchSelect from '../components/SearchSelect';
import CharacterDisplay from '../components/CharacterDisplay';

const Star = ({ top, left }) => {
  return (
    <div className="homepage-star" style={{ top: top + 'px', left: left + 'px' }}></div>
  );
};

function HomePage({ query, characters }) {
  const [stars, setStars] = useState([]);
  const [data, setData] = useState(characters.results);
  const [selectedCharacter, setSelectedCharacter] = useState([])
  const router = useRouter();

  
  const charactersCount = characters.count;
  const characterPerPage = characters.results.length;
  const nextPage = 2;
  const pagesRemaining = Math.ceil(charactersCount / characterPerPage);
  
  useEffect(() => {
    async function fetchData() {
      let allCharacters = characters.results;

      // Fetch data for the remaining pages
      for (let page = nextPage; page <= pagesRemaining; page++) {
        const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
        const pageData = await res.json();
        allCharacters = [...allCharacters, ...pageData.results];
      }
      setData(allCharacters);
    }

    if (sessionStorage.getItem('characters') === null) {
      fetchData();
      console.log(charactersCount, 'charactersCount');
      if (data.length === charactersCount) {
        const stringifyObject = JSON.stringify(data);
        sessionStorage.setItem('characters', stringifyObject);
      }
    } else {
      const getCharactersSaved = sessionStorage.getItem('characters');
      const getCharacters = JSON.parse(getCharactersSaved);
      setData(getCharacters);
    }
  }, []);

  const numStars = 300;

  useEffect(() => {
    function randomPosition() {
      const randomX = Math.floor(Math.random() * window.innerWidth);
      const randomY = Math.floor(Math.random() * window.innerHeight);
      return [randomX, randomY];
    }

  function generateStars() {
    const starsComponent = [];
    for (let i = 0; i < numStars; i++) {
      const [x, y] = randomPosition();
      starsComponent.push(<Star key={i} top={y} left={x} />);
    }
    setStars(starsComponent);
  }

  window.addEventListener("resize", generateStars());

  return () => {
    window.removeEventListener("resize", generateStars())
  }
  }, []);

  useEffect(() => {
    // Handle the query parameter value if available
    const { query } = router;

    if (query.selectedCharacterOne || query.selectedCharacterTwo) {
      setSelectedCharacter([
        {name: query.selectedCharacterOne},
        {name: query.selectedCharacterTwo},
      ]);
    }
  }, [router]);

  console.log(data, '---------QUERY---------');

  return (
    <div className="homepage">
      {data.length === charactersCount &&
      sessionStorage.getItem('characters') !== null ? (
        <div className="homepage-inner">
          <div className="homepage-wrap">
            <div className="homepage-logo">
              <StarWarsLogo />
            </div>
            <div className="homepage-search-select">
              <SearchSelect characterData={data} />
            </div>
            <CharacterDisplay
              characterData={data}
              selectedCharacter={selectedCharacter}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
      {stars.map((i, key) => (
        <Fragment key={key}>{i}</Fragment>
      ))}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(`https://swapi.dev/api/people/?page=1`);
  const characters = await res.json();

  return {
    props: {
      characters,
      query,
    },
  };
}

export default HomePage;
