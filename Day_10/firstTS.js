function greeter(g){
    console.log('Welcome to Typescript', concat(g));

}
var n = 'Terence O Adebiyi';
greeter(n)


//  Implicit numerical data //

var y = 10;
y = 6;

// implicit boolean data type //

var isCorrect;
isCorrect = true

// implicit data type in an array //

var colors = ['red', 'blue', 'Green'];
var nums = [1,3,5,4,10];

//  Combine data type in an Array //

var dtype = [3, 'martha', false];

// never Data type
// let x:never = 23

// Data Type For Classes //

var m ='peter';
var mLen = m.length;
console.log("" .concat(n, 'has').concat(mlen, "letters."));


// casting in an implicit data type //

var firstName ='martha';
var lenFirstName = firstName.length;
console.log("" .concat(firstName, "had").concat(lenFirstName, 'Letters'));


//  Function IN TYPECRIPT
// Return value type

function gethour(){
    return new Date().getHours()
}

console.log('it is'+ gethour())

function greetings(){
    console.log('Welcome to Angular data type')
}

function getsum(num1, num2, name){
    name = name + ': The Sum is' + (num1+num2)
    return name;
}

console.log(getsum(6,10,'Terence'));

// three dots notations

function getAverage(){
    var n =[];
    for(var _i=0; _i < arguments.length; _i++){
        n[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    var avg = 0;
    for(var _i=0; _i < arguments.length; _i++){
        total += n[i];
        count ++;
    }
    avg = total/count;
    return avg;

}

// CLASSES IN TS

var car = /** @class */ (function (){
    function car(brand, model, yearManufacture){

        this.brand = brand;
        this.model = model;
        this.yearManufacture = yearManufacture;

    }
    car.prototype.year = function(){
        console.log(this.yearManufacture);
    };
    return car;
}());


// assign values to each class properties

var car1 = new car('Tesla', '$', 2023)

// INRERITANCE TYPE SCRIPT
// define classes

class person{
    private name = 'Terence Adebiyi'
    save(){
        console.log('Registration Successful!' + this.name)
    }
}
class customer extends person{
    sale(){
        console.log('x item sold')
    }
}

class Employee extends customer{
    salary(){
        console.log('salary paid!')
    }
}

// Regular Class

var person1 = new person
var customer1 = new customer
person1.save()
customer1.sale()

// INHERITANCE CLASS

var employee1 = new Employee
employee1.sale()
employee1.save()

