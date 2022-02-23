let userName = document.getElementById("userNameInput").value;
console.log(userName);

let tripLength = document.getElementById("tripLengthInput").value;
console.log(tripLength);

let userAge = document.getElementById("userAgeInput").value;
console.log(userAge);

const btnGenerator = document.getElementById("ticketGenerator");


const pricePerKm = 0.27;

const fullPriceTicket = tripLength * 0.27;

let teenAgeTicket = fullPriceTicket * 0.17;

let oldAgeTicket = fullPriceTicket * 0.33;


btnGenerator.addEventListener("click", function() {
    
    document.getElementById("passengerName").innerHTML = userName;
    
    let dnoneRemove = document.getElementById("hidden");
    dnoneRemove.classList.remove("d-none");
});

