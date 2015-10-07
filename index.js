var Classes = require('./lib/linkedList.js');
var LinkedList = Classes.LinkedList;
var Node = Classes.Node;

var dblList = new LinkedList();
var output = dblList.toString();
var nodeA = new Node('a');
var nodeB = new Node('b');
var nodeC = new Node('c');
var nodeD = new Node('d');

console.log(dblList.toString());
dblList.insert(nodeA);
dblList.insert(nodeB);
dblList.insert(nodeC);
console.log(dblList.toString());

console.log(dblList.search('b'));
console.log(dblList.search('d'));

dblList.insert(nodeD);
console.log(dblList.toString());

console.log(dblList.remove(nodeB));
console.log(dblList.toString());
console.log(dblList.remove(nodeD));
console.log(dblList.toString());
console.log(dblList.remove(nodeA));
console.log(dblList.toString());
console.log(dblList.remove(nodeB));
console.log(dblList.toString());
console.log(dblList.remove(nodeC));
console.log(dblList.toString());
