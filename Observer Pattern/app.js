//  Observer pattern helps us to sub and unsub from some events / functionalities.

function EventObserver() { //constructor function
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn) {
        //  filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function(item) {
            if(item != fn){
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    },
    fire: function() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}


const click = new EventObserver();

//  Events Listeners
document.querySelector('.sub-ms').addEventListener('click', () => {
    click.subscribe(getCurMillesecond);
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
    click.unsubscribe(getCurMillesecond);
});

document.querySelector('.sub-s').addEventListener('click', () => {
    click.subscribe(getCurSecond);
});

document.querySelector('.unsub-s').addEventListener('click', () => {
    click.unsubscribe(getCurSecond);
});

document.querySelector('.fire').addEventListener('click', () => {
    click.fire();
});

//  Click Handler
const getCurMillesecond = function() {
    console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}


const getCurSecond = function() {
    console.log(`Current seconds: ${new Date().getSeconds()}`);
}
