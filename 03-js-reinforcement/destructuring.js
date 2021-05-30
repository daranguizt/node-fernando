
const deadEnd = {
    name: 'Ruijerd',
    lastName: 'Supardia',
    power: 'Third Eye',
    getName() {
        return `${this.name} ${this.lastName} ${this.power}`;
    }
}

//console.log(deadEnd.getName());

// const name = deadEnd.name;
// const lastName = deadEnd.lastName;
// const power = deadEnd.power;

//equivalent
const {name, lastName, power, getName, age = 500} = deadEnd;

console.log(name, lastName, power, age);

function printCharacter({name, lastName, power, getName, age = 500}){
    console.log(name, lastName, power, age);
}

printCharacter(deadEnd);


// ARRAYS

const chars = ['Rudeus', 'Eris', 'Ruijerd'];

const h1 = chars[0];
const h2 = chars[1];
const h3 = chars[2];

console.log(h1, h2, h3);

//equivalent
const [first, second, third] = chars;

console.log(first, second, third);

//other ways 
const [, ,three] = chars; //extracts third