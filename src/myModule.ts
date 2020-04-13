export const hi: string = "Hi";

export class Beispiel extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = "<h1>Hi</h1>";
    }
}
