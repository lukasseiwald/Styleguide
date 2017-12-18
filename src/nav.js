function dropDown() {
    document.getElementById("navDrop").classList.toggle("drop");
    document.getElementById("burgerDrop").classList.toggle("x");
}

function KonoNavOn(){
  document.getElementById("Logo").classList.toggle("out");
  document.getElementById("HomeButton").classList.toggle("out");
  document.getElementById("EventButton").classList.toggle("out");
  document.getElementById("UserButton").classList.toggle("out");

}

function hover(element) {
    element.setAttribute('src', 'img/LogoKonoRandHover.png');
}
function unhover(element) {
    element.setAttribute('src', 'img/LogoKonoRand.png');
}


/*

  */
