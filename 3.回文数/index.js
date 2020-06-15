function magicNum(num){
    const magic = num.toString().split("").reverse().join("")

    return num.toString()===magic? true: false
}