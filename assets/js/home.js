console.log("js loaded")
document.getElementById("filler").remove()

const d = new Date()
const birthDate = 20060809
var currentDateRange = configureDate(d) - birthDate
var hello = document.getElementById("helloText")

function configureDate(date) {
    var toReturn = null

    toReturn = date.getFullYear() * 100
    toReturn = (toReturn + d.getMonth() + 1) * 100
    toReturn += date.getDate()

    return toReturn
}

function getAge(dateRange) {
    var mathDate = dateRange / 10000
    mathDate = Math.floor(mathDate)

    return mathDate
}

var colinAge = getAge(currentDateRange)

console.log("Calculated age: " + colinAge)

hello.innerHTML = hello.innerHTML.replace("[{1}]", colinAge)