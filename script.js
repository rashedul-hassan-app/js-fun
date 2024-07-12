const redBtn = document.getElementById('red');
const yellowBtn = document.getElementById('yellow');
const greenBtn = document.getElementById('green');
const orangeBtn = document.getElementById('orange');

const buildingBody = document.getElementById('building');

redBtn.addEventListener('mouseover', function() {
    buildingBody.style.backgroundColor = 'red';
});

yellowBtn.addEventListener('mouseover', function() {
    buildingBody.style.backgroundColor = 'yellow';
});

yellowBtn.addEventListener('click', function() {
    const doorKnob = document.getElementsByClassName('door-knob');
    // doorKnob[0].style.width = '50px';
    // doorKnob[0].style.height = '50px';

    for (let i = 0; i < doorKnob.length; i++) {
        doorKnob[i].style.width = '50px';
        doorKnob[i].style.height = '50px';
    }
});


greenBtn.addEventListener('mouseover', function() {
    buildingBody.style.backgroundColor = 'green';
});


orangeBtn.addEventListener('mouseover', function() {
    buildingBody.style.backgroundColor = 'orange';
});