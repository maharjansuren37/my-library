let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startx, x;

slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    console.log("startX: ", startx);
    console.log('innerslider offset', innerSlider.offsetLeft);
});

slider.addEventListener('mouseenter', () => {
    slider.style.cursor = 'grab';
})

slider.addEventListener('mouseup', () => {
    slider.style.cursor = 'grab';
    pressed = false;
})

slider.addEventListener('mousemove', (e) => {
    if (!pressed) return;
    e.preventDefault();
    
    x = e.offsetX;

    innerSlider.style.left = `${x - startx}px`;

    checkBoundary();
});

function checkBoundary() {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = '0px';
    } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width = outer.width}px`;
    }

    console.log("outer", outer);
    console.log("inner", inner);
}
