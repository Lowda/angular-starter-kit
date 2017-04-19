interface Person {
    firstName: string;
    lastName: string;
}

const greeter = (person: Person) => {
    return `Hello ${person.firstName} ${person.lastName}`
}

const user = { firstName: "Newbie", lastName: "User" };
document.getElementById('app').innerHTML = greeter(user);
