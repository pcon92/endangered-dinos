import React from 'react';


import styles from '../styles/startButton.module.css';

const StartButton = ( { handleHasStarted }) => {

    return (
        <div 
            onClick={handleHasStarted}
            className={styles.outerContainer}>
            Start
        </div>
    )
   
};

export default StartButton;
