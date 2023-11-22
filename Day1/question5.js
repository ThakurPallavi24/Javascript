//Precedence: Order in which operators are evaluated in an expression.

let a = 2 + 3 * 4; // (*) ,(%), (/) and  has higher precedence than (+) and (-) so first *,/,% it will use
console.log(a);

let b = 8 - 2 + 6 * 4; //here + and - precedence is same and the Associativity is left to right.so it will solve left to right
console.log(b);

let d = (9 % 4) + 5 - 1;
console.log(d);
