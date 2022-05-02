
//properties:
//  -name
//  -surname
//  -yob
//  -Sport
//  -palmares
//  -genere
//  -isretired

//  functions:
//  -getAge()
//  -bestResult()
//  -toString()




// const atlete1 = {
//         name: 'Usain',
//         surname: 'Bolt',
//         yob: 1986,   
//         sport: 'velocista',
//         palmares: [8, 11, 0, 1, 1],
//         gender: 'm',
//         retired: 2017,
//     }
//     console.log(atlete1);
const palmares=[8, 11, 0, 1, 1];

const atlete= new Atlete('Usain', 'Bolt', 1986, 'velocista', palmares, 'm', '2017');


console.log('Usain età', atlete.calculateAge());

console.log(atlete.bestResult());

console.log(atlete.toString());