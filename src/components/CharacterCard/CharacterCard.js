import React from 'react';
import './CharacterCard.css';


const CharacterCard = ({ character, setCharacter, setCharacterDetails }) => {
    const characterImage = `${character.thumbnail.path}.${character.thumbnail.extension}`;

    return (

        <div className="characterCard">

            <img className="characterCard__image" src={characterImage} alt="character" />
            <div className="characterCard__container">
                <div className="characterCard__info">
                    <p
                        className="characterCard__text">
                        <span className="heading">Marvel ID: </span>
                        {character.id}
                    </p>
                    <p
                        className="characterCard__text">
                        <span className="heading">Name: </span>
                        {character.name}
                    </p>
                </div>

                <div className="characterCard__actions">
                    <button
                        className="characterCard__button"
                        onClick={() => {
                            setCharacter(character);
                            setCharacterDetails(true);
                        }}
                    >
                        Show More
                    </button>
                </div>
            </div>

        </div>
    );
};


export default CharacterCard;
