import { MiniMaple } from "./miniMaple.js";

document.addEventListener('DOMContentLoaded',setup)

let mp = new MiniMaple()

function setup() {
    document.getElementById('demoButton').onclick = diff;
}

// function addSomething(){
//     let diffString = document.getElementById('diff').value;
//     const someDummyDiv = document.createElement('div');
//     someDummyDiv.classList.add('generated');
//     const count = document.getElementsByClassName('generated').length;
//     someDummyDiv.innerHTML = `I was created by JS! There are already ${count} ${diffString} of my friends!`;
//     const container = document.getElementById('container');
//     container.appendChild(someDummyDiv);
// }

function diff()
{
    let diffString = document.getElementById('diff').value;   
    const someDummyDiv = document.createElement('div');
    someDummyDiv.innerHTML = `${mp.diff(diffString)}`;
    const container = document.getElementById('container');
    container.appendChild(someDummyDiv);
}