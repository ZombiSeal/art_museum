let input = document.querySelectorAll('.input_number');
let number = document.querySelectorAll('.number');
let formInputs = document.querySelectorAll('.form_num');

let btn = document.querySelectorAll('.btn');
let btnsForm = document.querySelectorAll('.btn_form');
let counts = document.querySelectorAll ('.rectangular');


for (let el of btn) {
    el.addEventListener('click', function(){
        formInputs[0].value= input[0].value;
        formInputs[1].value = input[1].value;
    });
}


let date = document.querySelector('.date_input');
let inf_date = document.querySelector('.date_value');
let type = document.querySelector('.type_tickets_value');


date.addEventListener('input', function(){
    inf_date.innerHTML = date.value;
})

let select = document.querySelector('.select_type_tickets');

select.addEventListener('click', function(){
    type.innerHTML = select.value;
})


let sumForm = document.querySelectorAll('.sum');
let standartSumForm = document.querySelector('.standart_sum');
let discountedSumForm = document.querySelector('.discounted_sum');

function calcPrice() {
    const totalPriceForm = 10 * parseInt(formInputs[0].value) + 6 * parseInt(formInputs[1].value);
    sum[0].innerHTML =  totalPriceForm +" руб";
    sum[1].innerHTML = totalPriceForm + " руб";
    const standartPrice = 10 * parseInt(formInputs[0].value);
    standartSum.innerHTML = standartPrice + " руб";
    const discountedPrice = 6 * parseInt(formInputs[1].value);
    discountedSum.innerHTML = discountedPrice + " руб";
}

for (let x of btnsForm) {
    x.addEventListener('click', function(){
        counts[0].innerHTML = formInputs[0].value;
        counts[1].innerHTML = formInputs[1].value;
        calcPrice();
    });
}

