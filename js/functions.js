function input(event){
    let keyCode = event.keyCode;
    switch(keyCode){
        case 65:
        case 90:
        case 69:
        case 82:
        case 84:
        case 89:
        case 85:
        case 73:
        case 79:
            playsound(keyCode);
            break;
        default:
            break;
    }
}

function playsound(keyCode){
        let sound = document.getElementById(keyCode);
        sound.load();
        sound.play();
        sound.previousElementSibling.classList.add('sound-active');
        sound.addEventListener('ended', (event) =>{
            sound.previousElementSibling.classList.remove('sound-active')
        })
}

export {input}