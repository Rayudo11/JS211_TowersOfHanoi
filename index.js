// * This js file is incomplete. It will log to the console the elements you click
    // call another function and set stone. You will have to work through the logic
    // of the game as you know it from building it in the terminal. Work through the
    // puzzle slowly, stepping through the flow of logic, and making the game work.
    // Have fun!!
// * First run the program in your browser with live server and double-click on the row you'd like to select an element from.
// * Why are you get a warning in your console? Fix it.
// * Delete these comment lines!

let stone = null


// this function is called when a row is clicked. 
// Open your inspector tool to see what is being captured and can be used.
const selectRow = (row) => {
  const currentRow = document.getElementById(row.id)
  
 if(!currentRow.lastElementChild && !stone) {
  console.log('pick a valid stone')
 }

 
 if(currentRow.lastElementChild && !stone){
  return pickUpStone(currentRow)


 }
if(stone && !currentRow.lastElementChild){
  return dropStone(currentRow)
  
} 

if (currentRow.lastElementChild.getAttribute('id') > stone.getAttribute('id')){
  return dropStone(currentRow)
}



  console.log("Yay, we clicked an item", row)
  console.log("Here is the stone's id: ", row.id)
  console.log("Here is the stone's data-size: ", currentRow)
  
  
 
} 

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
const pickUpStone = (rowID) => {
  
  stone = rowID.lastElementChild;
   rowID.removeChild(rowID.lastElementChild)
  console.log(stone)
}

// You could use this function to drop the stone but you'll need to toggle between pickUpStone & dropStone
// Once you figure that out you'll need to figure out if its a legal move...
// Something like: if(!stone){pickupStone} else{dropStone}

const dropStone = (rowID) => {
  console.log(rowID)
 rowID.appendChild(stone)

 checkForWin()
   
 


 stone = null
}

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.

const checkForWin = ()=> {
  if (document.getElementById('top-row').childElementCount == 4 ){
    console.log('won')
    return true
    
  }
  else {
    return false
  }
}