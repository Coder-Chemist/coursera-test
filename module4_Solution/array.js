// Array of names
var names = ["John", "Jane", "Jerry", "Jack", "Maria"];

// Function to determine greeting based on the first letter of the name
function greet(name) {
    if (name.charAt(0).toLowerCase() === 'j') {
        return "Goodbye " + name;
    } else {
        return "Hello " + name;
    }
}

// Loop over the names and print greetings
for (var i = 0; i < names.length; i++) {
    console.log(greet(names[i]));
}
