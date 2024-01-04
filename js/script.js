
//Imports
import Martian from "./Martian.js";
import Bullet from "./Bullet.js";
import Item from "./Item.js";
import functions from "./functions.js";

/* Elements form DOM */
const ending = document.getElementById('ending')
const scoreContainer = document.getElementById('score')
const startContainer = document.getElementById('start')
const username = document.getElementById('username')

/* variables */
let ctx
let squareWidth = 20
let squareHeight = 20
let canvasWidth = 800
let canvasHeight = 600
let martians = []
let items = []
let avatar
let pointMultiplier = 1
let gameLevel = 1
let itemImage = document.createElement('IMG')
let userScore = 0


//Interval variables
let horizaontalMoving
let verticalMoving
let bulletGameLoop
let gameLoopInterval
let itemsMoving


const board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]


let staticItems = [
    new Item(squareWidth, squareHeight, 8, 25, 'block'),
    new Item(squareWidth, squareHeight, 9, 25, 'block'),
    new Item(squareWidth, squareHeight, 10, 25, 'block'),
    new Item(squareWidth, squareHeight, 8, 26, 'block'),
    new Item(squareWidth, squareHeight, 9, 26, 'block'),
    new Item(squareWidth, squareHeight, 10, 26, 'block'),
    new Item(squareWidth, squareHeight, 18, 25, 'block'),
    new Item(squareWidth, squareHeight, 19, 25, 'block'),
    new Item(squareWidth, squareHeight, 20, 25, 'block'),
    new Item(squareWidth, squareHeight, 18, 26, 'block'),
    new Item(squareWidth, squareHeight, 19, 26, 'block'),
    new Item(squareWidth, squareHeight, 20, 26, 'block'),
    new Item(squareWidth, squareHeight, 29, 25, 'block'),
    new Item(squareWidth, squareHeight, 30, 25, 'block'),
    new Item(squareWidth, squareHeight, 31, 25, 'block'),
    new Item(squareWidth, squareHeight, 29, 26, 'block'),
    new Item(squareWidth, squareHeight, 30, 26, 'block'),
    new Item(squareWidth, squareHeight, 31, 26, 'block')
]




/* FUNCTIONS******************************************************************************************************** */

//Functions about create elements

/**
 * Function to get if a item will have or wont an item, taking differents posibilties depending of difficulty level
 * 
 * @returns bool
 */
const getItemForMartian = () => {
    let itemPosibility
    switch (gameLevel) {
        case 1:
            itemPosibility = [false, false, false, false, true, false, false, false, false]
            break
        case 2:
            itemPosibility = [false, false, false, false, true, false, false, false, false, false]
            break
        case 3:
            itemPosibility = [false, false, false, false, true, false, false, false, false, false]
            break
        case 4:
            itemPosibility = [false, false, false, false, true, false, false, false, false, false, false]
            break
        case 5:
            itemPosibility = [false, false, false, false, true, false, false, false, false, false, false]
            break
        case 6:
            itemPosibility = [false, false, false, false, true, false, false, false, false, false, false, false]
            break
    }

    return itemPosibility[Math.floor(Math.random() * itemPosibility.length)]
}
/**
 * Function to create differents martian layout dependign of gamelevel
 */
const createMartians = () => {
    let posX = 1
    for (let i = 0; i < 20; i++) {
        martians.push(new Martian(70, 125, posX, 3, 1, 70, 100, getItemForMartian()))
        posX += 2
    }
    if (gameLevel == 2 || gameLevel == 3 || gameLevel == 4 || gameLevel == 5 || gameLevel == 6) {
        posX = 1
        for (let i = 0; i < 20; i++) {
            martians.push(new Martian(70, 125, posX, 4, 2, 180, 100, getItemForMartian()))
            posX += 2
        }
    }
    if (gameLevel == 4 || gameLevel == 5 || gameLevel == 6) {
        posX = 1
        for (let i = 0; i < 20; i++) {
            martians.push(new Martian(70, 125, posX, 5, 1, 380, 100, getItemForMartian()))
            posX += 2
        }
    }
    if (gameLevel == 6) {
        posX = 1
        for (let i = 0; i < 20; i++) {
            martians.push(new Martian(70, 125, posX, 6, 2, 70, 250, getItemForMartian()))
            posX += 2
        }
    }

}


// Funtions about draw elemenets
/**
 * Function to draw powerUps Item object which martian have as attribute
 * 
 * @param {Item} item 
 */
const drawPowerUp = (item) => {
    ctx.drawImage(itemImage, item._posX * squareWidth, item._posY * squareHeight, item._width, item._height);
    itemImage.src = './assets/images/items/' + item._type + '.jpg';
}
/**
 * Function to draw canvas background by iterate two fro loops
 */
const drawCanvas = () => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == 0) {
                ctx.fillRect(j * squareWidth, i * squareHeight, squareWidth, squareHeight)
                ctx.fillStyle = 'black'
            }
        }
    }
}
/**
 * Function to draw as many martian as martians array have
 * 
 */
const drawMatians = () => {
    martians.forEach(martian => {
        martian.drawOnBoard(ctx)
    });
}
/**
 * Function to dreae as many staticitems as staticitems array have
 */
const drawstaticItems = () => {
    staticItems.forEach(block => {
        block.draw(ctx)
    });
}
/**
 * Functions to draw as many items as items array have
 */
const drawItems = () => {
    items.forEach(item => {
        drawPowerUp(item)
    });
}
/**
 * Function to draw all information on canvas header by checking different values
 */
const drawHeader = () => {
    //Hearth images****************************
    let liveImage = document.createElement('IMG')
    let pointsImage = document.createElement('IMG')
    let fieldImage = document.createElement('IMG')
    liveImage.src = '../assets/images/life_' + avatar._life + '.png'
    ctx.drawImage(liveImage, 40, 7, 100, 25)
    ctx.font = 'bold italic 15px arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText('Life', 20, 25);
    //Final hearth iamges *********************
    //Score************************************
    if (avatar._doublePoints)
        pointMultiplier = 2
    else
        pointMultiplier = 1
    userScore = '0000' + (Martian.enemiesDown * 50 * pointMultiplier)
    ctx.fillText('Score: ' + userScore.slice(-5), 300, 25);
    //Final score *****************************
    //items************************************
    ctx.fillText('Items: ', 450, 25);
    if (avatar._doublePoints) {
        pointsImage.src = '../assets/images/items/doublePoints.jpg'
        ctx.drawImage(pointsImage, 480, 8, 20, 20)
    }
    if (avatar._field) {
        fieldImage.src = '../assets/images/items/field.jpg'
        ctx.drawImage(fieldImage, 500, 8, 20, 20)
    }
    //Final item******************************
    //draw elevel
    ctx.fillText('Level: '+ gameLevel,600,25)
}

//Funtions about move elements***************************************************************************************

/**
 * Function to move all Martian in martians array for horizontal way
 */
const moveMartiansX = () => {
    martians.forEach(martian => {
        martian.moveHorizontal()
    });
}
/**
 * Function to move all Martian in martians array for vertical way
 */
const moveMartiansY = () => {
    martians.forEach(martian => {
        martian.moveVertical()
    });
}
/**
 * Function to move all Item objects in items array
 */
const moveItems = () => {
    items.forEach(item => {
        item.move()
    });
}
/**
 * Function to move avatar object by pressing particulary keyword 
 * 
 * @param {event} event 
 */
const moveByPressKey = (event) => {
    if (event.key == 'ArrowRight' && avatar._posX < board[0].length - 1) {
        avatar._posX++
    }
    if (event.key == 'ArrowLeft' && avatar._posX > 0) {
        avatar._posX--
    }

}
//Functions about end game*************************************************************************************
/**
 * Function to check if game is ended for win or lose
 * 
 * @returns bool
 */
const checkEnd = () => {
    if (martians.length == 0) {
        return true
    }
    if (avatar._life == 0) {
        endGame('lose')
    }
    if(Martian.enemiesDown == 300){
        endGame('win')
    }
    return false
}
/**
 * Functino to show ending effect by adding classList for ending element
 */
const endingShow = (condition) => {
    functions.storageScore(username.value,userScore)
    functions.showScore(scoreContainer)
    let image = ending.children[0].children[0]
    if(condition == 'win'){
        image.src = './assets/images/game_over.jpg'
    }
    if(condition == 'lose'){
        image.src = './assets/images/winner.jpg'
    }
    ending.classList.add('showEnding')
}
/**
 * Funciton to create a ending show by calling other functions
 */
const endGame = (condition) => {
    setValues()
    endingShow(condition)
}

//Functions about shoot ****************************************************************************************************
/**
 * Function to add a Bullet objecto in to avatar._bullets arraay
 */
const shoot = () => {
    avatar.bullets.push(new Bullet(10, 10, avatar._posX, avatar._posY, 'white'))
}

//Functions about remove elements
/**
 * Function to remove all martina on a shoot target
 */
const removeTargets = () => {
    martians = martians.filter((element) => element._life != 0)
}
/**
 * Function to remove a Item object as block when it is hit
 * 
 * @param {Item} block 
 */
const removestaticItems = (block) => {
    staticItems = staticItems.filter((element) => element != block)
}
/**
 * Function to remove a Bullet object form Martian._bullets array 
 * 
 * @param {Bullet} bullet 
 * @param {Martian} enemy 
 */
const removeBullet = (bullet, enemy = false) => {
    if (enemy)
        enemy._bullets = enemy._bullets.filter((element) => element != bullet)
    else
        avatar._bullets = avatar._bullets.filter((element) => element != bullet)

}

//Final about remove elements

//Functions about if elements exist
/**
 * Function to get a posibilty of random shoot depending of the gamelevel
 * 
 * @returns bool
 */
const isRandomShoot = () => {
    let shootPosibility
    switch (gameLevel) {
        case 1:
            shootPosibility = [false, false, false, false, true, false, false, false, false]
            break
        case 2:
            shootPosibility = [false, false, false, false, true, false, false, false, false]
            break
        case 3:
            shootPosibility = [true, false, false, false, true, false, false, false, false]
            break
        case 4:
            shootPosibility = [true, false, false, false, true, false, false, false, false]
            break
        case 5:
            shootPosibility = [false, false, false, false, true, false, false, false, false, false, true, false]
            break
        case 6:
            shootPosibility = [false, false, false, false, true, false, false, false, false, false, true, false]
            break
    }

    return shootPosibility[Math.floor(Math.random() * shootPosibility.length)]

}
/**
 * Function to get if a bullet is on avatar 
 * 
 * @param {Bullet} bullet 
 * @returns bool
 */
const bulletIsOnAvatar = (bullet) => {
    if (bullet._posX == avatar._posX && bullet._posY == avatar._posY)
        return avatar
}

//Final about exists

//Function about check elements*************************************************************************************************************

const countEnemy = (enemyDown) => {
    if(enemyDown != avatar)
    Martian.enemiesDown++
}

/**
 * Funcition to check if a bullet is on any object to proccess action by calling other functions
 * 
 * @param {Bullet} bullet 
 * @param {Martian} enemy 
 */
const checkShoot = (bullet, enemy = false) => {
    let enemyDown
    let dropWay
    //COnditiional to check if method is being callied by enemy bullet
    if (enemy) {
        dropWay = 'down'
        enemyDown = bulletIsOnAvatar(bullet)
    }
    else {//Conditinal to check if method is being called by avatar player
        dropWay = 'up'
        enemyDown = bullet.bulletIsOnMartian(martians)
    }
    //Move and draw bullet
    bullet.move(dropWay)
    bullet.draw(ctx)

    //Checching if enemyDown wxist and process
    if (enemyDown) {
        if (enemyDown._item) {
            enemyDown.dropItem(items)
        }
        countEnemy(enemyDown)
        if (!enemyDown._field) {
            enemyDown.decreaseLife()        }
        removeTargets()
        removeBullet(bullet, enemy)
    }
    let blockDown = bullet.bulletIsOnBlock(staticItems)
    if (blockDown) {
        removestaticItems(blockDown)
        removeBullet(bullet, enemy)
    }
}
/**
 * Funciton to check if an Item is on avatar by iterating items array 
 */
const checkItems = () => {
    items.forEach(item => {
        if (item.isOnAvatar(avatar, items)) {
            avatar.addPowerUp(item)
            Item.destroy()
        }
    });
}
//Final about check items

/**
 * Function to get a random enemy from martians array
 * 
 * @returns boll
 */
const randomEnemy = () => {
    let randomIndex = Math.floor(Math.random() * martians.length)
    return martians[randomIndex]
}
/**
 * Funcition to create a bullet loop game by calling other funtion to procces a Bullet object actions by calling other functions
 */
const bulletLoop = () => {
    if (isRandomShoot()) {
        let enemy = randomEnemy()
        enemy.shoot()
    }
    avatar._bullets.forEach(bullet => {
        checkShoot(bullet)
    });
    martians.forEach(martian => {
        martian._bullets.forEach(bullet => {
            checkShoot(bullet, martian)
        });
    });
}
//Final about create elements

//Functions about canvas

/**
 * Function to clear all elements on canvas 
 */
const clearCanvas = () => {
    canvas.width = canvasWidth
    canvas.height = canvasHeight
}
/**
 * Funciton to handle differents function about Item objects
 */
const handleItems = () => {
    drawItems()
    checkItems()
}
/**
 * Function to handle differents actions about canvas element
 */
const handleCanvas = () => {
    clearCanvas()
    drawCanvas()
}
/**
 * Function to stop all setInterva() functions
 */
const setValues = () => {
    if (horizaontalMoving) clearInterval(horizaontalMoving);
    if (verticalMoving) clearInterval(verticalMoving);
    if (bulletGameLoop) clearInterval(bulletGameLoop);
    if (itemsMoving) clearInterval(itemsMoving);
    if (gameLoopInterval) clearInterval(gameLoopInterval);

}
/**
 * Function to create a game loop by calling differents function each time
 */
const gameLoop = () => {
    handleCanvas()
    drawMatians()
    handleItems()
    drawstaticItems()
    drawHeader()
    avatar.drawOnBoard(ctx)
    if (checkEnd()) {
        setValues()
        gameLevel++
        start()
    }

}
/**
 * Function to start the game by calling all setInterval() functions
 */
const start = () => {
    const canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    avatar = new Martian(100, 150, 10, 29, 6, 600, 490)
    createMartians()
    horizaontalMoving = setInterval(moveMartiansX, 1000)
    verticalMoving = setInterval(moveMartiansY, 5000)
    bulletGameLoop = setInterval(bulletLoop, 70)
    itemsMoving = setInterval(moveItems, 500)
    gameLoopInterval = setInterval(gameLoop, 1000 / 60)
}

//Events
//Event when page is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     start()
// })

document.addEventListener('keydown', moveByPressKey)

document.addEventListener('keydown', (event) => {
    if (event.key == 's') {
        shoot()
    }
})

//Event when player press a button from ending show

ending.addEventListener('click', (event) => {
    if (event.target.id == 'playAgain')
        location.reload()
})

//Event when player press a button from start container

startContainer.addEventListener('click', (event) => {
    if (event.target.id == 'start-button'){
        startContainer.classList.add('hideStart')
        start()
    }
})




