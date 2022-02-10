// tady je místo pro náš program



/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}
'ukol 1'
function changeColor(){
document.querySelector('.ctverecek').style.backgroundColor = 'green';
}

'ukol2'
function display () {
document.querySelector('#vysledek').innerHTML = secti(4,5);
 

}

/**
 * Upozorní uživatele při spuštění.
 */
'ukol 3'
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  document.querySelector('.ctverecek').innerHTML  = "Gratulace, právě jsi spustila tuto funkci!";
  
}

