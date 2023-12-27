class Martian{
    constructor(height,width,posX,posY,life){
        this._height = height
        this._width = width
        this._posX = posX
        this._posY = posY
        this._life = life
        this._frameX = frameX
        this._frameY = frameY
    }
    get height(){
        return this._height
    }
    set height(height){
        this._height = height
    }
    get width(){
        return this._width
    }
    set width(width){
        this._width = width
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
    get life(){
        return this._life
    }
    set life(life){
        this._life = life
    }
    get frameX(){
        return this._frameX
    }
    set frameX(frameX){
        this._frameX = frameX
    }
    get frameY(){
        return this._frameY
    }
    set frameY(frameY){
        this._frameY = frameY
    }
    decreaseLife(){
        this._life--
    }
    appear(squareWidth,squareHeight,color){
        ctx.fillStyle = color
        ctx.fillRect( j * squareWidth, i * squareHeight, squareWidth, squareHeight,)
    }
}