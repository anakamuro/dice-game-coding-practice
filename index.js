const button = document.querySelector("button");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const output = document.querySelector(".output");
const dice = [[5], [1, 9], [1, 5, 9], [1, 3, 7, 9], [1, 3, 5, 7, 9], [1, 3, 4, 6, 7, 9]];
// button.addEventListener("click", function(){
//     console.log('it works');
//     let rolls = [roll(6), roll(6)];
//     let temp;
//     if(rolls[0] == rolls[1]){temp="it was a draw"}
//     else if(rolls[0] > rolls[1]){temp = "Player1 wins"}
//     else {temp = "Player2 wins";}
//     output.innerHTML = temp;
//     console.log(rolls);
//     player1.innerHTML = rolls[0];
//     player2.innerHTML = rolls[1];
// })

button.addEventListener("click", function(){
    let rolls = [roll(6), roll(6)];
    let temp;
    if(rolls[0] == rolls[1]){temp = "Draw"}
    else if(rolls[0] > rolls[1]){temp = "Player1 wins"}
    else {temp = "Player2 wins"}
    updateOutput(player1, rolls[0]);
    updateOutput(player2, rolls[1]);
    output.innerHTML = temp;
})

function updateOutput (el, num){
    let holder = builder(num);
    if(el.children[0]){
        el.children[0].remove()
    }
    el.appendChild(holder)
}
function builder(num){
    let div = document.createElement("div");
    let dieArray = dice[num - 1];
    console.log(dieArray)
    for(let x = 1; x < 10; x++){
        let span = document.createElement('div');
        span.setAttribute("class", "dot");
        if (dieArray.includes(x)){
            span.classList.add("black")
        }
        div.appendChild(span);
    }
    div.setAttribute("class", "dicer");
    return div;
}



// function roll(num){
//     let rNumber = Math.floor(Math.random()* num) + 1;
//     let n = 9855 + rNumber;
//     let char = "&#" + n + ";";
//     return rNumber + " " + char;
// }

function roll(num){
    let rNumber = Math.floor(Math.random()* num) + 1;
    return rNumber;
}