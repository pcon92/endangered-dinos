import React, { useState, useEffect } from 'react';


import Player from './Player';
import Enemy from './Enemy';


import makeEnemy from '../functions/makeEnemy';

import styles from '../styles/gameScreen.module.css';

const GameScreen = () => {


    const [totalEnemies, setTotalEnemies] = useState(0);
    const [enemies, setEnemies] = useState([]);

    const handleMakeEnemy = () => {

        setTotalEnemies(totalEnemies + 1);

        if (enemies.length > 1) {
            const filteredEnemies = enemies.filter(enemy => enemy.id !== (totalEnemies-1));
            setEnemies([...filteredEnemies, makeEnemy(totalEnemies)])
        } else {
            setEnemies([...enemies, makeEnemy(totalEnemies)]);
        }

    };


    useEffect(() => {
        const generateEnemy = setInterval(handleMakeEnemy, 3000);
        return () => clearInterval(generateEnemy);
    });

    return (
        <div>
            <div className={styles.outerContainer}>
                {enemies.map(enemy => 
                    <Enemy 
                        id={enemy.id}
                        xPos = {enemy.xPos}
                        yPos = {enemy.yPos}
                        dir = {enemy.dir}
                        speed = {enemy.speed}
                        key={enemy.id}/>
                    )
                }
                <div className={styles.innerGrid}>
                <Player />
                </div>
            </div>
        </div>
    )
   
};

export default GameScreen;