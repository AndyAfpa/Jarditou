var a = prompt("Ecrivez un nombre")
var b = a%2

if (b==0)
{
    alert("Votre nombre est pair")
}

else if (b!=0)
{
    alert("Votre nombre est impair")
}



var c = prompt("Ecrivez votre année de naisance")
var annee= new Date ().getFullYear();
var d = annee-c

if (d>18)
{
    alert("Vous êtes majeur")
}

else if (d<18)
{
    alert("vous êtes mineur")
}