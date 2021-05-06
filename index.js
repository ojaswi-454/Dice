var randomno1=Math.floor(Math.random()*6)+1;
var randomdiceimg="dice"+randomno1+".png";
var randomimgsrc="diceimages/"+randomdiceimg;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src", randomimgsrc);

var randomno2=Math.floor(Math.random()*6)+1;
var randomdiceimg2="dice"+randomno2+".png";
var randomimgsrc2="diceimages/"+randomdiceimg2;
var image2=document.querySelectorAll("img")[2];
image2.setAttribute("src", randomimgsrc2);

if(randomno1>randomno2)
{ document.querySelector("h2").innerHTML="Player 1 wins!";
document.querySelector("h2").style.fontSize="4rem";
document.querySelector("h2").style.color="maroon";
}
else if(randomno2>randomno1)
{ document.querySelector("h2").innerHTML="Player 2 wins!";
document.querySelector("h2").style.fontSize="4rem";
document.querySelector("h2").style.color="maroon";
}
else
{ document.querySelector("h2").innerHTML="Draw!";
document.querySelector("h2").style.fontSize="4rem";
document.querySelector("h2").style.color="maroon";
}