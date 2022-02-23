let userName = document.getElementById("userNameInput").innerHTML;
console.log(userName);

let tripLength = document.getElementById("tripLengthInput").innerHTML;
console.log(tripLength);

let userAge = document.getElementById("userAgeInput").value;
console.log(userAge);

const btnGenerator = document.getElementById(ticketGenerator);

const pricePerKm = 0.27;

const fullPriceTicket = tripLength * 0.27;

let teenAgeTicket = fullPriceTicket * 0.17;

let oldAgeTicket = fullPriceTicket * 0.33;




