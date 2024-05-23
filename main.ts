/*Part 1: Employee Data
Challenge:
1. Design a type alias named Employee to represent an employee object with properties like
name (string), department (string), and role (string).
2. Include an optional nested object named contact to hold phone and email information (if
provided).
3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or
"Intern".
4. Make the skills property an optional array of strings for listing an employee's skills (if
any).*/

type Employee = {
    name : string,
    department: string,
    contact?: {phone: number,
              email: string
};
role: "Manager"|"Engineer"|"Intern"
skill: string[]
};
const employee:Employee = {
    name: "Saniya kanwal",
    department: "Governor house",
    role: "Intern",
    skill:["coder","problem solver"]
};
console.log(employee);

const employee1 : Employee = {
    name: "Aqsa Noor",
    department: "Medical",
    contact:{
             phone:+92345126897,
             email:"noor324@gmail.com",
},
role: "Manager",
skill:["medical","pharmacy"]
};
console.log(employee1);
//--------------------------------------------------------------------------------------

/*Part 2: Car Details
Challenge:
1. Design a type alias named Car to represent a car object.
2. Include a nested object named engine within Car, containing a property named
horsepower (number).
3. Define a function named getHorsepower directly within the Car type alias to retrieve the
engine's horsepower.*/

type Car = {
    engine:{
        horsepower:number
    };
    getHorsepower:() => void
}
const car:Car = {
    engine: {
        horsepower:300,
    },
    getHorsepower:() => {
        console.log(`The horsepower of the car is:${car.engine.horsepower}`);
    }
}
car.getHorsepower()
//--------------------------------------------------------------------------------------

/*Part 3: Colorful T-Shirts
Challenge:
1. Design a type alias named Product to represent a T-shirt object with properties like name
(string), price (number), and color (string).
2. Include a nested object named inventory within Product. This inventory object
should have two properties:
o stock (number): Represents the number of T-shirts available.
o colorOptions (optional array of strings): Lists available colors (if any).
3. Inside the inventory object, define a function named changeColor. This function
accepts a new color string as an argument. When called, it should:
o Update the color property of the Product object.
o Adjust the price based on the new color (implement your own logic, e.g.,
increase by 10% for red, decrease by 5% for blue).*/

type Tshirt = {
    name : string,
    price : number,
    color : string,
    inventory : {
        stock : number,
        colorOptions : string[],
        changeColor : (newColor:string)=>void
    };
};
const tshirt:Tshirt = {
    name : "T-shirt",
    price : 300,
    color : "red",
    inventory : {
        stock : 10,
        colorOptions : ["red","blue","yellow","white"],
        changeColor : (newColor:string)=>{
            tshirt.color = newColor;
        if(tshirt.color === "black"){
           let ipercent10 =tshirt.price/100*10
           tshirt.price += ipercent10
        } 
        else if (tshirt.color === "blue"){
            let dpercent5 = tshirt.price/100*5
            tshirt.price -= dpercent5
        }
        else if (tshirt.color === "yellow"){
            let ipercent3 = tshirt.price/100*3
            tshirt.price += ipercent3
        }
        else if (tshirt.color === "white"){
            let dpercent6 = tshirt.price/100*6
            tshirt.price -= dpercent6
        }
    }
    }
};
console.log(tshirt)
tshirt.inventory.changeColor("black")
console.log(tshirt)
tshirt.inventory.changeColor("blue")
console.log(tshirt)