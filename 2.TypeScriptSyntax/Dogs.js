var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Doggo = (function () {
    function Doggo() {
        this.size = "Average";
        this.color = "Majestic Orange";
        this.age = 21;
    }
    Doggo.prototype.bark = function () {
        console.log("Ruff!");
    };
    return Doggo;
}());
var Pupper = (function (_super) {
    __extends(Pupper, _super);
    function Pupper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = "Smol";
        _this.age = 3;
        return _this;
    }
    Pupper.prototype.bark = function () {
        console.log("Yip!");
    };
    return Pupper;
}(Doggo));
var Woofer = (function (_super) {
    __extends(Woofer, _super);
    function Woofer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = "Big";
        _this.age = 60;
        _this.color = "Brown";
        return _this;
    }
    return Woofer;
}(Doggo));
var doggo = new Doggo();
var pupper = new Pupper();
var woofer = new Woofer();
console.log("Doggo bark:");
doggo.bark();
console.log("Pupper bark:");
pupper.bark();
console.log("Woofer bark:");
woofer.bark();
console.log("Doggo age: " + doggo.age);
console.log("Pupper age: " + pupper.age);
console.log("Woofer age: " + woofer.age);
