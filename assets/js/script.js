/* ---------------- REFERENCES ------------------ */
var price = document.getElementById('price');
var btn = document.getElementById('btn');
var user = document.getElementById('name');
var ingredients = document.getElementsByClassName("ingredient-checkbox")
//HTML COLLECTION
console.log(ingredients);


/* ---------------- SETTINGS ------------------ */
// prezzo hamburger di default
var pricedefault = 50;
writePrice(pricedefault, price);


/* ---------------- EVENT LISTENERS ------------------ */
//aggancia un funzione che sarà chiamata quando accade un evento
btn.addEventListener('click', function(){
    //chiedere il nome 
    var nomeInserito = user.value.trim();
    console.log(nomeInserito.length);
    if(nomeInserito === 0){
        alert("Inserisci il nome");
    }else{
    //vedere quali sono stati checkati (input -> value è il prezzo)
    //se checkati prendere il valore e sommarlo a quello originale
     for (var i=0; i < ingredients.length; i++){
        var ingrediente = ingredients[i];
        
     }
    }
    //verificare presenza coupon
    //stampare il risultato 
}) 


/* ---------------- FUNCTIONS ------------------ */ 
// devo creare una funzione che scriva il prezzo 
function writePrice(valore, target){
    target.innerHTML = valore.toFixed(2);
  }


