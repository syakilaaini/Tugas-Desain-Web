let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let food3s = document.getElementById('food3');
let food4s = document.getElementById('food4');
let foods = document.getElementById('food');

food1s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food1.jpeg')";
})

food2s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food2.jpg')";
})

food3s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food3.jpg')";
})

food4s.addEventListener('click',()=>{
    foods.style.backgroundImage="url('food4.jpg')";
})