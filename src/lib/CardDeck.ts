import Card from './Card';

class CardDeck {
    public cards: Card[];

    constructor() {
        this.cards = [];

        const suits = ['diams', 'hearts', 'clubs', 'spades', ];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new Card (rank, suit));

            }
        }
    }
    getCard(): Card {
        return this.cards.splice(Math.floor(Math.random() * this.cards.length), 1)[0];
    }
    getCards(howMany: number): Card [] {
        const selectedCards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            selectedCards.push(this.getCard());
        }
        return selectedCards;
    }

}



export default CardDeck;