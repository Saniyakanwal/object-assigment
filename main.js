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
var employee = {
    name: "Saniya kanwal",
    department: "Governor house",
    role: "Intern",
    skill: ["coder", "problem solver"]
};
console.log(employee);
var employee1 = {
    name: "Aqsa Noor",
    department: "Medical",
    contact: {
        phone: +92345126897,
        email: "noor324@gmail.com",
    },
    role: "Manager",
    skill: ["medical", "pharmacy"]
};
console.log(employee1);
var car = {
    engine: {
        horsepower: 300,
    },
    getHorsepower: function () {
        console.log("The horsepower of the car is:".concat(car.engine.horsepower));
    }
};
car.getHorsepower();
var tshirt = {
    name: "T-shirt",
    price: 300,
    color: "red",
    inventory: {
        stock: 10,
        colorOptions: ["red", "blue", "yellow", "white"],
        changeColor: function (newColor) {
            tshirt.color = newColor;
            if (tshirt.color === "black") {
                var ipercent10 = tshirt.price / 100 * 10;
                tshirt.price += ipercent10;
            }
            else if (tshirt.color === "blue") {
                var dpercent5 = tshirt.price / 100 * 5;
                tshirt.price -= dpercent5;
            }
            else if (tshirt.color === "yellow") {
                var ipercent3 = tshirt.price / 100 * 3;
                tshirt.price += ipercent3;
            }
            else if (tshirt.color === "white") {
                var dpercent6 = tshirt.price / 100 * 6;
                tshirt.price -= dpercent6;
            }
        }
    }
};
console.log(tshirt);
tshirt.inventory.changeColor("black");
console.log(tshirt);
tshirt.inventory.changeColor("blue");
console.log(tshirt);
