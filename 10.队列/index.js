// function Queue () {
//     this.queue = []
//     this.enqueue = enqueue
//     this.dequeue = dequeue
//     this.front = front
//     this.back = back 
//     this.toString = toString
//     this.clear = clear 
//     this.empty = empty 
//     return this
// }

// enqueue = (value) =>{
//     this.queue.push(value)
// }

// dequeue = () => {
//     if (this.queue.length > 0) {
//         this.queue.shift()
//     }
// }

// front = () => {
//     return this.queue[0]
// }

// back = () => {
//     return this.queue[this.queue.length - 1]
// }

// toString = () => {
//     return this.queue.toString()
// }

// clear = () => {
//     this.queue = []
// }

// empty = () => {
//     return this.queue.length === 0
// }

// const a = Queue.bind(this)()

// a.enqueue(1)

// console.log(a)
// console.log(a.toString())

const  Queue =function(){
    

}

Queue.prototype.test = function(){
    console.log('===just test')
}

const a = new Queue()

a.test()