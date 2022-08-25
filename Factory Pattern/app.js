// FACTORY PATTERN
// for creating interface for creating multiple objects but we can let sub classes define which classes to instantiate. Oftne used in apps to manage and maintain and manipulate colection of objects. eg members in a paid application membership.

//we create a member type that creates a new member based on type

class MemberFactory {
    constructor() {
        this.createMember = function (name, type) {
            let member;

            if (type === 'simple') {
                member = new SimpleMembership(name);
            } else if (type === 'standard') {
                member = new StandarMembership(name);
            }
            else if (type === 'super') {
                member = new SuperMembership(name);
            }

            member.type = type;

            member.define = function () {
                console.log(`${this.name} has ${this.type} membership that costs ${this.cost}`);
            };

            return member;
        };
    }
}



class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = '$5';
    }
}



class StandarMembership {
    constructor(name) {
        this.name = name;
        this.cost = '$15';
    }
}



class SuperMembership {
    constructor(name) {
        this.name = name;
        this.cost = '$25';
    }
}




let members = [];

const factory = new MemberFactory();

members.push(factory.createMember('Maya', 'super'));
members.push(factory.createMember('Kim', 'standard'));
members.push(factory.createMember('Jeremy', 'simple'));

members.forEach(function(member) {
    member.define();
});