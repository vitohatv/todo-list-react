import { useState } from 'react';
import '../Header/Header.css'

const Header = ({addTask}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(inputValue);
        setInputValue("");
    };
    
    return (
        <div className='header-content'>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter new task:"
                    value={inputValue}
                    className='header-input-task'
                    onChange={handleChange}
                    />
                <button className='header-btn'>Add</button>
            </form>
        </div>
    );
};
export default Header;