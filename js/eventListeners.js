window.addEventListener('keydown', (event) => {
    console.log(event)
    switch (event.key) {
        case 'w':
            if (player.velocity.y === 0)
                player.velocity.y = -20
            break
        case 'a':
            //Move to the left
            keys.a.pressed = true
            break
        case 's':
            break
        case 'd':
            //Move to the right
            keys.d.pressed = true
            break
        case ' ':
            //Spacebar Action
            console.log('You hit spacebar')
            break
    }
})

window.addEventListener('keyup', (event) => {
    //Stop movement
    console.log(event)
    switch (event.key) {
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})