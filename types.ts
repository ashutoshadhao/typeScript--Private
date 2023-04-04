{
    const a: number = 0;;
    const s: string = "";
    const bool: boolean = false;
    const arr: Array<number> = []; // or const arr : number[] = [] ; 
    const x: [string, number] = ["hello", 10]; // Tuples are in same order as given in declaration
    enum Color {
        Red, Green, Blue
    };

    let c: Color = Color.Blue; // give repestive color index on one based indexing 

    // Functions 
    function getColor(): void {
        console.log("INDside Functions")
    }
    const fun = (): number => {
        return 1;
    }

    // Object 
    let obj: object = { name: "John", age: 30 };

    // Interfaces 
    interface Person {
        name: string;
        id: number;
    }
    const one: Person = { name: "John", id: 30 };

    //  Classes with interfaces
    class Employee implements Person {
        name: string;
        id: number;
        constructor(c: string, id: number) {
            this.name = c;
            this.id = id;
        }
        sayHello() {
            console.log("Hello");
        }
    }
    let emp = new Employee("Ashu", 90);
    // emp.sayHello();

    //  Unions 

    let num: number | string = "Hello";
    num = 3;

    let nums: (number | string)[] = [1, 1, 2, 23, 4, "12"];


    // Generics 

    function genericsOne<Type>(val: Type): Type {
        return val;
    }
    const cal = <Type>(products: Type[]): Type => {
        return products[0];
    }
    // console.log(cal([1, 2, 3, 4, 5, 6]));
    // console.log(genericsOne(45));

    //  Type 
    type myType = {
        id: number | string;
    }
    let three: myType = {
        id: 12,
    };
    three.id = "123";
    // console.log(three);

}