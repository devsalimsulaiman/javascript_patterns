//  BAsic Structure

        //this is an IIFE (immediately invoked fn expression)
        //blueprint for module pattern..
// (function() {
//     //  Declare private Vars and functions in here

//     return{
//         //  Declare public vars and functions in here
//     }
// })();


    //  STANDARD MODULE PATTERN
// const UICtrl = (function() {
//     let text = 'Salam Cairo';

//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function(){
//             changeText();
//             console.log('text changed');
//         }
//     }
// })();

// UICtrl.callChangeText();





    //  REVEALING PATTERN
const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('item added..');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(2));