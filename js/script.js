/* variables */
let ctx
let squareWidth = 20
let squareHeight = 20
let canvasWidth = 800
let canvasHeight = 400
let martians = []
let avatar

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
]

/* Classes***************************************************************************************************************** */
class Bullet{
    constructor(posX,posY,width,height){
        this._posX = posX
        this._posY = posY
        this._width = width
        this._height = height
    }

    get posX(){
        return this._posX
    }
    set posX(posX){
        this._posX = posX
    }
    get posY(){
        return this._posY
    }
    set posY(posY){
        this._posY = posY
    }
    get width(){
        return this._width
    }
    set width(width){
        this._width = width
    }
    get height(){
        return this._height
    }
    set height(height){
        this._height = height
    }
    move(){
        this._posY--
    }
    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this._posX * squareWidth,this._posY * squareHeight,squareWidth,squareHeight)
    }
}

class Martian {
    constructor(width, height, posX, posY, life, frameX, frameY, left = true, right = false,bullets = []) {
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
    drawOnBoard(color){
        ctx.fillStyle = color
        ctx.fillRect(this._posX * squareWidth,this._posY * squareHeight, squareWidth, squareHeight)
    }
    moveHorizontal(){
        if(this._left){
            this._posX--
            this._left = false
        }
        else{
            this._posX++
            this._left = true
        }
    }
    moveVertical(){
        this._posY++
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
        martians.push(new Martian(squareWidth,squareHeight,posX,0,1))
        posX += 2
    }
}

const drawMatians = () => {
    martians.forEach(martian => {
        martian.drawOnBoard('yellow')
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
const moveByPressKey = (event) =>{
        if(event.key == 'ArrowRight' && avatar._posX < board[0].length - 1){
            avatar._posX++
        }
        if(event.key == 'ArrowLeft' && avatar._posX > 0){
            avatar._posX--
        }
    
}
const shoot = () =>{
    avatar.bullets.push(new Bullet(avatar._posX,avatar._posY,squareWidth,squareHeight))
}

const bulletLoop = () =>{
    avatar._bullets.forEach(bullet => {
        bullet.move()
        bullet.draw()
    });
    // if(avatar.bullets[0]._posY < 0){
    //     avatar.bullets.shift()
    // }
}

//Final about create elements



//Functions about canvas

const drawCanvas = () => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if(board[i][j] == 0){
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
    avatar.drawOnBoard('white')
    
}

const start = () => {
    const canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    avatar = new Martian(squareWidth,squareHeight,10,19,3,10,10)
    createMartians(20)
    setInterval(moveMartiansX,1000)
    setInterval(moveMartiansY,5000)
    setInterval(bulletLoop,200)
    setInterval(gameLoop,1000/60)
}

//Events
//Event when page is loaded
document.addEventListener('DOMContentLoaded', () => {
    start()
})

document.addEventListener('keydown',moveByPressKey)

document.addEventListener('keydown',(event) => {
    if(event.key == 's'){
        shoot()
    }
})