import React, { useState, useEffect } from 'react';

import generateRandomColor from '../functions/generateRandomColor';

import styles from '../styles/enemy.module.css';

const Enemy = ( { id, xPos, yPos, dir, enemyLevel,
    playerPos, 
    handleCollision,
    handleMakeEnemy,
    collision }) => {

    const [enemyPos, setEnemyPos] = useState([xPos, yPos]);
    const [color, setColor] = useState('black');

    const moveIntoGrid = () => {

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

        const moving = setInterval(moveIntoGrid, 500 * (1/enemyLevel));

        if (collision) {
            clearInterval(moving);
        }

        return () => clearInterval(moving);

    }, [collision]);

    useEffect(() => {
        if (playerPos[0] === enemyPos[0] && playerPos[1] === enemyPos[1]) {
            handleCollision();
        }
        if (enemyPos[0] < -50 || enemyPos[0] > 550 || enemyPos[1] < -50 || enemyPos[1] > 550) {
            handleMakeEnemy(id);
        }
    }, [enemyPos, playerPos]);

    useEffect(() => {
        setColor(generateRandomColor());
    }, [])

    return (
        <div
            id = {id} 
            className={styles.outerContainer}
            style={{position:'absolute', left: `${enemyPos[0]}px`, top: `${enemyPos[1]}px`,
                backgroundColor: `${color}`}}>
                    {enemyLevel}
        </div>
    )

};

export default Enemy;