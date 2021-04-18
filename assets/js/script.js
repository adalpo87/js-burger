/* -----------------REFERENCES----------------- */
 var prezzo = document.getElementById('price');
 var button = document.getElementById('button');
 var user = document.getElementById('name');
 var ingredients = document.getElementsByClassName("ingredient-checkbox");
 var coupon = document.getElementById('coupon');
 
/* -----------------SETTINGS----------------- */
 var defaultPrice = 50;
 var coupons = ['sconto2021', 'sconto-bool'];
 var discount = 0.3;
 writePrice(defaultPrice, prezzo);
 
 /* -----------------EVENTS----------------- */
 button.addEventListener('click', function(){
 
   // controllo del nome
   var nomeInserito = user.value.trim();
 
   // verifico la presenza del nome
   if(nomeInserito.length === 0){
     alert("Inserisci il nome del burger");
   }else{
 
   // tramite un ciclo for vedo se l'elemento è checkato e allora lo sommo
     var priceIngredient = 0;
     for(var i = 0; i < ingredients.length; i++){
       var ingredient = ingredients[i];
       
     // se checked è true allora lo inserisco
       if(ingredient.checked === true){
         priceIngredient += parseInt(ingredient.value);
       }
 
     }
     //sommo il prezzo di default e aggiungo gli ingredienti
     var totalPrice = defaultPrice + priceIngredient;
     
     // controllo la presenza del coupon nell'array
     if(coupons.includes(coupon.value) === true){
       totalPrice -= totalPrice * discount;
       //totalPrice *= (1 - discount);
     }
     
      //PREZZO TOTALE
     writePrice(totalPrice, prezzo);
 
   }
 
 });
 
 
 
/* -----------------FUNZIONI----------------- */

 
 // riceve il velare da scrivere e l'elemento dove deve esere scritto
 function writePrice(value, target){
   target.innerHTML = value.toFixed(2);
 }