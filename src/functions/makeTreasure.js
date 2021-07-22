

export default function makeTreasure(treasureCount) {

    const X_VALS = [100, 350];
    const Y_VALS = [100, 350];


    const TYPE_VALS = ["clock"];


    // Generate position and type
    let randomNum = Math.random();

    let xPos = 0;
    let yPos = 0;
    if (randomNum > 0.75) {
        xPos = X_VALS[0];
        yPos = Y_VALS[1];
    } else if (randomNum > 0.5) {
        xPos = X_VALS[1];
        yPos = Y_VALS[1];
    } else if (randomNum > 0.25) {
        xPos = X_VALS[1];
        yPos = Y_VALS[0];
    } else if (randomNum > 0) {
        xPos = X_VALS[0];
        yPos = Y_VALS[0];
    }

    let type="";
    if (randomNum > 0) {
        type=TYPE_VALS[0];
    }


    const nextTreasure = {
        id: treasureCount,
        xPos,
        yPos,
        type,
    }

    return nextTreasure;

};