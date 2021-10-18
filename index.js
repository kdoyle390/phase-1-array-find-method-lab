


//find() takes a callback function as an argument 
//that returns either true or false

// const record = [
//     {year: "2018", 
//         result: "L"},
//     {year: "2017", 
//         result: "W"},
//     {year: "2016", 
//         result: "N/A"}
//     //...
//   ]

// function superbowlWin(x) {
//     return x.result === 'W'
//     }
  
  
//   console.log(record.find(superbowlWin).year);

//code so far returns {year: '1969', result: 'W'}
function superbowlWin(record) {
    if (record.result === 'W') {
      return record.year
      
    }
  }
  
  console.log(record.find(superbowlWin))