

//info request
//userKm
//userAge
//name

const submitBtn = document.getElementById('btn');
submitBtn.addEventListener('click', function(){
    //prelevo l id da html e lo salvo nella variabile 
    const userKmInput = document.getElementById("km");
    //creo variabile con il contenuto di km
    const userKm = parseInt(userKmInput.value);
    console.log('km',userKm);
    userKmInput.value = "";
   

    const userAgeInput = document.getElementById('age');
    const userAge = parseInt(userAgeInput.value);
    console.log('età',userAge);
    userAgeInput.value=""

    const userNameInput = document.getElementById('name');
    const userName =userNameInput.value;
    userNameInput.value="";
    console.log(userName);

    //ticket prices
   const baseTicket = (userKm *0.21);
   console.log('prezzo base',baseTicket);
   const ticket20 = (baseTicket *0.8);
   const ticket40 = (baseTicket *0.6);
   console.log('sonto',ticket20,ticket40);

   //applico discount
   let price = baseTicket;
   let discount ="biglietto standard";
   if (userAge < 18){
    price = ticket20;
    discount = "sconto 20%";
   } else if (userAge >= 65){
    price = ticket40;
    discount= "sconto 40%"
   }
   console.log('il prezzo del tuo biglietto ',price);
   console.log("nuovo");

   //carrozza e codice
   let carrozza = Math.floor((Math.random() * 10) + 1);

   let codice = Math.floor((Math.random() * 10000) + 1);
   console.log(carrozza,codice);

   //output
   document .getElementById("user-name").innerHTML = userName;
   document .getElementById('discount').innerHTML = discount;
   document .getElementById('ticket-price').innerHTML =price.toFixed(2)+"€";
   document .getElementById('n-carrozza').innerHTML = carrozza;
   document .getElementById("n-code").innerHTML = codice;
})
