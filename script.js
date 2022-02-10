const btn = document.querySelector('#btn'),
    input = document.querySelector('#text'),
    square = document.querySelector('#square'),
    eBtn = document.querySelectorAll('button')[1],
    range = document.querySelector('#range'),
    circle = document.querySelector('#circle'),
    rangeSpan = document.querySelector('span');

btn.onclick = function () {
    square.style.backgroundColor = input.value;
};

eBtn.style.display = 'none';

const circleParameters = function (event) {
    circle.style.height = event.target.value + '%';
    circle.style.width = event.target.value + '%';
    rangeSpan.textContent = event.target.value;
};
range.addEventListener('input', circleParameters);





