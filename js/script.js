/* variables */
let ctx
let squareWidth = 20
let squareHeight = 20
let canvasWidth = 800
let canvasHeight = 600
let martians = []
let avatar
//Images
let pathTilemap = '../assets/images/tilemap.jpg'
let tilemap = document.createElement('IMG')
tilemap.src = pathTilemap
let pathElements = '../assets/images/elements.png'
let elements = document.createElement('IMG')
elements.src = pathElements


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

/* Classes***************************************************************************************************************** */
class Block {
    constructor(width, height, posX, posY) {
        this._width = width
        this._height = height
        this._posX = posX
        this._posY = posY
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
    draw() {
        console.log('entro')
        ctx.drawImage(elements, 64, 0, 32, 32, this._posX * squareWidth, this._posY * squareHeight, this._width, this._height)
    }
}
let blocks = [
    new Block(squareWidth, squareHeight, 8, 25),
    new Block(squareWidth, squareHeight, 9, 25),
    new Block(squareWidth, squareHeight, 10, 25),
    new Block(squareWidth, squareHeight, 8, 26),
    new Block(squareWidth, squareHeight, 9, 26),
    new Block(squareWidth, squareHeight, 10, 26),
    new Block(squareWidth, squareHeight, 18, 25),
    new Block(squareWidth, squareHeight, 19, 25),
    new Block(squareWidth, squareHeight, 20, 25),
    new Block(squareWidth, squareHeight, 18, 26),
    new Block(squareWidth, squareHeight, 19, 26),
    new Block(squareWidth, squareHeight, 20, 26),
    new Block(squareWidth, squareHeight, 29, 25),
    new Block(squareWidth, squareHeight, 30, 25),
    new Block(squareWidth, squareHeight, 31, 25),
    new Block(squareWidth, squareHeight, 29, 26),
    new Block(squareWidth, squareHeight, 30, 26),
    new Block(squareWidth, squareHeight, 31, 26)
]
class Bullet {
    constructor(width, height, posX, posY, color) {
        this._width = width
        this._height = height
        this._posX = posX
        this._posY = posY
        this._color = color
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
    get color() {
        return this._color
    }
    set color(color) {
        this._color = color
    }
    move(way) {
        if(way == 'up'){
            this._posY--
        }
        else{
            this._posY++
        }
    }
    draw() {
        ctx.fillStyle = this._color
        ctx.fillRect((this._posX * squareWidth) + 7, this._posY * squareHeight, 5, 5)
    }
    bulletIsOnMartian() {
        for (const martian of martians) {
            if (this._posX == martian._posX && this._posY == martian._posY) {
                return martian
            }
        }
        return false
    }
    bulletIsOnBlock() {
        for (const block of blocks) {
            if (this._posX == block._posX && this._posY == block._posY) {
                return block
            }
        }
        return false
    }
}

class Martian {
    constructor(width, height, posX, posY, life, frameX, frameY, left = true, right = false, bullets = []) {
        this._width = width
        this._height = height
        this._posX = posX
        this._posY = posY
        this._life = life
        this._frameX = frameX
        this._frameY = frameY
        this._left = left
        this._right = right
        this._bullets = bullets
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
    get life() {
        return this._life
    }
    set life(life) {
        this._life = life
    }
    get frameX() {
        return this._frameX
    }
    set frameX(frameX) {
        this._frameX = frameX
    }
    get frameY() {
        return this._frameY
    }
    set frameY(frameY) {
        this._frameY = frameY
    }
    get left() {
        return this._left
    }
    set left(left) {
        this._left = left
    }
    get right() {
        return this._right
    }
    set right(right) {
        this._right = right
    }
    get bullets() {
        return this._bullets
    }
    set bullets(bullets) {
        this._bullets = bullets
    }
    decreaseLife() {
        this._life--
    }
    drawOnBoard() {
        ctx.drawImage(tilemap, this.frameX, this.frameY, this._width, this._height, this._posX * squareWidth, this._posY * squareHeight, squareWidth, squareHeight)
    }
    moveHorizontal() {
        if (this._left) {
            this._posX--
            this._left = false
        }
        else {
            this._posX++
            this._left = true
        }
    }
    moveVertical() {
        this._posY++
    }
    shoot() {
        this._bullets.push(new Bullet(10, 10, this._posX, this._posY,'yellow'))
    }

}




/* Final classes******************************************************************************************************************** */



// ctx.fillStyle = 'pink'
// ctx.fillRect(466, 100, 200, 200)
// ctx.strokeStyle = 'red'
// ctx.lineWidth = 4
// ctx.strokeRect(466, 100, 200, 200)





/* FUNCTIONS******************************************************************************************************** */

//Functions about create elements

const createMartians = (number) => {
    let posX = 1
    for (let i = 0; i < number; i++) {
        martians.push(new Martian(70, 125, posX, 0, 1, 70, 100))
        posX += 2
    }
}

//Funtions about draw elemenets
const drawBlocks = () => {
    blocks.forEach(block => {
        block.draw()
    });
}
//Funtions about move elements***************************************************************************************

const drawMatians = () => {
    martians.forEach(martian => {
        martian.drawOnBoard()
    });
}

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
const moveByPressKey = (event) => {
    if (event.key == 'ArrowRight' && avatar._posX < board[0].length - 1) {
        avatar._posX++
    }
    if (event.key == 'ArrowLeft' && avatar._posX > 0) {
        avatar._posX--
    }

}

//Functions about shoot ****************************************************************************************************
const shoot = () => {
    avatar.bullets.push(new Bullet(10, 10, avatar._posX, avatar._posY, 'white'))
}

const removeTargets = () => {
    martians = martians.filter((element) => element._life != 0)
    if(avatar._life == 0)//Conditinal to check if avatar life is empty
    endGame()
}

const removeBlocks = (block) => {
    blocks = blocks.filter((element) => element != block)
}

const removeBullet = (bullet,enemy = false) => {
    if(enemy)
    enemy._bullets = enemy._bullets.filter((element) => element != bullet)
    else
    avatar._bullets = avatar._bullets.filter((element) => element != bullet)

}

const bulletIsOnAvatar = (bullet) => {
    if (bullet._posX == avatar._posX && bullet._posY == avatar._posY)
        return avatar
}

const checkShoot = (bullet,enemy = false) => {
    let enemyDown
    //COnditiional to check if method is being callied by enemy bullet
    if(enemy){
        console.log('estoy dentro de la evaluacion del disparo del enemigo')
        bullet.move('down')
        bullet.draw()
        enemyDown = bulletIsOnAvatar(bullet)
    }
    else{//Conditinal to check if method is being called by avatar player
        bullet.move('up')
        bullet.draw()
        enemyDown = bullet.bulletIsOnMartian()
    } 
    if (enemyDown) {
        enemyDown._life--
        removeTargets()
        removeBullet(bullet,enemy)
    }
    let blockDown = bullet.bulletIsOnBlock()
    if (blockDown) {
        removeBlocks(blockDown)
        removeBullet(bullet,enemy)
    }
}

const randomEnemy = () => {
    let randomIndex = Math.floor(Math.random() * martians.length)
    return martians[randomIndex]
}

const isRandomShoot = () => {
    let randomResponses = [false,false,true,false,false]
    let randomIndex = Math.floor(Math.random() * randomResponses.length)
    return randomResponses[randomIndex]

}

const bulletLoop = () => {
    if(isRandomShoot()){
        let enemy = randomEnemy()
        enemy.shoot()
    }
    avatar._bullets.forEach(bullet => {
        checkShoot(bullet)
    });
    martians.forEach(martian => {
        martian._bullets.forEach(bullet => {
            checkShoot(bullet,martian)
        });
    });
}


//Final about create elements



//Functions about canvas

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

const clearCanvas = () => {
    canvas.width = canvasWidth
    canvas.height = canvasHeight
}

const gameLoop = () => {
    clearCanvas()
    drawCanvas()
    drawMatians()
    drawBlocks()
    avatar.drawOnBoard('white')

}

const start = () => {
    const canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    avatar = new Martian(100, 150, 10, 29, 3, 600, 490)
    createMartians(20)
    setInterval(moveMartiansX, 1000)
    setInterval(moveMartiansY, 5000)
    setInterval(bulletLoop, 200)
    setInterval(gameLoop, 1000 / 60)
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