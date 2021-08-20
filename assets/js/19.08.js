//lev1.1

function intro() {
    console.log("hello world")
}
intro()

intro = () => {
    console.log("hello world")
}
intro()

intro = () => console.log("hello world")
intro()

//lev1.2

function add(x, y) {
    console.log(x + y)
}
add(2, 3)

add = (x, y) => console.log(x + y)
add(2, 3)

function multiply(x, y) {

    console.log(x * y)
}
multiply(2, 3)

function my(x, y) {
    // alert(x * y)
}

my(2, 3)
// my = () => alert(x * y)

i = true
j = 'hi'
k = 1
l = { name: 'John' }
a = [0, 1]

function type(param) {
    console.log(typeof param)
}

type(i)
type(j)
type(k)
type(l)
type(a)

type = (param) =>
    console.log(typeof param)
type(i)
type(j)
type(k)
type(l)
type(a)


//lev1.4
function hero(heroName, heroPower, heroEnemy) {
    console.log(`my favorite hero from marvel is ${heroName} She can${heroPower} and her biggest enemy is ${heroEnemy}`)
}
hero("wonderwoman", "strength", "megatron")

//lev1.6
function returnOne() {
    return 1
}
let x = 1
let y = returnOne()

if (x === y) {
    console.log('wird das gedruckt?')
}


returnOne = () => { return 1 }
if (x === y) {
    console.log('wird das gedruckt?')
}

//lev1.7
calc = (value) => { return value * 2 }
console.log(calc(9))


//lev1.8
compare = (age1, age2) => {
    let alterDiff = age1 - age2
    return alterDiff
}
console.log(compare(30, 26))

//lev1.9
vorname = "Chen"
name = 'Lin'
ort = 'Berlin'
land = 'China'
me = (vorname, name, ort, land) => {
    console.log(`Mein name ist  ${vorname}  ${name} und ich bin in ${land} geboren und lerne Code bei SuperCode. Ich wohne in ${ort}.`)
}
me(vorname, name, ort, land)
