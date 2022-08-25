const Singleton  = (function() {
    let instance;
    
    function createInstance() {
        const object = new Object({name: 'maya'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA.name);
console.log(instanceA === instanceB);

//  we cannot have more than one instance from a singleton
//  repeated call to the constructor only returns one instance in singleton

//   use signleton when you want one single user at a time. Maybe a login user where you want only one user createad at a time