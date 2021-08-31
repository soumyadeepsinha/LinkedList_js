const LinkedlistNode = require('./LinkedlistNode');

const newNode = new LinkedlistNode(66);
const someNode = new LinkedlistNode(77);
const someOtherNode = new LinkedlistNode(88);
const anOtherNode = new LinkedlistNode(99);

newNode.next = someNode;
someNode.next = someOtherNode;
someOtherNode.next = anOtherNode;

console.log(newNode);
// console.log(someNode);
// console.log(someOtherNode);