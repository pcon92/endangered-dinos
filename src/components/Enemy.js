import React, { useState, useEffect } from 'react';

import styles from '../styles/enemy.module.css';

const Enemy = ( { id, xPos, yPos, dir, speed }) => {

    const [enemyPos, setEnemyPos] = useState([xPos, yPos]);

    const moveIntoGrid = () => {
        
        const ENEMY = document.getElementById(id); 

        ENEMY.style.opacity = 1;

        ENEMY.style.transition = "transform 1s, opacity 1s";


        const MOVE_VAL = 570; // px dist by seconds


        setInterval(() => {        
        if (dir === "Right") {
            ENEMY.style.transform = `translateX(${MOVE_VAL}px)`;
            const newPos = [xPos + MOVE_VAL, yPos];
            setEnemyPos(newPos);
        } if (dir === "Left") {
            ENEMY.style.transform = `translateX(${-MOVE_VAL}px)`;
            const newPos = [xPos - MOVE_VAL, yPos];
            setEnemyPos(newPos);
        } if (dir === "Up") {
            ENEMY.style.transform = `translateY(${-MOVE_VAL}px)`;
            const newPos = [xPos, yPos - MOVE_VAL];
            setEnemyPos(newPos);
        } if (dir === "Down") {
            ENEMY.style.transform = `translateY(${MOVE_VAL}px)`;
            const newPos = [xPos, yPos + MOVE_VAL];
            setEnemyPos(newPos);
        }
        }, 1000);

    };

    useEffect(() => {
        const startMoving = setInterval(moveIntoGrid, 3000);
        return () => clearInterval(startMoving, 1000);
    }, [])

    return (
        <div
            id = {id} 
            className={styles.outerContainer}
            style={{position:'absolute', left: xPos, top: `${yPos}px`}}>
        </div>
    )

};

export default Enemy;