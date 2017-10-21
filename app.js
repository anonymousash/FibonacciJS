'use strict';

console.log('Fibonacci series');
var a, b, c, d
a = 0;
b = 1;
c = 0;
console.log(+a);
console.log(+b);
while (c <= 5)
{
    d = a + b;
    console.log(+d);
    a = b;
    b = d;
    c = c + 1;
}
