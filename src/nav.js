function dropDown() {
    document.getElementById("navDrop").classList.toggle("drop");
    document.getElementById("burgerDrop").classList.toggle("x");
}

function KonoNavOn(){
  document.getElementsByClassName("Logo")[0].classList.toggle("out");
  document.getElementsByClassName("HomeButton")[0].classList.toggle("out");
  document.getElementsByClassName("EventButton")[0].classList.toggle("out");
  document.getElementsByClassName("UserButton")[0].classList.toggle("out");

}

function hover(element) {
    element.setAttribute('src', 'img/LogoKonoRandHover.png');
}
function unhover(element) {
    element.setAttribute('src', 'img/LogoKonoRand.png');
}


function ClipBoard(x)
{
  let copyText = document.getElementsByClassName(x)[0].innerHTML;
  copyText.select();
  document.execCommand("copy");
}
