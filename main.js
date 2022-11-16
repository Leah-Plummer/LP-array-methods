const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with. 

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result, 
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
// const InsectusContacts = () => {
//     const filteredContacts = []

//     for (const contact of contacts) {
//         if (contact.company == "INSECTUS") 
//             filteredContacts.push(contact)
//     }
//     return filteredContacts
// } 

// console.log(InsectusContacts())

// //2. an array all of the contacts, with only the name property
// const Names = () => {
//     const names = []
//     for (const contact of contacts) {
//         names.push(contact.name)
//     }
//     return names
// }

// console.log(Names())

//3. an array of all of the contacts over the age of 50
// const ContactsOver50 = () => {
//     const filteredContacts = []

//     for (const contact of contacts) {
//         if (contact.age > 50) {
//             filteredContacts.push(contact)
//         }
//     }
//     return filteredContacts
// }

// console.log(ContactsOver50())

//4. the first ten contacts when alphabetically ordered by name
// const FirstTenAlphabetically = () => {
//     const filteredContactsNames = []
//     const filteredContacts = []
//     for (const contact of contacts) {
//         filteredContactsNames.push(contact.name)
//         filteredContactsNames.sort()
      
//     }

//     for (let i = 0; i < 10; i++) {

//     for (const contact of contacts) {
//         if(contact.name == filteredContactsNames[i])
//         {
//             filteredContacts.push(contact)
//         }
//     }
    
// }        
//         return filteredContacts
// }

// console.log(FirstTenAlphabetically())

//5. the oldest person's name
const OldestName = () => {
    let name = ''
    let age = 0
    for (const contact of contacts) {
        if (age < contact.age){
            age = contact.age
            name= contact.name
           
        }
    }
    return name

}

console.log(OldestName())


//6. the contact id with the name Isabella Burke

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend

//9. the average age of the contacts

//10. the median age of the contacts