import styled from "styled-components";


export const StyledSearchCharacters = styled.div`
    align-items: center;
    background-color: gray;
    diplay: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const StyledSearchResults = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`