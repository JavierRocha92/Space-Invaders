let squareWidth = 20
let squareHeight = 20


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
    draw(ctx) {
        ctx.fillStyle = this._color
        ctx.fillRect((this._posX * squareWidth) + 7, this._posY * squareHeight, 5, 5)
    }
    bulletIsOnMartian(martians) {
        for (const martian of martians) {
            if (this._posX == martian._posX && this._posY == martian._posY) {
                return martian
            }
        }
        return false
    }
    bulletIsOnBlock(blocks) {
        for (const block of blocks) {
            if (this._posX == block._posX && this._posY == block._posY) {
                return block
            }
        }
        return false
    }
}


export default Bullet