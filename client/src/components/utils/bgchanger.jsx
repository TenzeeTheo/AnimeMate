import React, { useState } from 'react';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

function bgchanger() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div >
            <button className="toggle" onClick={toggleDarkMode}>
                <div className="icon icon--moon">
                    <img src={moon} alt="Moon Icon" />
                </div>

                <div className="icon icon--sun">
                    <img src={sun} alt="Sun Icon" />
                </div>
            </button>
        </div>
    );
}

export default bgchanger;
