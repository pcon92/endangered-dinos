import React, { useState, useEffect } from 'react';


import PlayerImage from '../assets/DinoSprites - doux.png';

import styles from '../styles/player.module.css';

const Player = () => {

    const [playerPos, setPlayerPos] = useState([0, 0]);

    useEffect(() => {

        const PLAYER = document.getElementById("player"); 

        const handleKeyPress = (e) => {

            const oldX = playerPos[0];
            const oldY = playerPos[1];
            const MOVE_VAL = 50;

            if (e.key === 'ArrowRight' && oldX < 220) {
                PLAYER.style.transform = `translateX(${oldX + MOVE_VAL}px) translateY(${oldY}px)`;
                const newPos = [oldX + MOVE_VAL, oldY];
                setPlayerPos(newPos);
            }
            if (e.key === 'ArrowLeft' && oldX > -200) {
                PLAYER.style.transform = `translateX(${oldX - MOVE_VAL}px) translateY(${oldY}px)`;
                const newPos = [oldX - MOVE_VAL, oldY];
                setPlayerPos(newPos);
            }
            if (e.key === 'ArrowUp' && oldY > -200) {
                PLAYER.style.transform = `translateX(${oldX}px) translateY(${oldY - MOVE_VAL}px)`;
                const newPos = [oldX, oldY - MOVE_VAL];
                setPlayerPos(newPos);
            }
            if (e.key === 'ArrowDown' && oldY < 220) {
                PLAYER.style.transform = `translateX(${oldX}px) translateY(${oldY + MOVE_VAL}px)`;
                const newPos = [oldX, oldY + MOVE_VAL];
                setPlayerPos(newPos);
            }


        }

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
        
    }, [playerPos]);


    return (
        <div>
            <div
                id="player" 
                className={styles.outerContainer}>
                <img 
                    src={PlayerImage}
                    className={styles.playerImage}
                    alt="player character"></img>
            </div>
        </div>
    )

};

export default Player;