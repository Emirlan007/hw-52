import Card from "./Card.ts";

class PokerHand {
    cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    getOutcome(): string {
        if (this.isRoyalFlush()) {
            return 'Роял-флеш';
        }
        if (this.isStraightFlush()) {
            return 'Стрит-флеш';
        }
        if (this.isFourOfAKind()) {
            return 'Каре';
        }
        if (this.isFullHouse()) {
            return 'Фулл-хаус';
        }
        if (this.isFlush()) {
            return 'Флеш';
        }
        if (this.isStraight()) {
            return 'Стрит';
        }
        if (this.isThreeOfAKind()) {
            return 'Тройка';
        }
        if (this.isTwoPairs()) {
            return 'Две пары';
        }
        if (this.isOnePair()) {
            return 'Одна пара';
        }
        return 'Старшая карта';
    }

    private isRoyalFlush(): boolean {
        const suits = this.cards.map(card => card.suit);
        const ranks = this.cards.map(card => card.rank);
        const royalRanks = ['10', 'J', 'Q', 'K', 'A'];

        return suits.every(suit => suit === suits[0]) && royalRanks.every(rank => ranks.includes(rank));
    }

    private isStraightFlush(): boolean {
        const suits = this.cards.map(card => card.suit);
        const ranks = this.cards.map(card => card.rank);
        const rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (suits.every(suit => suit === suits[0])) {
            const sortedRanks = ranks.sort((a, b) => rankOrder.indexOf(a) - rankOrder.indexOf(b));

            for (let i = 1; i < sortedRanks.length; i++) {
                if (rankOrder.indexOf(sortedRanks[i]) !== rankOrder.indexOf(sortedRanks[i - 1]) + 1) {
                    return false;
                }
            }

            if (sortedRanks.includes('A') && sortedRanks.includes('2') && sortedRanks.includes('3')) {
                return true;
            }

            return true;
        }

        return false;
    }

    private isFourOfAKind(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const rankCounts = this.getRankCounts(ranks);
        return Object.values(rankCounts).includes(4);
    }

    private isFullHouse(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const rankCounts = this.getRankCounts(ranks);
        const values = Object.values(rankCounts);
        return values.includes(3) && values.includes(2);
    }

    private isFlush(): boolean {
        const suits = this.cards.map(card => card.suit);
        return suits.every(suit => suit === suits[0]);
    }

    private isStraight(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const rankOrder = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const sortedRanks = ranks.sort((a, b) => rankOrder.indexOf(a) - rankOrder.indexOf(b));

        for (let i = 1; i < sortedRanks.length; i++) {
            if (rankOrder.indexOf(sortedRanks[i]) !== rankOrder.indexOf(sortedRanks[i - 1]) + 1) {
                return false;
            }
        }

        return true;
    }

    private isThreeOfAKind(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const rankCounts = this.getRankCounts(ranks);
        return Object.values(rankCounts).includes(3);
    }

    private isTwoPairs(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const rankCounts = this.getRankCounts(ranks);
        const values = Object.values(rankCounts);
        return values.filter(value => value === 2).length === 2;
    }

    private isOnePair(): boolean {
        const ranks = this.cards.map(card => card.rank);
        const rankCounts = this.getRankCounts(ranks);
        return Object.values(rankCounts).includes(2);
    }

    private getRankCounts(ranks: string[]): Record<string, number> {
        return ranks.reduce((counts, rank) => {
            counts[rank] = (counts[rank] || 0) + 1;
            return counts;
        }, {} as Record<string, number>);
    }
}

export default PokerHand;
