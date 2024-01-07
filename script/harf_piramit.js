// Piramit
let num =  prompt("Enter a letter").toLocaleUpperCase().charCodeAt(0);
let high = 5
let a=1
var txt = "";
for (i =num; i < num + high; i++) {
  txt = "";
  for (j = a; j <= 10; j++) {
    txt += "     ";
  }
  for (k = 0; k < a*2-1; k++) {
    txt += "  "+String.fromCharCode(i)+"  ";
  }
  a++
  //   console.log(txt);
  document.write("<pre><h4>"+txt+"</h4></pre>");
  
}



