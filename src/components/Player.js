import React from 'react';


import PlayerImage from '../assets/DinoSprites - doux.png';

import styles from '../styles/player.module.css';

const Player = () => {


    document.addEventListener('keydown', () => {
        
    });


    return (
        <div>
            <div className={styles.outerContainer}>
                <img 
                    src={PlayerImage}
                    className={styles.playerImage}></img>
            </div>
        </div>
    )

};

export default Player;