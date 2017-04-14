// function Animal(data) {
//     this.name = data.name;
//     this.age = data.age;
//     this.color = data.color;
//     this.totalDist = 0;
//     this.run = function (m) {
//         this.totalDist += m;
//         return this.totalDist;
//         console.log(this.totalDist);
//     };
//
// }
//
// function Rabbit(data) {
//     Animal.call(this, data);
//     this.jump = function (m) {
//         console.log('The ' + this.name + ' jump more than ' + m + ' meters')
//     }
// }
//
// function Cat(data) {
//     Animal.call(this, data);
//     this.frrr = function () {
//         console.log('frrrrrr frrrr')
//     }
// }
// function Dog(data) {
//     Animal.call(this, data);
//     this.voice = function () {
//     }
// }
//
// var cat1 = new Cat({name: 'Boris', age: 3, color: 'grey'});
// var rabBit = new Rabbit({name: 'krol', age: 5, color: 'white'});

function Car(data) {
    // var color = data.color;
    // var model = data.model;
    var totalDist = 0;
    var safety = data.safety;
    var engineVolum = data.engine;
    var engineStatus = false;
    this._health = 100;
    var isMove;


    this.calcHealth = function () {
        this._health -= totalDist * engineVolum / safety;
    };
    this.move = function (dist, speed) {
        if (engineStatus === false) {
            console.error("Start engine first");
            return false
        }
        isMove = setInterval(function () {
            if (dist != 0) {
                totalDist++;
                console.log('car is moving now');
                dist--;
            }
            else {
                this.stopEngine();
            }
        }, 1000);
    };
    this.startEngine = function () {
        if (this._health > 0) {
            engineStatus = true;
            console.log('start')
        }
        else {
            console.log('Check your car')
        }
    };
    this.stopEngine = function () {
        engineStatus = false;
        clearInterval(isMove);
        this.calcHealth();
        console.info('stop');
    };
    this.getTotalDist = function () {
        return totalDist
    };

}
function Bus(data) {
    Car.call(this, data);

    var parentcalcHealth = this.calcHealth;
    this.calcHealth = function () {
        parentcalcHealth();
        this._health -= data.passengers / 0.1;
    }
}

var testCar = new Car({
    safety: 5,
    engine: 1.6
});
var testBus = new Bus({
    safety: 10,
    engine: 2
});