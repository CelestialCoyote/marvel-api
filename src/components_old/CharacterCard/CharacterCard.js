import React from 'react';
import './CharacterCard.css';


const CharacterCard = ({ character, setCharacter, setCharacterDetails }) => {
    const characterImage = `${character.thumbnail.path}.${character.thumbnail.extension}`;

    return (

        <>

            <img className="characterCard_image" src={characterImage} alt="character" />
            <div className="characterCard_container">
                <div className="characterCard_info">
                    <p
                        className="characterCard_text">
                        <span className="heading">Marvel ID: </span>
                        {character.id}
                    </p>
                    <p
                        className="characterCard_text">
                        <span className="heading">Name: </span>
                        {character.name}
                    </p>
                </div>

                <div className="characterCard_actions">
                    <button
                        className="characterCard_button"
                        onClick={() => {
                            setCharacter(character);
                            setCharacterDetails(true);
                        }}
                    >
                        Show More
                    </button>
                </div>
            </div>

        </>
    );
};


export default CharacterCard;
