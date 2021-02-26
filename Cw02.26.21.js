//let teachers= ['Melissa', 'Yusuf', 'bob'];
//console.log(teachers[1]);
//console.log(teachers.length);
// push adds items to the end of the list. 
// pop deletes items from the end of the list.
// both changes the original array. 
// unshift adds to the beginning of the list. 
// shift removes from the beginning of the list. 
//let teachers= ['bob', 'gabe', 'taylor', 'sarah'];
//teachers.unshift('Laura');
//console.log(teachers);
//teachers.shift('bob');
//console.log(teachers)
//teachers[4] = "marcus"
//console.log(teachers);
//finding an item
let grades= [99,90,89,50];
let failing= grades.indexOf(50);
console.log(failing);
// slicing is picking which info you want.

let animals= ['frogs', 'bats', 'giraffes', 'gorillas', 'lions'];
let newAnimals= animals.slice(2,4) //2 is the starting point. 4 is ending point. 
console.log(newAnimals);
console.log(animals);

//splicng cutting the info you want while adding what you want.  Slicing and splicing changes the original array

//Iterating through an Array (Looping through an Array)

//For Loops
//let animals= ['frogs', 'bats', 'hedgehog', 'sharks', 'camel', 'alligator', 'parrot'];

//for (let i=0; i<= animals.length; i++){
    //animals[0];
    //animals[1];

    //console.log(`My favorite animal today is: ${animals[i]}`);
//}

//What are Functions//
//unction : js keyword -- Hey I'm about to define a function
// nameOfYourFunction: Hey when i reference this function I'm going to call by its given name -- dev gets to define the name of the function-- camelCase
//parameters : defined by parenthesis-- items/variables/things that are required for the function to run. 
//let donationMade = prompt('how much do you want to donate') //amt of money user wants to donate. 
//function nameOfFunction(donationMade, amountSoFar){
    //console.log(`so far we have ${donationMade + amountSoFar}`);
//}
//RUN THE FUNCTION// 

// sorting arrays//

let scores = [100, 54, 300, 23, 90];
scores.sort();
console.log(scores);

//objects
//a way to store lots of info with 'labels'
//defined with a curly bracket {}
//labels are called properties.
let course= {
    instructor: 'Laura',
    ta: ['Melissa', 'Yusuf'],
    length: 4,
    students: 36,
    subject: 'javascript'

}

//let zoo = {
    //reptile: ['crocodile', 'snakes', 'lizards', 'horned frogs'],
    //amphibian: 'frogs',
    //mammals: 'dolphins',
    //rodents: 'gopher'
//}
//zoo.amphibian = 'newt'
//zoo.mammals= 'sheep'
//console.log(zoo);

// adding a key:value pair to the object 
//zoo.marsupials= 'koala';
//console.log(zoo);

// accessing items in an object

let teacher = course.instructor;
console.log(teacher);

console.log(course.students);

//zoo example

let zoo = {
    reptile: ['crocodile', 'snakes', 'lizards', 'horned frogs'],
    sections: ['safari', 'aquarium', 'aviary'],
    management: {
        ceo: 'tom',
        vp: 'liz',
        zookeepers: ['jake', 'david', 'rose', 'alexis']
    }
}

console.log(zoo.repitle[1]);
console.log(zoo.sections[2]);
console.log(zoo.management.vp);

//typeof --js keyword that provides the data type of a value/variable