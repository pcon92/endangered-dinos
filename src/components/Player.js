import React, { useState, useEffect } from 'react';


import PlayerImage from '../assets/DinoSprites - doux.png';

import styles from '../styles/player.module.css';

const Player = ( { playerPos, handlePlayerPos }) => {

    const [moveTo, setmoveTo] = useState([playerPos[0], playerPos[1]]);


    useEffect(() => {

        const handleKeyPress = (e) => {

            const MOVE_VAL = 50;

            if (e.key === 'ArrowRight' && moveTo[0] < 500) {
                setmoveTo([moveTo[0] + MOVE_VAL, moveTo[1]]);
                handlePlayerPos([moveTo[0] + MOVE_VAL, moveTo[1]]);
            }
            if (e.key === 'ArrowLeft' && moveTo[0] > 0) {
                setmoveTo([moveTo[0] - MOVE_VAL, moveTo[1]]);
                handlePlayerPos([moveTo[0] - MOVE_VAL, moveTo[1]]);
            }
            if (e.key === 'ArrowUp' && moveTo[1] > 0) {
                setmoveTo([moveTo[0], moveTo[1] - MOVE_VAL]);
                handlePlayerPos([moveTo[0], moveTo[1] - MOVE_VAL]);
            }
            if (e.key === 'ArrowDown' && moveTo[1] < 500) {
                setmoveTo([moveTo[0], moveTo[1] + MOVE_VAL]);
                handlePlayerPos([moveTo[0], moveTo[1] + MOVE_VAL]);
            }

        }

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
        
    }, [moveTo]);


    return (
        <div>
            <div
                id="player" 
                className={styles.outerContainer}
                style={{ position: "absolute", left: `${moveTo[0]}px`, top: `${moveTo[1]}px` }}>
                <img 
                    src={PlayerImage}
                    className={styles.playerImage}
                    alt="player character"
                    ></img>
            </div>
        </div>
    )

};

export default Player;