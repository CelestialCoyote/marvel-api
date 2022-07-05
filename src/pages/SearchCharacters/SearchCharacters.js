import { useState } from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails';
import { StyledSearchCharacters, StyledSearchResults } from "./SearchCharacters.styled";


const SearchCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState();
    const [characterDetails, setCharacterDetails] = useState(false);

    return (

        <StyledSearchCharacters>

            <SearchBar setCharacters={setCharacters} />

            <StyledSearchResults>
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

            </StyledSearchResults>

        </StyledSearchCharacters>

    );
};


export default SearchCharacters;