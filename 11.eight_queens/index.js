// function getResult(n) {
//     const array = Array.from({
//         length: n
//     }, () => Array.from({
//         length: n
//     }, () => "*"))
//     console.log(array)

//     // queen positon
//     const queenList = []

//     for (let i = 0; i < n.length; i++) {
//         queenList.push(i)
//     }

//     function check(row,column){
//         queenList.forEach( (per,index) => {
//             if(row - index + per === column || per === row){
//                 return false
//             }
//         });
//     }
// }

// getResult(4)

const a = [1,2,3]

a.forEach(element => {
    console.log('lopp')
    if(element === 2){
        return 
    }
});

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log('----for')
    if(element === 2){
        return 
    }
    
}