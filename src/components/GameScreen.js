import React from 'react';


import Player from './Player';
import Enemy from './Enemy';

import styles from '../styles/gameScreen.module.css';

const GameScreen = () => {

    return (
        <div>
            <div className={styles.outerContainer}>
                <Player />
                <Enemy />
            </div>
        </div>
    )

};

export default GameScreen;