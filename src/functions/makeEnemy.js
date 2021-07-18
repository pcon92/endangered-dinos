export default function makeEnemy(totalEnemies) {

    const STARTING_X_VALS = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    const STARTING_Y_VALS = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
        
    const BORDER_OFFSET = 20; // in pixels
    const MOVE_SPEED = 1; // in seconds

    let startingX = 0;
    let startingY = 0;
    let randomPos = Math.random();
    let moveDir = '';

    if (randomPos > 0.75) {
        startingX = STARTING_X_VALS[Math.floor(Math.random()*10)];
        startingY = -20;
        moveDir = "Down";
    } else if (randomPos > 0.5) {
        startingX = STARTING_X_VALS[Math.floor(Math.random()*10)];
        startingY = 550;
        moveDir = "Up";
    } else if (randomPos > 0.25) {
        startingX = -20;
        startingY = STARTING_Y_VALS[Math.floor(Math.random()*10)];
        moveDir = "Right";
    } else {
        startingX = 550;
        startingY = STARTING_Y_VALS[Math.floor(Math.random()*10)];
        moveDir = "Left";
    }

    const newEnemy = {
        id: totalEnemies + 1,
        xPos: startingX + BORDER_OFFSET,
        yPos: startingY + BORDER_OFFSET,
        dir: moveDir,
        speed: MOVE_SPEED
    }

    return newEnemy;


};