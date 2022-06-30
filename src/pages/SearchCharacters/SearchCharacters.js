import { useState } from 'react';
import SearchBar from "../../components/SearchBar/SearchBar";
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { StyledSearchCharacters, StyledSearchResults } from "./SearchCharacters.styled";


const SearchCharacters = () => {
    const [characters, setCharacters] = useState([]);

    return (

        <StyledSearchCharacters>

            <SearchBar setCharacters={setCharacters}/>

            <StyledSearchResults>
                {characters &&
                    characters.map(character =>
                        <li key={character.id}>
                            <CharacterCard
                                character={character}
                                //setCharacter={setCharacter}
                                //setCharacterDetails={setCharacterDetails}
                            />
                        </li>
                    )
                }
            </StyledSearchResults>

        </StyledSearchCharacters>

    );
};


export default SearchCharacters;