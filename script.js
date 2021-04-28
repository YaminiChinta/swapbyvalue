function swapbyvalue(a,b)
{
    var temp=a;
    a=b;
    b=temp;
    
    document.write("<h1><center>In the Function:  </center></h1>");
    document.write(`<h2><center>a=${a}, b=${b} </center></h2><br><hr>`);
}
var a,b;

a=parseInt(prompt("Enter 1st Number value:"));
b=parseInt(prompt("Enter 2nd Number value:"));

document.write('<h1><center>Before swap: <br> </center></h1>');
document.write(`<h2><center>a=${a}, b=${b} </center></h2><br><hr>`);

swapbyvalue(a,b);

document.write("<h1><center>After swap:  </center></h1>");
document.write(`<h2><center>a=${a}, b=${b} </center></h2><br>`);
