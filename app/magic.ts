//# sourceMappingURL=magic.js.map
class Greeter{
    saySomething(message : string ='Whats up?'){
        return message + 'something';
    }
}

var greeter = new Greeter();
greeter.saySomething('hello');