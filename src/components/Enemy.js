import React, { useState, useEffect } from 'react';

import styles from '../styles/enemy.module.css';

const Enemy = ( { id, xPos, yPos, dir, playerPos, handleCollision }) => {

    const [enemyPos, setEnemyPos] = useState([xPos, yPos]);

    const moveIntoGrid = () => {
        
        let MOVE_VAL = 570; // px dist by seconds

        if (dir === "Right") {
            setEnemyPos([xPos += 50, yPos])
        } if (dir === "Left") {
            setEnemyPos([xPos -= 50, yPos])
        } if (dir === "Up") {
            setEnemyPos([xPos, yPos -= 50])
        } if (dir === "Down") {
            setEnemyPos([xPos, yPos += 50])
        }

    };

    useEffect(() => {
        const moving = setInterval(moveIntoGrid, 1000);
        return () => clearInterval(moving, 10000);
    }, []);

    useEffect(() => {
        if (playerPos[0] === enemyPos[0] && playerPos[1] === enemyPos[1]) {
            handleCollision();
        }
    }, [enemyPos])

    return (
        <div
            id = {id} 
            className={styles.outerContainer}
            style={{position:'absolute', left: `${enemyPos[0]}px`, top: `${enemyPos[1]}px`}}>
        </div>
    )

};

export default Enemy;