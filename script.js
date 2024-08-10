    let b =prompt("Which Number multiplication table do you want to find For Example 2,3,4,5,6,7,8,9 etc.");
    let limit = prompt("Plz enter Limit")
for (let a =1; a<=limit; a++){
    document.write("<center>")
    document.write('<table border = "5" solid>')
    document.write("<tr>")
    document.write(`<h1><td><b>${b}</td> <td>X <td>${a}</td> <td>=</td> <td>${a*b}</td></b></td></h1>`);
    document.write("</tr>")
    document.write("</table>")
    document.write("</center>")
    
}