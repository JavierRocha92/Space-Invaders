//imports
import Bullet from './Bullet.js'
import Item from './Item.js'
//Image tilemap to create items from it
let pathTilemap = '../assets/images/tilemap.jpg'
let tilemap = document.createElement('IMG')
tilemap.src = pathTilemap
//Varibales
let squareWidth = 20
let squareHeight = 20

class Martian {
    constructor(width, height, posX, posY, life, frameX, frameY, item = false, left = true, bullets = [], field = false, doublePoints = false) {
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
        this._doublePoints = doublePoints
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
    get doublePoints() {
        return this._doublePoints
    }
    set doublePoints(doublePoints) {
        this._doublePoints = doublePoints
    }
    /**
     * function to decrease this._life by one
     */
    decreaseLife() {
        this._life--
    }
    /**
     * Function to drae an object element into cnvas by using drawImage() function
     * 
     * @param {canvas} ctx 
     */
    drawOnBoard(ctx) {
        ctx.drawImage(tilemap, this.frameX, this.frameY, this._width, this._height, this._posX * squareWidth, this._posY * squareHeight, squareWidth, squareHeight)
    }
    /**
     * funcntion to move object element for horizontal way
     */
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
    /**
     * funcntion to move object element for vertical way
     */
    moveVertical() {
        this._posY++
    }
    /**
     * Function to create a Bullet object snd push into this._bullets array
     */
    shoot() {
        this._bullets.push(new Bullet(10, 10, this._posX, this._posY, 'yellow'))
    }
    /**
     * Function to create a new Item object and push into items global array 
     * 
     * @param {Array} items 
     */
    dropItem(items) {
        
        let imagesItem = [
            'field',
            'hearth',
            'random',
            'doublePoints'
        ]
        let randomIndex = Math.floor(Math.random() * imagesItem.length)
        items.push(new Item(squareWidth, squareHeight, this._posX, this._posY, imagesItem[randomIndex]))
    }
    /**
     * Function to apply a powerup given as parameter by calling differente function dependingo of item._type
     * 
     * @param {Item} item 
     */
    addPowerUp(item) {
       
        const applyDoublePoints = () => {
            clearTimeout(doublePointsActive);
            this._doublePoints = true;

            doublePointsActive = setTimeout(() => {
                this._doublePoints = false;
            }, 20000);
        };

        const applyField = () => {
            clearTimeout(fieldActive);
            this._field = true;

            fieldActive = setTimeout(() => {
                this._field = false;
            }, 20000);
        };

        const applyLive = () => {
            if (this._life < 6)
                    this._life++
        }

        switch (item._type) {
            case 'random':
                break
            case 'doublePoints':
               applyDoublePoints()
                break
            case 'hearth':
                applyLive()
                break
            case 'field':
                applyField()
                break
        }
    }
    /**
     * Function to generate explotion effect when a Martina object is beaten
     * 
     * @param {canvas} ctx 
     */
    // explotion(ctx){
    //     let flame = new Item(squareWidth,squareHeight,this._posX,this._posY)
    //     let iterator = 0
    //     let imageFlame = document.createElement('IMG')
    //     let flameExplotion = setInterval(() => {
    //         imageFlame.src = '.assets/images/items/flame0'+iterator+'.jpg'
    //         ctx.drawImage(imageFlame,flame._width,flame._height,flame._posX,flame._posY)
    //         iterator++
    //     },100)
    //     setTimeout(() => {
    //         clearInterval(flameExplotion)
    //     },400)
    // }
}

export default Martian;