const Symbols = {
    diams:'♦',
    hearts:'♥',
    clubs:'♣︎',
    spades:'♠︎'
};

type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A' ;

const Card = ({rank, suit = 'diams'}: {rank: Rank; suit?: keyof typeof Symbols}) => {
    return (
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{Symbols[suit]}</span>
        </span>
    );
};

export default Card;