import './App.css';
import CardDeck from "./lib/CardDeck.ts";
import Card from "./lib/Card.ts";
import { useState } from 'react';

const App = () => {
    const [cards, setCards] = useState<Card[]>([]);

    const handleDealCards = () => {
        const deck = new CardDeck();
        if (deck.cards.length < 5) {
            alert('Не хватает карт в колоде!');
        } else {
            const dealtCards = deck.getCards(5);
            setCards(dealtCards);
        }
    };

    return (
        <>
            {cards.length > 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <span key={index} className={`card rank-${card.rank} ${card.suit}`}>
                            <span className="rank">{card.rank}</span>
                            <span className="suit">{}</span>
                        </span>
                    ))}
                </div>
            )}
            <button onClick={handleDealCards}>Раздать карты</button>
        </>
    );
};

export default App;