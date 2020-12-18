//Array Spread Operator

const calculateAverage = (avgType, ...numbers) => {
    let sum = 0

    numbers.forEach((num) => sum += num)

    const average = sum / numbers.length
    return `Average ${avgType} is ${average}`
}

// console.log(calculateAverage('grade', 0, 10, 1))

//////Challenge Task
const printTeam = (teamName, coach, ...players) => {
    players.forEach((player) => player)

    return (
    `Team: ${teamName},
    Coach: ${coach} and 
    Players: ${players.join(', ')}`)
}

// console.log(printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry'))

//Object Spread Operator
let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2017
}

let newHouse = {
    ...house, //Object spread operator copies the content of one object to another
    bedrooms: 3           //new object however is independent
}

newHouse.yearBuilt = 2020

// console.log(house, newHouse)

//////Challenge Task
let person = {
    name: 'Nathan',
    age: 27
}

let location = {
    city: 'Accra',
    country: 'Ghana'
}

let overview = {
    ...person,
    ...location
}

console.log(person, location, overview)

//Destructuring

const todo = {
    id: 'asdefefjj3ijd3',
    text: 'Pay the bills',
    completed: false
}

// const text = todo.text
// const completed = todo.completed

//Using destructuring

const { text:todoText, completed, details = 'No details provided', ...others } = todo

console.log(todoText)
console.log(completed)
console.log(details, others) //spreading was used to copy the rest of the objects that
                                //were not destructured to "others".


//Array Destructuring
const age = [65, 0, 13, 21]
const [firstAge, secondAge] = age  // use comma ", ," to skip to item you want to destructure

let item1 = age[0]
let item2 = age[1]

console.log(item1, item2)

console.log(firstAge)
console.log(secondAge)

