let userName = document.getElementById("userNameInput");
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

    userName = document.getElementById("userNameInput").value;
    document.getElementById("passengerName").innerHTML = userName;

    if (userAge = "minorenne"){

    document.getElementById("finalPrice").innerHTML = teenAgeTicket.toFixed(2);
    document.getElementById("offering").innerHTML = "tariffa ridotta per minorenni";

    }else if(userAge = "over65"){

        document.getElementById("finalPrice").innerHTML = oldAgeTicket.toFixed(2);
        document.getElementById("offering").innerHTML = "tariffa ridotta per anziani";

    }else{
        
        document.getElementById("finalPrice").innerHTML = fullPriceTicket.toFixed(2);
        document.getElementById("offering").innerHTML = "tariffa ordinaria";

    };





    let dnoneRemove = document.getElementById("hidden");
    dnoneRemove.classList.remove("d-none");
});

