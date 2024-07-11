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

greenBtn.addEventListener('mouseover', function() {
    buildingBody.style.backgroundColor = 'green';
});


orangeBtn.addEventListener('mouseover', function() {
    buildingBody.style.backgroundColor = 'orange';
});