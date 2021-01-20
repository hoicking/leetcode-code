// 快速排序

const unSort = [6,2,3,8,4,5,1,7,9,10]

function quickSort(arr){

    if(arr.length <= 1){
        return arr
    }

    const midIndex = Math.floor(arr.length/2)

    const midValue = arr.splice(midIndex, 1)

    let left = []
    
    let right = []

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element< midValue){
            left.push(element)
        }else{
            right.push(element)
        } 
    }
    return quickSort(left).concat(midValue, quickSort(right))
    
}
  console.log(quickSort(unSort))