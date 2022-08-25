//  Mediator is an interface for communicating with what is called colleagues; they are just mediator objects. Best example is a chat room. Chatroom = mediator, users = colleagues.

class User {

    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, to){
        this.chatroom.send(message, this, to);
    }

    receive(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = {};

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to){
            if(to){
                //  Single user message
                to.receive(message, from);
            }else{
                //  Broadcast message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('Hello jeff', jeff);
sara.send('Hello brad you are the best dev ever!', brad);
jeff.send('Hello everyone!');