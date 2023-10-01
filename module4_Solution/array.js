var names = ["John", "Jane", "Jerry", "Jack", "Maria"];

function greet(name) {
    if (name.charAt(0).toLowerCase() === 'j') {
        return "Goodbye " + name;
    } else {
        return "Hello " + name;
    }
}

for (var i = 0; i < names.length; i++) {
    console.log(greet(names[i]));
}
