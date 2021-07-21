import React, { useState, useEffect } from 'react';

import Score from './Score';
import StartButton from './StartButton';
import Player from './Player';
import Enemy from './Enemy';

import makeEnemy from '../functions/makeEnemy';

import styles from '../styles/gameScreen.module.css';

const GameScreen = () => {


    // Game started
    const [hasStarted, setHasStarted] = useState(false);

    const handleHasStarted = () => {
        setHasStarted(true);
        setCollision(false);
        setScore(0);
        setEnemies([]);
        setPlayerPos([200, 200]);
        setEnemyLevel(1);
        setTotalEnemies(0);
    }


    // Score
    const [score, setScore] = useState(0);

    const handleSetScore = () => {
        setScore(score => score + 1);
    }


    // Enemies
    const [totalEnemies, setTotalEnemies] = useState(0);
    const [enemies, setEnemies] = useState([]);
    const [enemyLevel, setEnemyLevel] = useState(1);


    const handleMakeEnemy = (id) => {

        setTotalEnemies(totalEnemies + 1); // keep track of total enemies generated

        const MAX_ENEMIES = 10;
        const ENEMIES_PER_LEVEL = 10;

        // Increase level of enemies after ENEMIES_PER_LEVEL have spawned 
        if (totalEnemies % ENEMIES_PER_LEVEL === 0 && totalEnemies!== 0) {
            setEnemyLevel(enemyLevel + 1);
        }


        const filteredEnemies =  enemies.filter(enemy => enemy.id !== id);
        setEnemies([...filteredEnemies, makeEnemy(totalEnemies, enemyLevel)])


    };


    // Collision
    const [collision, setCollision] = useState(false);

    const handleCollision = () => {
        setCollision(true);
        setHasStarted(false);
    };


    // Player position
    const [playerPos, setPlayerPos] = useState([200, 200]);

    const handlePlayerPos = ([playerX, playerY]) => {
        setPlayerPos([playerX, playerY]);
    };


    // Generate Enemies on component creation
    useEffect(() => {
        let generateEnemy;
        if (hasStarted) {
            generateEnemy = setInterval(handleMakeEnemy, 1000);
        }
        return () => clearInterval(generateEnemy);
    }, [enemies]);

    return (
        <div className={styles.wrapper}>
            <Score 
                score={score}
                handleSetScore={handleSetScore}
                hasStarted={hasStarted}
                collision={collision}/>
                {hasStarted ? null 
                    : <StartButton
                    handleHasStarted={handleHasStarted}/>}
            <div 
                className={hasStarted 
                        ? `${styles.outerContainer}`
                        : `${styles.outerContainer} ${styles.notStarted}`}>
                <div className={styles.innerGrid}>
                    {enemies.map(enemy => 
                        <Enemy 
                            key={enemy.id}
                            id={enemy.id}
                            xPos = {enemy.xPos}
                            yPos = {enemy.yPos}
                            dir = {enemy.dir}
                            level = {enemy.level}
                            playerPos={playerPos}
                            handleCollision={handleCollision}
                            handleMakeEnemy={handleMakeEnemy}
                            collision={collision}/>
                    )}
                    <Player
                        playerPos={playerPos}
                        handlePlayerPos={handlePlayerPos} 
                        collision={collision}/>
                </div>
            </div>
        </div>
    )
   
};

export default GameScreen;