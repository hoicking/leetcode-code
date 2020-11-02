const array2D = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  
  

  function checkTarget( array,target){
    const m = array.length
    const n = array[0].length

    let row = 0
    let column = n - 1

    while(column>=0 , row < m){
        const current = array[row][column]
        if(current === target){
            return true
        }
        if (current < target){
            row++
        }

        if(current > target){
            column-- 
        }
    }
    return false
  }

  console.log(checkTarget(array2D, 20))