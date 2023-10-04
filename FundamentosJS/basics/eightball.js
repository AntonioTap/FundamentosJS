const respuesta = document.getElementById('respuesta');
function eightball(){
    const opcion = Math.ceil(Math.random()*8);
    let resp;
    switch(opcion){
        case 1:
            resp = 'Todo saldrá bien 😊';
            break;
        case 2:
            resp = 'Todo saldrá fatal 🤮';
            break;
        case 3:
            resp = 'Probablemente 🤑';
            break;
        case 4:
            resp = 'No pierdas la esperanza 😍';
            break;

        case 5:
            resp = 'Mejor ni te digo 🤪';
            break;

        default:
            resp = 'No lo sé 😎';
    }
    respuesta.innerHTML = resp;
}