// defining that arg must be number and return value of fun also must be number.
// generics are used when we want to describe a correspondence between two values
function fun1(num: number, num1: number = 10, num2?: string): number {
    return 4 + num;
}
let fun1Re = fun1(4);

// named parameter
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}

// union type - used when fun might need or retrn any type of data but more specifically like string,number,object,...
// but bcz of defining this you can not use default methods without conditionals, bcz simpaly we don't know what type of data is that.
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

// function createPair<S, T>(v1: S, v2: T, v3: S): void {
//     console.log(v1+v3)
// }
// console.log(createPair<string, number>('hello', 42, ' world'));

// to make para dynamic
function returnFirst<Type>(someArr: Type[]): Type {
    return someArr[0];
}
const someArr1 = returnFirst([1, 2, 3]);
const someArr2 = returnFirst(["g", "e", "n"]);
console.log(someArr1, someArr2)

let myObj = { name: 'panthee' };
myObj["city"] = "abd";
// myObj.city = 'abd';
console.log(Object.keys(myObj))
