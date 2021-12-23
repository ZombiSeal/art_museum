const standart = 10;
const discounted = 6;

let sum = document.querySelectorAll('.sum');
let standartSum = document.querySelector('.standart_sum');
let discountedSum = document.querySelector('.discounted_sum');
let count = document.querySelectorAll ('.rectangular');



let inputs = document.querySelectorAll('.input_number');
let btns = document.querySelectorAll('.btn');
console.log(btns);

function calc() {
    const totalPrice = standart * parseInt(inputs[0].value) + discounted * parseInt(inputs[1].value);
    sum[0].innerHTML =  totalPrice +" руб";
    sum[1].innerHTML = totalPrice + " руб";
    const standartPrice = standart * parseInt(inputs[0].value);
    standartSum.innerHTML = standartPrice + " руб";
    const discountedPrice = discounted * parseInt(inputs[1].value);
    discountedSum.innerHTML = discountedPrice + " руб";
}
calc();

function ticketsCount() {
    count[0].innerHTML = inputs[0].value;
    count[1].innerHTML = inputs[1].value;
}


for (let input of btns) {
    input.addEventListener('click', function(){
    calc();
    });
}

let btnBuy = document.querySelector('.buy_tickets');

btnBuy.addEventListener('click', function(){
    ticketsCount();
})


let sel=document.getElementById('type_tickets');
let radio = document.querySelectorAll('.radio_buttom');


btnBuy.addEventListener('click', function(){
    for (let i = 0; i < radio.length; i++){
        if (radio[i].checked) {
           sel.value = radio[i].value;
           type.innerHTML = radio[i].value;
           break;
        }
    }
})
