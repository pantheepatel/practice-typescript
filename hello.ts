
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
    North=1,
    East,
    South,
    West
}
console.log(CardinalDirections.North);