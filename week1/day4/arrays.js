// act1

// let films = [
//     "blade runner",
//     "a new hope",
//     "2001"
// ]
// films.push ("donnie darko");
// films.push ("stargate");
// let num = (films.length);
// for (let i = 0; i < num; i++) {
//     console.log (films[i])
// }

// act3


// for (let i = 9; i >= 0; i--) {
//     console.log (i)
// }



// act4


// let films = [
//     "Terminator",
//     "Poltergeist",
//     "Ghostbusters",
//     "Smurfs"
// ]
// let num = (films.length);
// for (let i = 0; i < num; i++) [
//     console.log (films[i])
// ]
// if (films[2] == "Ghostbusters") {
//     console.log ("Yay it's Ghostbusters")
// }
// else (console.log ("Boo! we want Ghostbusters!"))


// act6

let bobs= [
    "pete",
    "claire",
    "mark",
    "jane"
]
let hannahs = [
    "claire",
    "jane",
    "walter",
    "mike"
]
for (let i = 0; i < hannahs.length; i ++) {
    for (let j = 0; j < bobs.length; j ++) {
        if (bobs[i] == hannahs[j]) {
            console.log (`Both lists have these names: ` + bobs[i])
        }
     }
}