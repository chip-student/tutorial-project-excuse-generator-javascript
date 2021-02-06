function onLoad() {
    //declaracion de arreglos
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    //obtiene un valor aleatorio de arreglo who
    let result_who = who[Math.floor(Math.random() * who.length)];
    //obtiene un valor aleatorio de arreglo action
    let result_action = action[Math.floor(Math.random() * action.length)];
    //obtiene un valor aleatorio de arreglo what
    let result_what = what[Math.floor(Math.random() * what.length)];
    //obtiene un valor aleatorio de arreglo when
    let result_when = when[Math.floor(Math.random() * when.length)];
    
    //se concatena la excusa
    let unir = result_who + " "+result_action + " " + result_what + " " +result_when;
     
    return document.getElementById("excuse").innerHTML = unir;
}


