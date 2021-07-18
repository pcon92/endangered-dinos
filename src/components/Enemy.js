import React, { useState, useEffect } from 'react';

import styles from '../styles/enemy.module.css';

const Enemy = () => {

    const [enemyPos, setEnemyPos] = useState([0, 0]);

    const generateStartingPoint = () => {
        const startingXVals = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
        const startingYVals = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
         
        const startingX = startingXVals[Math.floor(Math.random() * 11)];
        const startingY = startingYVals[Math.floor(Math.random() * 11)];

        const MOVE_VAL = 50;

        console.log(startingX, startingY);

        setEnemyPos([startingX, startingY]);
    };

    useEffect(() => {

        const oldX = enemyPos[0];
        const oldY = enemyPos[1];
        const MOVE_VAL = 50;

        const ENEMY = document.getElementById("enemy"); 
    
        ENEMY.style.transform = `translateX(${oldX + MOVE_VAL}px) translateY(${oldY}px)`;

    });

    return (
        <div>
            <div
                id = "enemy" 
                className={styles.outerContainer}>

            </div>
        </div>
    )

};

export default Enemy;