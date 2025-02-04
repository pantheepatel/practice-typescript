interface globe {
    getArea: (name) => string;
}

class Person implements globe {
    // can define name like this and in constructor too.
    // private readonly name: string;
    // protected name: string; 

    public constructor(protected readonly name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getArea(nameArea: string): string {
        return nameArea;
    }

}
class Person2 extends Person {

    public constructor(name: string) {
        super(name);
        name = super.getName(); // can not access when name is private, but can access when it is protected
    }

    public override getName(): string {
        return "adf";
    }

}

const person = new Person("Jane");
const person2 = new Person2("Jane2");

console.log(person.getName());
console.log(person2.getName());
console.log(person["name"]);
console.log(person2["name"]);


abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}