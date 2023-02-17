import React, { useState } from 'react';
import SearchBar from "../../components_old/SearchBar/SearchBar";
import CharacterCard from '../../components_old/CharacterCard/CharacterCard';
import CharacterDetails from '../../components_old/CharacterDetails/CharacterDetails';
import './SearchCharacters.css';


const SearchCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState();
    const [characterDetails, setCharacterDetails] = useState(false);

    return (

        <>

            <SearchBar setCharacters={setCharacters} />

            <div className='search-results'>
                {!characterDetails &&
                    characters.map(character =>
                        <CharacterCard
                            key={character.id}
                            character={character}
                            setCharacter={setCharacter}
                            setCharacterDetails={setCharacterDetails}
                        />
                    )
                }

                {characterDetails &&
                    <CharacterDetails
                        character={character}
                        setCharacterDetails={setCharacterDetails}
                    />
                }

            </div>

        </>

    );
};


export default SearchCharacters;