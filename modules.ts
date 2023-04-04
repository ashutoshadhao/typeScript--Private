export const name: string = "name";
export const sayname = (): string => name;
export const sayHello = (): string => "hello";
export class Message {
    wish: string;
    constructor(wish: string) {
        this.wish = wish;
    }
    printWish() {
        console.log(this.wish);
    }
}