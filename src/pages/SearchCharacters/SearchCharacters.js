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
                        <CharacterCard
                            key={character.id}
                            character={character}
                            //setCharacter={setCharacter}
                            //setCharacterDetails={setCharacterDetails}
                        />
                    )
                }
            </StyledSearchResults>

        </StyledSearchCharacters>

    );
};


export default SearchCharacters;