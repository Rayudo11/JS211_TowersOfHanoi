'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};




// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (startingStack,endingStack) => {
  // Your code here
  //***this function should allow to move the last  item from the starting array to the secondary array 
  //changing the order in which they are placed *//
 stacks[endingStack].push(stacks[startingStack].pop())
}
// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startingStack , endingStack) => {
  // Your code here
  // must provide a function where if the first index is greater than the following index, the function is legal. 
  //otherwise the function says 'bad move' and doesnt' continue.
  //** the following was a attempt to make a function where i seperated the individual
  //objects from the arrays and see if they were greater or lesser than the following object// */
  //if (stacks.a[0],stacks.b[0],stacks.c[0] < stacks.a[1],stacks.b[1],stacks.c[1]){
  //   console.log ('good move');
  // }
  // else{
  //   console.log('bad move');
  // }
  
  //console.log('HERE',stacks[startingStack][stacks[startingStack].length - 1])
  // console.log('HERE',stacks[startingStack].at(-1))
  //   if (stacks[endingStack].at(-1) > stacks[startingStack].at(-1)){
  //          return false
  //   }

  //This Fuction 
  startingStack = stacks[startingStack][stacks[startingStack].length - 1]
  endingStack =stacks[endingStack][stacks[endingStack].length - 1]

  if(endingStack < startingStack){
    return false
  }
     return true
  
  //if (stacks[endingStack].length === 0){
  //   return true
  // }
   return true
  //if (stacks[startingStack])
  
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  //all the inputs should be found in the last array of c and in descending order.
  
  let win = [4,3,2,1];

  if(stacks.b.toString() === win.toString() || stacks.c.toString === win.toString()){
    return true
  }else{
  return false
  }
}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startingStack, endingStack) => {
  // Your code here

  if(isLegal(startingStack,endingStack)){
  movePiece(startingStack,endingStack);
  checkForWin();
  return 'YOU WIN!!'
  }
  
}


const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
