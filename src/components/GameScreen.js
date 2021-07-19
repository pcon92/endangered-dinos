import React, { useState, useEffect } from 'react';

import Score from './Score';
import Player from './Player';
import Enemy from './Enemy';

import makeEnemy from '../functions/makeEnemy';

import styles from '../styles/gameScreen.module.css';

const GameScreen = () => {

    const [totalEnemies, setTotalEnemies] = useState(0);
    const [enemies, setEnemies] = useState([]);

    const [collision, setCollision] = useState(false);

    const handleCollision = () => {
        setCollision(true);
    };

    const handleMakeEnemy = () => {

        setTotalEnemies(totalEnemies + 1); // keep track of total enemies generated

        // delete previous enemy if more than one on board
        if (enemies.length > 4) {
            const filteredEnemies = enemies.filter(enemy => enemy.id !== (totalEnemies-4));
            setEnemies([...filteredEnemies, makeEnemy(totalEnemies)])
        } else {
            setEnemies([...enemies, makeEnemy(totalEnemies)]);
        }

    };


    // Player position
    const [playerPos, setPlayerPos] = useState([200, 200]);

    const handlePlayerPos = ([playerX, playerY]) => {
        setPlayerPos([playerX, playerY]);
    };


    // Generate Enemies on component creation
    useEffect(() => {
        const generateEnemy = setInterval(handleMakeEnemy, 3000);
        return () => clearInterval(generateEnemy);
    });

    return (
        <div>
            <Score 
                collision={collision}/>
            <div className={styles.outerContainer}>
                <div className={styles.innerGrid}>
                {enemies.map(enemy => 
                    <Enemy 
                        key={enemy.id}
                        id={enemy.id}
                        xPos = {enemy.xPos}
                        yPos = {enemy.yPos}
                        dir = {enemy.dir}
                        playerPos={playerPos}
                        handleCollision={handleCollision}/>
                )}
                    <Player
                        playerPos={playerPos}
                        handlePlayerPos={handlePlayerPos} />
                </div>
            </div>
        </div>
    )
   
};

export default GameScreen;
