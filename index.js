function onLoad() {

    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let result_who = who[Math.floor(Math.random() * who.length)];
    let result_action = action[Math.floor(Math.random() * action.length)];
    let result_what = what[Math.floor(Math.random() * what.length)];
    let result_when = when[Math.floor(Math.random() * when.length)];
    let unir = result_who + " "+result_action + " " + result_what + " " +result_when
     
    return document.getElementById("excuse").innerHTML = unir;
}


