const unSort = [10,2,3,8,6,4,5,1,7,9]

// 冒泡排序  n^2    
for(let i = 0; i< unSort.length; i++){

    for(let j = 0; j< unSort.length - i; j++){
        if(unSort[j]> unSort[j+1]){
            let flag = unSort[j+1]
            unSort[j + 1] = unSort[j]
            unSort[j] = flag
        }
    }
}



console.log(unSort)