
export default function makeEnemy(enemyCount, enemyLevel) {

    const STARTING_X_VALS = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    const STARTING_Y_VALS = [0 ,50, 100, 150, 200, 250, 300, 350, 400, 450, 500];

    let xPos = 0;
    let yPos = 0;
    let randomSide = Math.random();
    let dir = '';

    // choose one of the four sides to spawn with a random X or Y value
    if (randomSide > 0.75) {
        xPos = STARTING_X_VALS[Math.floor(Math.random()*11)];
        yPos = -50;
        dir = "Down";
    } else if (randomSide > 0.5) {
        xPos = STARTING_X_VALS[Math.floor(Math.random()*11)];
        yPos = 500;
        dir = "Up";
    } else if (randomSide > 0.25) {
        xPos = -50;
        yPos = STARTING_Y_VALS[Math.floor(Math.random()*11)];
        dir = "Right";
    } else {
        xPos = 500;
        yPos = STARTING_Y_VALS[Math.floor(Math.random()*11)];
        dir = "Left";
    }

    const newEnemy = {
        id: enemyCount,
        xPos,
        yPos,
        dir,
        enemyLevel,
    }

    return newEnemy;

};