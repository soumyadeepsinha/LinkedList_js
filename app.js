const LinkedList = require('./LinkedList');

const myList = new LinkedList();
myList.insert(55);
myList.insert(66);
myList.insert(77);
myList.insert(88);
myList.insert(99);

let currentNode = myList.head;

// myList.tail = 0;

for (let i = 1; i <= myList.length; i += 1) {
  console.log(currentNode.data);
  currentNode = currentNode.next;

}

// console.log(JSON.stringify(myList, null, 2));