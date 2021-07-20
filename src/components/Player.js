import React, { useState, useEffect } from 'react';


import PlayerImage from '../assets/DinoSprites - doux.png';

import styles from '../styles/player.module.css';

const Player = ( { playerPos, 
    handlePlayerPos,
    collision }) => {

    const [moveTo, setmoveTo] = useState([playerPos[0], playerPos[1]]);

    const [isMoving, setIsMoving] = useState(false);

    // toggle moving to play moving animation
    const toggleMovingAnimation = () => {
        setIsMoving(true)
        setTimeout(() => setIsMoving(false), 1000);
    };


    useEffect(() => {

        const handleKeyPress = (e) => {

            const MOVE_VAL = 50;

            toggleMovingAnimation(); // toggle moving to play moving animation

            if (e.key === 'ArrowRight' && moveTo[0] < 450) {
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
            if (e.key === 'ArrowDown' && moveTo[1] < 450) {
                setmoveTo([moveTo[0], moveTo[1] + MOVE_VAL]);
                handlePlayerPos([moveTo[0], moveTo[1] + MOVE_VAL]);
            }

        }

        window.addEventListener('keydown', handleKeyPress);

        if (collision) {
            window.removeEventListener('keydown', handleKeyPress);
        }

        return () => window.removeEventListener('keydown', handleKeyPress);
        
    }, [moveTo, collision]);


    return (
        <div>
            <div
                id="player" 
                className={styles.outerContainer}
                style={{ position: "absolute", left: `${moveTo[0]}px`, top: `${moveTo[1]}px` }}>
                <img 
                    src={PlayerImage}
                    className={isMoving ? styles.playerImageMoving : styles.playerImageIdle}
                    alt="player character"
                    ></img>
            </div>
        </div>
    )

};

export default Player;