import './App.css';
import { useState } from 'react';
import Card from './Card.jsx';
import catsData from './components/cats.json';
import CatForm from './components/CatForm.jsx';

function App() {
    const cardDeck = catsData.cats.map((cat) => ({
        front: (
            <img
                src={cat.image}
                alt={`${cat.name} cat`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        ),
        back: cat.name,
    }));

    const [currentIndex, setCurrentIndex] = useState(0);
    const [resetForm, setResetForm] = useState(false);

    const nextCard = () => {
        setCurrentIndex((prev) => {
            if (cardDeck.length <= 1) return prev;
            return prev === cardDeck.length - 1 ? 0 : prev + 1;
        });
        setResetForm(!resetForm);
    };

    const prevCard = () => {
        setCurrentIndex((prev) => {
            if (cardDeck.length <= 1) return prev;
            return prev === 0 ? cardDeck.length - 1 : prev - 1;
        });
        setResetForm(!resetForm);
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
                    <h2>Slides: {cardDeck.length}</h2>
                </div>
            </div>
            <div className="content">
                <Card
                    key={currentIndex}
                    front={currentCard.front}
                    back={currentCard.back}
                />
                <CatForm index={currentIndex} reset={resetForm} />
                <div className="nav-button">
                    <button className="back" type="button" onClick={prevCard}>
                        Back
                    </button>
                    <button className="next" type="button" onClick={nextCard}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
