//Global variables
let itemImage = document.createElement('IMG')
let squareWidth = 20
let squareHeight = 20

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
   /**
    * Function to draw into canvas an Item object by calling drawImage() function
    * 
    * @param {canvas} ctx 
    */
    draw(ctx) {
        // let itemImage = new Image();
        ctx.drawImage(itemImage, this._posX * squareWidth, this._posY * squareHeight, this._width, this._height);
        itemImage.src = './assets/images/items/' + this._type + '.jpg';
    }
    /**
     * Function to erase an Item object form items array
     * 
     * @param {array} items 
     */
    destroy(items){
        items = items.filter((item) => item != this)
    }
    /**
     * Function to move an Item object for vertical way by incresinf its posY by one
     */
    move() {
        this._posY++
    }
    /**
     * Function to check if an Item in on avatar to apply its value on it
     * 
     * @param {Martian} avatar 
     * @param {array} items 
     * @returns bool
     */
    isOnAvatar(avatar, items) {
        console.log('entro en la funcion de colision')
        if (this._posX == avatar._posX && this._posY == avatar._posY) {
            console.log('estoy encima de el avatar')
            items = items.filter((item) => item != this)
            return true
        }
        else
            return false
    }
}

export default Item