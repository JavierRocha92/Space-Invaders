
//Imports
import Martian from "./Martian.js";
import Bullet from "./Bullet.js";
// import Item from "./Item.js";

/* Elements form DOM */
const ending = document.getElementById('ending')

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
let itemImage = document.createElement('IMG')

class Item {
    constructor(width, height, posX, posY, type) {
        this._width = width
        this._height = height
        this._posX = posX
        this._posY = posY
        this._type = type
    }
    get width() {
        return this._width
    }
    set width(width) {
        this._width = width
    }
    get height() {
        return this._height
    }
    set height(height) {
        this._height = height
    }
    get posX() {
        return this._posX
    }
    set posX(posX) {
        this._posX = posX
    }
    get posY() {
        return this._posY
    }
    set posY(posY) {
        this._posY = posY
    }
    get type() {
        return this._type
    }
    set type(type) {
        this._type = type
    }
    draw(ctx) {
        itemImage.src = './assets/images/items/' + this._type + '.jpg'
        ctx.drawImage(itemImage, this._posX * squareWidth, this._posY * squareHeight, this._width, this._height)
    }

    move() {
        this._posY++
    }
    isOnAvatar(avatar, items) {
        if (this._posX == avatar._posX && this._posY == avatar._posY) {
            items = items.filter((item) => item != this)
            return true
        }
        else
            return false
    }
}

let blocks = [
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
const createMartians = () => {
    let posX = 1
    for (let i = 0; i < 20; i++) {
        martians.push(new Martian(70, 125, posX, 3, 1, 70, 100, getItemForMartian()))
        posX += 2
    }
    if(gameLevel == 2 || gameLevel == 3 || gameLevel == 4 || gameLevel == 5 ||gameLevel == 6){
        posX = 1
        for (let i = 0; i < 20; i++) {
            martians.push(new Martian(70, 125, posX, 4, 2, 180, 100, getItemForMartian()))
            posX += 2
        }
    }
    if(gameLevel == 4 || gameLevel == 5 ||gameLevel == 6){
        posX = 1
        for (let i = 0; i < 20; i++) {
            martians.push(new Martian(70, 125, posX, 5, 1, 380, 100, getItemForMartian()))
            posX += 2
        }
        
    }
    if(gameLevel == 6){
        posX = 1
        for (let i = 0; i < 20; i++) {
            martians.push(new Martian(70, 125, posX, 6, 2, 70, 250, getItemForMartian()))
            posX += 2
        }
    }
 
}


//Funtions about draw elemenets
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
const drawMatians = () => {
    martians.forEach(martian => {
        martian.drawOnBoard(ctx)
    });
}
const drawBlocks = () => {
    blocks.forEach(block => {
        block.draw(ctx)
    });
}

const drawItems = () => {
    console.log(items)
    items.forEach(item => {
        item.draw(ctx)
    });
}

const drawHeader = () => {
    let liveImage = document.createElement('IMG')
    liveImage.src = '../assets/images/life_' + avatar._life + '.png'
    ctx.drawImage(liveImage, 40, 7, 100, 25)
    ctx.font = 'bold italic 15px arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    // Escribir texto en el canvas
    ctx.fillText('Life', 20, 25);
    //Score
    ctx.font = 'bold italic 15px arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    // Escribir texto en el canvas
    let score = '0000' + (Martian.enemiesDown * 50 * pointMultiplier)
    ctx.fillText('Score: ' + score.slice(-5), 500, 25);
}
//Funtions about move elements***************************************************************************************


const moveMartiansX = () => {
    martians.forEach(martian => {
        martian.moveHorizontal()
    });
}
const moveMartiansY = () => {
    martians.forEach(martian => {
        martian.moveVertical()
    });
}
const moveItems = () => {
    items.forEach(item => {
        item.move()
    });
}
const moveByPressKey = (event) => {
    if (event.key == 'ArrowRight' && avatar._posX < board[0].length - 1) {
        avatar._posX++
    }
    if (event.key == 'ArrowLeft' && avatar._posX > 0) {
        avatar._posX--
    }

}
//Functions about end game*************************************************************************************
const checkEnd = () => {
    if (martians.length == 0) {
        return true
    }
    if (avatar._life == 0) {
        endGame()
    }
    return false
}

const endingShow = () => {
    ending.classList.add('showEnding')
}

const endGame = () => {
    setValues()
    endingShow()
}

//Functions about shoot ****************************************************************************************************
const shoot = () => {
    avatar.bullets.push(new Bullet(10, 10, avatar._posX, avatar._posY, 'white'))
}

//Functions about remove elements

const removeTargets = () => {
    martians = martians.filter((element) => element._life != 0)
}

const removeBlocks = (block) => {
    blocks = blocks.filter((element) => element != block)
}

const removeBullet = (bullet, enemy = false) => {
    if (enemy)
        enemy._bullets = enemy._bullets.filter((element) => element != bullet)
    else
        avatar._bullets = avatar._bullets.filter((element) => element != bullet)

}

//Final about remove elements

//Functions about if elements exist

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

const bulletIsOnAvatar = (bullet) => {
    if (bullet._posX == avatar._posX && bullet._posY == avatar._posY)
        return avatar
}

//Final about exists

//Function about check elements*************************************************************************************************************

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
    bullet.move(dropWay)
    bullet.draw(ctx)
    if (enemyDown) {
        if (enemyDown._item) {
            enemyDown.dropItem(items)
        }
        Martian.enemiesDown++
        if (!enemyDown._field) {
            enemyDown._life--
        }
        removeTargets()
        removeBullet(bullet, enemy)
    }
    let blockDown = bullet.bulletIsOnBlock(blocks)
    if (blockDown) {
        removeBlocks(blockDown)
        removeBullet(bullet, enemy)
    }
}

const checkItems = () => {
    items.forEach(item => {
        if (item.isOnAvatar(avatar, items)) {
            avatar.addPowerUp(item)
        }
    });
}
//Final about check items


const randomEnemy = () => {
    let randomIndex = Math.floor(Math.random() * martians.length)
    return martians[randomIndex]
}

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


const clearCanvas = () => {
    canvas.width = canvasWidth
    canvas.height = canvasHeight
}

const handleItems = () => {
    drawItems()
    checkItems()
}

const handleCanvas = () => {
    clearCanvas()
    drawCanvas()
}
const setValues = () => {
    clearInterval(horizaontalMoving)
    clearInterval(verticalMoving)
    clearInterval(bulletGameLoop)
    clearInterval(gameLoopInterval)
    clearInterval(itemsMoving)
}

const gameLoop = () => {
    handleCanvas()
    drawMatians()
    handleItems()
    drawBlocks()
    drawHeader()
    avatar.drawOnBoard(ctx)
    if (checkEnd()) {
        setValues()
        gameLevel++
        start()
    }
    console.log(martians)

}

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
document.addEventListener('DOMContentLoaded', () => {
    start()
})

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



