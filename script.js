let textCalc = "";
let content = document.querySelector('.screen-numbers');

function valueEntered(value) {
    textCalc = textCalc + value;
    content.innerHTML = `<p class="textCalc">${textCalc}</p>`;
}

function resultCalc() {
    let answer = eval(textCalc);
    content.innerHTML = `<p class="textCalc">${textCalc}</p>`;
}

function deleteCharacter() {
    let arrayCalc = textCalc.split("");
    arrayCalc.pop();
    textCalc = arrayCalc.join('');
    content.innerHTML = `<p class="textCalc">${textCalc}</p>`;
}

function deleteAllCharacter() {
    textCalc = "";
    content.innerHTML = `<p class="textCalc">${textCalc}</p>`;
}