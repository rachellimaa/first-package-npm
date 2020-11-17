const calc = require("./meuModulo/funcoes")

/* a) 1 + 1

b) -123 + 123123

c) 8 * 0

d) 1239123 * 12313

e) 123 / -12

f) 313123 / 0 */

const a = calc.add(1, 1);
const b = calc.add(-123, 123123);
const c = calc.mult(8, 0);
const d = calc.mult(1239123, 12313);
const e = calc.div(123, -12);
const f = calc.div(313123, 0);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);