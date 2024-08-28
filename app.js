// function setCssVariables(element, variable, value) {
//     element.style.setProperty(variable, value);
// }

// function lightButtonCLick() {
//     setCssVariables(document.documentElement, '--current-color', '#000');
//     setCssVariables(document.documentElement, '--current-background', '#fff');
// }

// function darkButtonClick() {
//     setCssVariables(document.documentElement, '--current-color', '#fff');
//     setCssVariables(document.documentElement, '--current-background', '#000');
// }

// document.querySelector('#light').addEventListener('click', lightButtonCLick);
// document.querySelector('#dark').addEventListener('click', darkButtonClick);

const button = document.querySelector('button');

function counter() {
    let num = 0;

    const count = document.getElementById('counter');

    count.textContent = "number";
}

button.addEventListener('click', counter)