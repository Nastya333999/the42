let four = document.getElementById('four');

let first = document.getElementById('first');
let second = document.getElementById('second');
let three   = document.getElementById('three');

first.onclick = function firstFun(){
    four.innerHTML = '<img src="./img/1slide1pic.png" alt="" class="prod">';
};

second.onclick = function firstFun(){
    four.innerHTML = '<img src="./img/1slide2pic.png" alt="" class="prod">';
};

three.onclick = function firstFun(){
    four.innerHTML = '<img src="./img/1slide3pic.png" alt="" class="prod">';
};