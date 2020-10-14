// 一个数组

const array = [1,4,7,9,12,15]

const target = 21
let i = 0
let j = array.length - 1

let sum = array[i] + array[j]
console.log('===>',)
while (sum !== target) {
    if(sum < target){
        i += 1
    }else if(sum > target){
        j -= 1
    }

    if(i>=j){
        break
    }
    sum = array[i] + array[j]
}

console.log(i, j)



