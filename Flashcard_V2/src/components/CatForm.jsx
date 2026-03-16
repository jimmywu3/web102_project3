import { useState } from 'react';
import catsData from './cats.json';
import "./CatForm.css"

const CatForm = ({ index, reset }) => {
    const [inputValue, setInputValue] = useState('');
    const [borderColor, setBorderColor] = useState('');
    const [prevReset, setPrevReset] = useState(reset);
    const currentCatName = catsData.cats[index].name.toLowerCase();

    if (reset !== prevReset) {
        setInputValue('');
        setBorderColor('');
        setPrevReset(reset);
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(inputValue.toLowerCase() == currentCatName){
            setBorderColor('green');
        }else{
            setBorderColor('red');
        }
    }

    return (
        <form onSubmit={submitForm}>
            <input 
                type="text" 
                placeholder="Cat Name..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={{ borderColor, color: borderColor, borderWidth: '3px' }}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CatForm;
