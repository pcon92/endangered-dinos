import React, { useState, useEffect, useRef } from 'react';

import Enemy from './Enemy';
import Player from './Player';
import Score from './Score';
import StartButton from './StartButton';
import Treasure from './Treasure';

import makeEnemy from '../functions/makeEnemy';
import makeTreasure from '../functions/makeTreasure';
import saveScoreToLocal from '../functions/saveScoreToLocal';

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
        setTreasures([]);

        enemyCount.current = 0;
        treasureCount.current = 0;
        treasuresPickedUp.current = 0;
    }


    // Score
    const [score, setScore] = useState(0);

    const handleSetScore = () => {
        setScore(score => score + 1);
    }

    const [highScore, setHighScore] = useState(
        localStorage.getItem('score')
        ? localStorage.getItem('score')
        : [0]
    );


    // Enemies
    const [enemies, setEnemies] = useState([]);
    const [enemyLevel, setEnemyLevel] = useState(1);
    const enemyCount = useRef(0);

    const handleMakeEnemy = (id) => {

        enemyCount.current = enemyCount.current + 1;

        const ENEMIES_PER_LEVEL = 10;

        // Increase level of enemies after ENEMIES_PER_LEVEL have spawned 
        if (enemyCount.current % ENEMIES_PER_LEVEL === 0 && enemyCount.current!== 0) {
            setEnemyLevel(enemyLevel + 1);
        }

        // Filter out enemies that have passed out of board
        const filteredEnemies =  enemies.filter(enemy => enemy.id !== id);
        const nextEnemy = makeEnemy(enemyCount.current, enemyLevel);
        setEnemies([...filteredEnemies, nextEnemy])

    };

    // Generate Enemies on component creation
    useEffect(() => {
        let generateEnemy;
        if (hasStarted) {
            generateEnemy = setInterval(handleMakeEnemy, 1000);
        }
        return () => {
            clearInterval(generateEnemy)
        };
    }, [enemies]);


    // Treasure
    const [treasures, setTreasures] = useState([]);
    const treasureCount = useRef(0);
    const treasuresPickedUp = useRef(0);

    const handleMakeTreasure = () => {

        treasureCount.current += 1;
        const nextTreasure = makeTreasure(treasureCount.current); 
        setTreasures([...treasures, nextTreasure]);

        // delete treasure after treasure duration has passed in ms
        const filteredTreasures = treasures.slice(0, treasureCount.current);
        let treasureDuration = 2000;
        setTimeout(() => {setTreasures([...filteredTreasures])}, treasureDuration)
    
    };

    useEffect(() => {
        let generateTreasure;
        if (hasStarted) {
            generateTreasure = setInterval(handleMakeTreasure, 10000);
        }
        return () => {
            clearInterval(generateTreasure)
        };
    }, [treasures]);



    
    // Collision
    const [collision, setCollision] = useState(false);

    const handleCollision = () => {
        setCollision(true);
        setHasStarted(false);
        saveScoreToLocal(score);
        setHighScore(localStorage.getItem('score'));
    };



    // Player position
    const [playerPos, setPlayerPos] = useState([200, 200]);

    const handlePlayerPos = ([playerX, playerY]) => {
        setPlayerPos([playerX, playerY]);
    };

    
    // Pickup treasure
    useEffect(() => {
        
        // Remove treasure from state if player picks it up
        for (let treasure in treasures) {
            if (treasures[treasure].xPos === playerPos[0] && treasures[treasure].yPos === playerPos[1]) {
                setTreasures(treasures.filter(currentTreasure => currentTreasure.id !== treasures[treasure].id))
            
                switch (treasures[treasure].type) {
                    case "clock":
                        setEnemyLevel(enemyLevel - 1);
                }
            
                treasuresPickedUp.current += 1;

            }
        }

    }, [playerPos])


    return (
        <div className={styles.wrapper}>
            <Score 
                score={score}
                handleSetScore={handleSetScore}
                hasStarted={hasStarted}
                collision={collision}
                treasuresPickedUp={treasuresPickedUp.current}
                highScore={highScore}/>
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
                            enemyLevel = {enemy.enemyLevel}
                            playerPos={playerPos}
                            handleCollision={handleCollision}
                            handleMakeEnemy={handleMakeEnemy}
                            collision={collision}/>
                    )}
                    <Player
                        playerPos={playerPos}
                        handlePlayerPos={handlePlayerPos} 
                        collision={collision}/>
                    {treasures.map(treasure => 
                        <Treasure
                            key={treasure.id}
                            treasure={treasure}/>)}
                </div>
            </div>
        </div>
    )
   
};

export default GameScreen;