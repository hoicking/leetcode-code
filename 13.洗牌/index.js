const arr = [1,2,3,4,5,6,7,8,9]


// shuffle

const copy = arr.slice()
const shuffled = []

for(let i = 0; i < arr.length; i++){
    const random = Math.floor(Math.random() * copy.length)
    const per = copy.splice(random, 1)[0]
    shuffled.push(per)
}

console.log(shuffled)

