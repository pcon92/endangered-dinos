import React from 'react';


import ClockImage from '../assets/clock.png';

import styles from '../styles/treasure.module.css';

const Treasure = ( { treasure } ) => {


    return (
        <div className={styles.outerContainer}
            style={{position:'absolute', left: `${treasure.xPos}px`, top: `${treasure.yPos}px`}}>
                <img src={ClockImage}
                className={styles.treasureImage}></img>
        </div>
    )

};

export default Treasure;