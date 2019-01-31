function createGreeting(name, age){
    const yearOfBirth = 2019 - age;
    return `Hi, My name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}.`;
}

const greeting = createGreeting('Kyler', 24);
console.log(greeting);

//changes made here