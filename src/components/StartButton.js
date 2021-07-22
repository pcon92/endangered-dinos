import React, { useEffect } from 'react';


import styles from '../styles/startButton.module.css';

const StartButton = ( { handleHasStarted }) => {

    // allow user to start game using enter
    const handleKeyPress = (e) => {
        if (e.key === 'Enter')
            handleHasStarted();
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    });


    return (
        <div 
            onClick={handleHasStarted}
            className={styles.outerContainer}>
            Start
        </div>
    )
   
};

export default StartButton;
