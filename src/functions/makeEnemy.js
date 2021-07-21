
export default function makeEnemy(totalEnemies, enemyLevel) {

    const STARTING_X_VALS = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    const STARTING_Y_VALS = [0 ,50, 100, 150, 200, 250, 300, 350, 400, 450, 500];

    let startingX = 0;
    let startingY = 0;
    let randomSide = Math.random();
    let moveDir = '';

    // choose one of the four sides to spawn with a random X or Y value
    if (randomSide > 0.75) {
        startingX = STARTING_X_VALS[Math.floor(Math.random()*11)];
        startingY = -50;
        moveDir = "Down";
    } else if (randomSide > 0.5) {
        startingX = STARTING_X_VALS[Math.floor(Math.random()*11)];
        startingY = 500;
        moveDir = "Up";
    } else if (randomSide > 0.25) {
        startingX = -50;
        startingY = STARTING_Y_VALS[Math.floor(Math.random()*11)];
        moveDir = "Right";
    } else {
        startingX = 500;
        startingY = STARTING_Y_VALS[Math.floor(Math.random()*11)];
        moveDir = "Left";
    }

    const newEnemy = {
        id: totalEnemies + 1, // keep total count of enemies to allow deletion of previous ones
        xPos: startingX,
        yPos: startingY,
        dir: moveDir,
        level: enemyLevel,
    }

    return newEnemy;

};