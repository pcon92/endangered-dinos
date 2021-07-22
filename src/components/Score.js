import React, { useEffect } from 'react';

import styles from '../styles/score.module.css';

const Score = ( { score, collision, handleSetScore, hasStarted, highScore, treasuresPickedUp } ) => {

    useEffect(() => {
        let scoring;
        if (hasStarted) 
            scoring = setInterval(handleSetScore, 100);
        if (collision) 
            clearInterval(scoring);
        return () => clearInterval(scoring);
    }, [collision, hasStarted]);

    return (
        <div className={styles.outerContainer}>
            Score : {score}
            <div className={styles.treasuresPickedUpDiv}>
                Treasures Picked Up: {treasuresPickedUp}
            </div>
            {collision 
            ? 
            <div className={styles.lowerSection}>
                <div>
                    High Score: {highScore}
                </div>
                <div>
                    Game Over! Click the Start Button to play again or press Enter
                </div>
            </div>
            : null}
        </div>
    )

};

export default Score;