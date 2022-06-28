const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
console.log(range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x)));

const set = new Set(['Boban', 'Zoran', 'Goran', 'Loran', 'Goran', 'Zoran']);
console.log(Array.from(set));

console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray(['1', '2', '3']));
console.log(Array.isArray(new Array(5)));
console.log(Array.isArray(Array.prototype));

console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(true));
console.log(Array.isArray(1750));

console.log(Array.of());
console.log(Array.of(undefined));
console.log(Array.of(1, 2, 3));

const hrana = ['leb', 'mleko', 'jajca', 'banana', 'jogurt', 'biskviti'];

console.log(hrana.length);

const listaA = [1, 2, 3, 4];
const listaB = new Array(7);
console.log(listaA.length);
console.log(listaB.length);

const niza = [1, 2];
console.log(niza);
niza.length = 5;
console.log(niza);
niza.forEach(element => console.log(element));

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const length = numbers.length;
for (let i = 0; i < length; i++) {
    numbers[i] *= 2;
}
console.log(numbers);

const nums = [1, 2, 3, 4, 5];
console.log(nums);
if (nums.length > 3) {
    nums.length = 3;
}
console.log(nums);

const num = [];
num.length = 3;
console.log(num);

const fruits = ['apple', 'pear', 'banana', 'cherry'];
console.log(fruits);
const returnLast = (fruits) => {
    return fruits.at(-1);
}
console.log(returnLast(fruits));

fruits.push('orange');
const item = returnLast(fruits);
console.log(item);
console.log(fruits);

const colors = ['red', 'yellow', 'green'];
console.log(colors);
const lengthWay = colors[colors.length - 2];
const sliceWay = colors.slice(-2, -1);
const atWay = colors.at(-2);

console.log(lengthWay);
console.log(sliceWay[0]);
console.log(atWay);
console.log(sliceWay);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['g', 'h', 'i'];
const arrays = array1.concat(array2, array3);
console.log(arrays);

const letters = ['a', 'b', 'c'];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric);

const num1 = [[1]];
const num2 = [2, [3]];
const numeros = num1.concat(num2);
console.log(numeros);
console.log(numeros);

const bukvi = ['a', 'b', 'v', 'g', 'd'];
console.log(bukvi.copyWithin(0, 2, 3));
console.log(bukvi.copyWithin(1, 3));

const vlez = ['a', 'b', 'c'];
const arrayEntries = vlez.entries();
for (let element of arrayEntries) {
    console.log(element);
}

const niza1 = [12, 5, 8, 130, 44];
const niza2 = [12, 54, 18, 130, 44];
const isBigEnough = (element, index, array) => {
    return element >= 10;
}
console.log(niza1.every(isBigEnough));
console.log(niza2.every(isBigEnough));

const isSubset = (array1, array2) => array2.every(element => array1.includes(element));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); 
