const fs = require('fs');
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');

function listContacts() {
    fs.readFile(contactsPath, 'utf8', (error, data) => {
        if (error) {
            return console.log(error);
        }
        const contacts = JSON.parse(data);
        console.log('List of contacts:');
        console.table(contacts);
    });  
}

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = {
    listContacts,
    // getContactById,
    // removeContact,
    // addContact,
}