class Message {
    constructor (author, text) {
        this.author = author;
        this.text = text;
        this.time = this.gettime();
    }

    toString() {
        return `${this.time} ${this.author}: ${this.text}`;
    }

    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }

}

class Messenger {
    messages = [];

    show_history() {
        this.messages.map(v => console.log(v.toString()));
        document.querySelector(".container").innerHTML =  `<div> ${this.messages.map(v => (v.toString())).join(" ")} </div>`;
    }

    send(author, text) {
        let message = new Message(author, text);
        this.messages.push(message);
    }
}

let messenger = new Messenger()
messenger.send('Togrul', 'Salam')
messenger.send('Məryəm', 'Salamm')
messenger.send('Nazim', 'Salamm')
messenger.show_history();
