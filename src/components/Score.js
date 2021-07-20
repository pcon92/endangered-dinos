import React, { useEffect } from 'react';

import styles from '../styles/score.module.css';

const Score = ( { score, collision, handleSetScore, hasStarted } ) => {

    useEffect(() => {
        let scoring = 0;
        if (hasStarted === true) {
            scoring = setInterval(handleSetScore, 10);
        }
        if (collision === true) { 
            clearInterval(scoring)
        };
        return () => clearInterval(scoring);
    }, [collision, hasStarted]);

    return (
        <div className={styles.outerContainer}>
            Score : {score}
            {collision 
            ? <div>
                Game Over! Refresh page to restart
             </div>
            : null}
        </div>
    )

};

export default Score;