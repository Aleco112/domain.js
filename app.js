// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3)) 
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromEuroToDollar(euro){
    return euro * oneEuroIs ['USD']
}
   


function fromDollarToYen(dollars){
    return (dollars / oneEuroIs.USD)*oneEuroIs.JPY
}
function formYenToPound(yen){
    return

}
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum : sum,
                fromEuroToDollar:fromEuroToDollar,
            fromDollarToYen:fromDollarToYen};