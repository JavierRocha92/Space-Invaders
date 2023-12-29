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
    draw(ctx) {
        itemImage.src = './assets/images/items/' + this._type + '.jpg'
        ctx.drawImage(itemImage, this._posX * squareWidth, this._posY * squareHeight, this._width, this._height)
    }

    move() {
        this._posY++
    }
    isOnAvatar(avatar,items) {
        if (this._posX == avatar._posX && this._posY == avatar._posY){
            items = items.filter((item) => item != this)
            return true
        }
        else
            return false
    }
}

export default Item