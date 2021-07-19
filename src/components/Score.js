import React, { useState, useEffect } from 'react';

import styles from '../styles/score.module.css';

const Score = ( { collision } ) => {

    const [score, setScore] = useState(0);

    useEffect(() => {
        const scoring = setInterval(() => setScore(score => score + 100), 10);
        if (collision === true) { 
            clearInterval(scoring)
        };
        return () => clearInterval(scoring);
    }, [collision]);

    return (
        <div className={styles.outerContainer}>
            {score}
        </div>
    )

};

export default Score;