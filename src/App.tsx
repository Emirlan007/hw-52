import './App.css';
import CardDeck from "./lib/CardDeck.ts";
import Card from "./lib/Card.ts";
import { useState, useEffect } from 'react';
import PokerHand from './lib/PokerHand.ts';

const App = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [cardCount, setCardCount] = useState(52);
    const [deck] = useState(new CardDeck());
    const [handOutcome, setHandOutcome] = useState<string>('');

    const handleDealCards = () => {
        if (deck.cards.length < 5) {
            alert('Не хватает карт в колоде!');
        } else {
            const dealtCards = deck.getCards(5);
            setCards(dealtCards);
            setCardCount(deck.cards.length);
            const pokerHand = new PokerHand(dealtCards);
            const outcome = pokerHand.getOutcome();
            setHandOutcome(outcome);
        }
    };

    useEffect(() => {
        setCardCount(deck.cards.length);
    }, [deck]);

    return (
        <>

            {cards.length > 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <span key={index} className={`card rank-${card.rank} ${card.suit}`}>
                            <span className="rank">{card.rank}</span>
                            <span className="suit"></span>
                        </span>
                    ))}
                </div>
            )}
            <div className="count">Колода карт: {cardCount}</div>
            {handOutcome && <div className="result">Результат: {handOutcome}</div>}
            <button onClick={handleDealCards}>Раздать карты</button>
        </>
    );
};

export default App;
