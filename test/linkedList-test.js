var expect = require('chai').expect;
var Classes = require('../lib/linkedList.js');
var LinkedList = Classes.LinkedList;
var Node = Classes.Node;

describe("The doubly linked list", function(){
  beforeEach(function() {
    this.dblList = new LinkedList();
    this.nodeA = new Node('a');
  });

  it("Should start null", function(){
    expect(this.dblList.toString()).to.equal('nil');
  });

  it("Should insert node", function(){
    this.dblList.insert(this.nodeA);
    console.log(this.dblList.toString());
    expect(this.dblList.toString()).to.equal('a');
  });

  it("Should find node with value 'a'", function(){
    this.dblList.insert(this.nodeA);
    expect(this.dblList.search()).to.equal('a');
  });

  it("Should remove node", function(){
    this.dblList.insert(this.nodeA);
    this.dblList.remove(this.nodeA);
    expect(this.dblList.toString()).to.equal('nil');
  });
});
