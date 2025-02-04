const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
}
let str1: string = addOrConcat(2, 2, 'concat') as string;
let num1: number = addOrConcat(2, 2, 'concat') as number;
console.log(str1, num1);
console.log((10 as unknown) as string);