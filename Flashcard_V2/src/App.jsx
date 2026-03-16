import './App.css';
import { useState } from 'react';
import Card from './Card.jsx';

const cardDeck = [
    {
        front: (
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqtsvVCIuq-vQR9Qphfkof-Du3kEAvND0Xg&s"
                alt="Maine Coon cat"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        ),
        back: 'Maine Coon',
    },
    {
        front: (
            <img
                src="https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg?w=3840&q=75&auto=format"
                alt="Siamese cat"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        ),
        back: 'Siamese',
    },
    {
        front: (
            <img
                src="https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/02/fotolia_82719975.webp"
                alt="Bengal cat"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        ),
        back: 'Bengal',
    },
    {
        front: (
            <img
                src="https://i.guim.co.uk/img/media/6bddcc4d11116c1d28a452023ad5523012b2f572/146_619_4372_2623/master/4372.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=40269ac60c3c5f0d6ee79bef4276746f"
                alt="Sphynx cat"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        ),
        back: 'Sphynx',
    },
    {
        front: (
            <img
                src="data:image/jpeg;base64,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"
                alt="Ragdoll cat"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        ),
        back: 'Ragdoll',
    },
];

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prev) => {
            if (cardDeck.length <= 1) return prev;
            let next = prev;
            while (next === prev) {
                next = Math.floor(Math.random() * cardDeck.length);
            }
            return next;
        });
    };

    const currentCard = cardDeck[currentIndex];

    return (
        <div className="base">
            <div className="nav">
                <div className="left">
                    <h1>Cat Breed Flashcards</h1>
                    <p>
                        This slide deck will showcase cat breeds I like. Front
                        of the card is a picture of the cat, back is the name.
                    </p>
                </div>
                <div className="right">
                    <h2>
                        Slides: {cardDeck.length}
                    </h2>
                </div>
            </div>
            <div className="content">
                <Card
                    key={currentIndex}
                    front={currentCard.front}
                    back={currentCard.back}
                />
                <button className="next" type="button" onClick={nextCard}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;
