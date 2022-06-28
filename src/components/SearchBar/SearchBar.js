import { StyledSearchBar } from "./SearchBar.styled";


const SearchBar = ({ searchText, setSearchText, searchCharacters }) => {
    const submitForm = (event) => {
        event.preventDefault();
        searchCharacters();
        setSearchText('');
    }

    return (
        
        <StyledSearchBar className="searchBar" onSubmit={submitForm}>
            <input
                className="searchText"
                type="text"
                value={searchText}
                placeholder="character name, i.e. Hulk"
                onChange={(event) => setSearchText(event.target.value)}
            />

            <button className="search-button" type="Submit">Search</button>
        </StyledSearchBar>
    );
};


export default SearchBar;
