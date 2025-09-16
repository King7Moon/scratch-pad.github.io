// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 *
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast)
 *     that returns a contact object.
 *
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *
 *  b. Create a factory Function called makeContactList that returns an Object
 *     that manages contacts. The contact-list object should have the following methods:
 *
 *      1. length(): returns the number of contacts within the list. (the list is `contacts`)
 *    
 * 
 *   2. addContact(contact): takes a contact object to be added to the
 *         contact-list.
 *    
 * 
 *   3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and
 *         returns the contact object if found in the contacts-list, or,
 *         undefined if the fullName does not match any contacts in the list.
 *     
 * 
 *  4. removeContact(contact): takes a contact object to be removed from
 *         the contact-list.
 *    
 * 
 *   5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should
 *         return a String formated with all the full-names of the separated
 *         with a line-break, like so:
 * 
 * I: 
 * O:
 * C:
 * E:
 *
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 * 
 * I: A value & first name string & last name string
 * O: An assembled ID, an object
 * C: must use the key names in the object
 * E: follow the instructions and review class video for help
 * 
 * just now realizing I could have made an IOCE for each function inside the factory. 
 */

function makeContact(id, nameFirst, nameLast) {
  // Solve this function first
  return { //constructs my object
    id: id, nameFirst: nameFirst, nameLast: nameLast
  };
}

function makeContactList() {
// You need something here to hold contacts. See length api for a hint:
var contacts = [];

return {
    length: function(){
      return contacts.length;
    },
    addContact: function(contact){
      contacts.push(contact);
    },
    
    findContact: function(fullName){
for (let i = 0; i < contacts.length; i++){
let contact = contacts[i];
let contactFullName = contact.nameFirst + " " + contact.nameLast;
if (contactFullName === fullName){
  return contact
}
}
return undefined; 

    },
    removeContact: function(contact){
for (let i = 0; i < contacts.length; i++){
  if (contacts[i] === contact){
    contacts.splice(i, 1);
  }
}
    },

     printAllContactNames: function(){
      let result = [];
      // stores all names

      //loop
      for (let i = 0; i < contacts.length; i++){
        let fullName = contacts[i].nameFirst + " " + contacts[i].nameLast;
        result.push(fullName);
      }
      return result.join("\n");
     } 
  
  }

}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
