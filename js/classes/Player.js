class Player {
    constructor({ collisionBlocks = [] }) {
        this.position = {
            x: 100,
            y: 100,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.width = 100
        this.height = 100
        this.sides = {
            bottom: this.position.y + this.height,
        }
        this.gravity = 1
        this.collisionBlocks = collisionBlocks
    }

    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.position.x += this.velocity.x
//check for horizontal collision
for (let i =0; i< this.collisionBlocks.length; i++) {
    const collisionBlock = this.collisionBlocks[i]
    // if a collision exists
    //if ()
}
        
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height

        if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravity
        } else this.velocity.y = 0

    }

}
