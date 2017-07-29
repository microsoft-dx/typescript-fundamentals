interface Dog {
    size: string;
    color: string;
    age: number;       //in dog years, of course

    bark(): void
}

class Doggo implements Dog {
    size = "Average";
    color = "Majestic Orange";
    age = 21;

    bark() {
        console.log("Ruff!");
    }
}

class Pupper extends Doggo {
    size = "Smol";
    age = 3;

    bark() {
        console.log("Yip!");
    }
}

class Woofer extends Doggo {
    size = "Big";
    age = 60;
    color = "Brown";
}

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
