
// types
// 1. explicit
// let name1:string="panthee";
// name1=33; // error
// 2. implicit
// let name1="panthee";
// name1=33; // error

// let v: any = true; // remove :any and uncomment v.run... is error
// v = "1"; // no error as it can be "any" type
// // v.runANonExistentMethod(); 
// console.log(Math.round(v)); // no error as it can be "any" type

const arr1: string[] = []
const arr2: readonly string[] = []
// tuple
let ourTuple1: [number, boolean, string]; ourTuple1 = [5, false, 'Coding'];
let ourTuple2: readonly [number, boolean, string]; ourTuple2 = [5, false, 'Coding'];
// named tuple
let graph1: [x: number, y: number] = [55.2, 41.3];
// Destructuring Tuple
const graph2: [number, number] = [55.2, 41.3];
const [x, y] = graph2;
// object
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
// Index Signatures
const nameAgeMap: { [index: string]: number } = {};
// enums
enum CardinalDirections {
    North = "no",
    East = "Ea",
    South = "So",
    West = "We"
}
// console.log(CardinalDirections.North);
// console.log(eval("3/0")) 


// can directly extend Animal interface with 'extends' keyword. also can add new fields by redefining that interface.
interface Animal1 {
    name: string;
}
interface Bear1 extends Animal1 {
    honey: boolean;
}
const bear1: Bear1 = {
    name: 'bew',
    honey: true
};
console.log(bear1.honey, bear1.name)
// have to use & symbol for extension, 
type Animal2 = {
    name: string;
}
type Bear2 = Animal2 & {
    honey: boolean;
}
const bear2: Bear2 = {
    name: 'bew',
    honey: true
};
console.log(bear2.honey, bear2.name)