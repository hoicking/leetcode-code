function calc(nums){

    const arr = nums.sort((a, b)=>{
        return b -a
    })
    console.log(arr)
}

calc([10,5,5,2])