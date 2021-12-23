let form = document.getElementById('form');
form.addEventListener('submit', contact);

let user_date = document.getElementById('date_input');
let user_name = document.getElementById('name');
let user_email = document.getElementById('email');
let user_phone = document.getElementById('phone'); 
let type1 = document.getElementById('type_tickets');
let standart_tickets1 = document.getElementById('standart_tickets');
let discountd_tickets1 = document.getElementById('discounted_tickets');

function contact(e) {

    let target = e.target;

    let message = '';
    message += "Дата:" + user_date.value + "\r\n";
    message += "Имя:" + user_name.value + "\r\n";
    message += "Email:" + user_email.value + "\r\n";
    message += "Телефон:" + user_phone.value + "\r\n";
    message += "Вид:" + type1.value + "\r\n";
    message += "Cтандартные:" + standart_tickets1.value  + "\r\n";
    message += "Льготные:" + discountd_tickets1.value + "\r\n";

   target.elements["body"].value = message;

   target.submit();
}