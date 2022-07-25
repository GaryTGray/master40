// act1

// let age = 10;
// let country = "UK"
// if (age > 17 && country == "UK") {
//     console.log (`Yes I can serve you`)
// }
// else {
//     console.log (`You aren't old enough`)
// }



// act2


// let anyTopping = "Pepperoni"
 
// switch(anyTopping){
//       case "tomato":
//       case "Peppers":
//       case "Ham":
// console.log("These are important ingredients for my pizza.");
//       break;
//       case "Pepperoni":
// console.log(`I don't mind having ${anyTopping} on my pizza.`)
//       break;
//       default:
// console.log("This topping should not be on pizza");
//     }

// act3

// let password = "123456789"
// if (password.length < 8) {
//     console.log("Password is too short. must be 8 char or more.");
// }
// else (console.log(password));


// strtch

// let num = 13
// if (num % 3 == 0 || num % 5 == 0) {
//     console.log(`${num} is divisible by either 3 or 5.`);
// }
// else (console.log(`${num} is NOT divisible by 3 or 5.`))



// act4

let num = 11
switch (true) {
    case num % 3 == 0 && num % 5 == 0:
        console.log("Fizz Buzz");
        break;
    case num % 3 == 0:
        console.log("Fizz");
        break;
    case num % 5 == 0:
        console.log("Buzz");
        break;
    default:
        console.log(`${num}`)
}