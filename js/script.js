/* Elements form DOM */
const ending = document.getElementById('ending')

/* variables */
let ctx
let squareWidth = 20
let squareHeight = 20
let canvasWidth = 800
let canvasHeight = 600
let martians = []
let avatar
let pointMultiplier = 1

//Images
let pathTilemap = '../assets/images/tilemap.jpg'
let tilemap = document.createElement('IMG')
tilemap.src = pathTilemap
let pathElements = '../assets/images/elements.png'
let elements = document.createElement('IMG')
elements.src = pathElements
let itemImage = document.createElement('IMG')

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

/* Classes***************************************************************************************************************** */

class Item {
    constructor(width, height, posX, posY, type) {
        this._width = width
        this._height = height
        this._posX = posX
        this._posY = posY
        this._type = type
    }
    static items = []
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
    draw() {
        itemImage = document.createElement('IMG')
        // ./assets/images/items/block.png
        itemImage.src = './assets/images/items/' + this._type + '.jpg'
        ctx.drawImage(itemImage, this._posX * squareWidth, this._posY * squareHeight, this._width, this._height)
    }

    move() {
        this._posY++
    }
    isOnAvatar() {
        if (this._posX == avatar._posX && this._posY == avatar._posY){
            Item.items = Item.items.filter((item) => item != this)
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
        if (way == 'up') {
            this._posY--
        }
        else {
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
    constructor(width, height, posX, posY, life, frameX, frameY, item = false, left = true, bullets = [],field = false) {
        this._width = width
        this._height = height
        this._posX = posX
        this._posY = posY
        this._life = life
        this._frameX = frameX
        this._frameY = frameY
        this._left = left
        this._item = item
        this._bullets = bullets
        this._field = field
    }
    static enemiesDown = 0
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
    get item() {
        return item
    }
    set item(item) {
        this._item = item
    }
    get bullets() {
        return this._bullets
    }
    set bullets(bullets) {
        this._bullets = bullets
    }
    get field() {
        return this._field
    }
    set field(field) {
        this._field = field
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
        this._bullets.push(new Bullet(10, 10, this._posX, this._posY, 'yellow'))
    }
    drop() {
        let imagesItem = [
            'field'
        ]
        // let imagesItem = [
        //     'doublePoints',
        //     'hearth',
        //     'field',
        //     'randon'
        // ]
        let randomIndex = Math.floor(Math.random() * imagesItem.length)
        Item.items.push(new Item(squareWidth, squareHeight, this._posX, this._posY, imagesItem[randomIndex]))
    }
    
    addPowerUp(item){
    switch (item._type) {
        case 'random':
            break
        case 'doublePoints':
            pointMultiplier *= 2
            setTimeout(() => {
                pointMultiplier = 1
            },5000)
            break
        case 'hearth':
            if (this._life < 6)
                this._life++
            break
        case 'field':
            this._field = true
            setTimeout(() => {
                this._field = false
            },5000)
            break
    }
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
    // let itemRandom = [false, true, false, false, false, false, false, false]
    let itemRandom = [false, true, false]
    let randomIndex
    for (let i = 0; i < number; i++) {
        randomIndex = Math.floor(Math.random() * itemRandom.length)
        martians.push(new Martian(70, 125, posX, 3, 1, 70, 100, itemRandom[randomIndex]))
        posX += 2
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
        martian.drawOnBoard()
    });
}
const drawBlocks = () => {
    blocks.forEach(block => {
        block.draw()
    });
}

const drawItems = () => {
    Item.items.forEach(item => {
        item.draw()
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

    //    ctx.font = 'bold italic 25px arial';
    //    ctx.fillStyle = 'white';
    //    ctx.textAlign = 'center';
    //    // Escribir texto en el canvas
    //    ctx.fillText('hola',500, 30);
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
    Item.items.forEach(item => {
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
//Functions about end game

const endingShow = () => {
    ending.classList.add('showEnding')
}

const endGame = () => {
    clearInterval(horizaontalMoving)
    clearInterval(verticalMoving)
    clearInterval(bulletGameLoop)
    clearInterval(gameLoopInterval)
    endingShow()
}

//Functions about shoot ****************************************************************************************************
const shoot = () => {
    avatar.bullets.push(new Bullet(10, 10, avatar._posX, avatar._posY, 'white'))
}

//Functions about remove elements

const removeTargets = () => {
    martians = martians.filter((element) => element._life != 0)
    if (avatar._life == 0)//Conditinal to check if avatar life is empty
    endGame()
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
    let randomResponses = [false, false, true, false, false, false, false, false, false]
    let randomIndex = Math.floor(Math.random() * randomResponses.length)
    return randomResponses[randomIndex]

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
        enemyDown = bullet.bulletIsOnMartian()
    }
    bullet.move(dropWay)
    bullet.draw()
    if (enemyDown) {
        console.log(enemyDown._item)
        if (enemyDown._item) {
            enemyDown.drop()
        }
        Martian.enemiesDown++
        if(!enemyDown._field){
            enemyDown._life--
        }
        removeTargets()
        removeBullet(bullet, enemy)
    }
    let blockDown = bullet.bulletIsOnBlock()
    if (blockDown) {
        removeBlocks(blockDown)
        removeBullet(bullet, enemy)
    }
}

const checkItems = () => {
    Item.items.forEach(item => {
        if (item.isOnAvatar()) {
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

const gameLoop = () => {
    console.log(pointMultiplier)
    handleCanvas()
    drawMatians()
    handleItems()
    drawBlocks()
    drawHeader()
    avatar.drawOnBoard('white')

}

const start = () => {
    const canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    avatar = new Martian(100, 150, 10, 29, 6, 600, 490)
    createMartians(20)
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

 

