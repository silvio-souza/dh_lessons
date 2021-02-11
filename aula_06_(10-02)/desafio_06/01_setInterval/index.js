let arr = [0]
console.log(arr)

setInterval(function() {
    arr.push(arr.length)
    console.log(arr)
}, 5000)