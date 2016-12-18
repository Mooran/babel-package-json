var Greeter = (function () {
    function Greeter(data) {
        this.data = data;
    }
    Greeter.prototype.run = function () {
        console.log(this.data);
    };
    return Greeter;
}());
var greeter = new Greeter("Clark");
greeter.run();
//# sourceMappingURL=hello.js.map