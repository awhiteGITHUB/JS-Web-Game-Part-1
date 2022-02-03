function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
}

let sword = document.createElement('img')
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('dblclick', function(){
    sword.remove()
})


newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)



