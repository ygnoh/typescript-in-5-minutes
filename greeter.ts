interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person;
}

const user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);