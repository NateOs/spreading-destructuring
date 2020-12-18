const calculateAverage = (avgType, ...numbers) => {
    let sum = 0

    numbers.forEach((num) => sum += num)

    const average = sum / numbers.length
    return `Average ${avgType} is ${average}`
}

// console.log(calculateAverage('grade', 0, 10, 1))

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