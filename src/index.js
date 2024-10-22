"use strict";
class App {
    constructor(message) {
        this.message = message;
    }
    show(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerText = this.message;
        }
    }
}
const app = new App('Olá, TypeScript!');
app.show("message");
