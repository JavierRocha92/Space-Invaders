import Bullet from './Bullet.js'
import Item from './Item.js'

let pathTilemap = '../assets/images/tilemap.jpg'
let tilemap = document.createElement('IMG')
tilemap.src = pathTilemap

let squareWidth = 20
let squareHeight = 20

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
    drawOnBoard(ctx) {
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
    dropItem(items) {
        let imagesItem = [
            'field'
        ]
        let randomIndex = Math.floor(Math.random() * imagesItem.length)
        items.push(new Item(squareWidth, squareHeight, this._posX, this._posY, imagesItem[randomIndex]))
        console.log(items)
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

export default Martian;