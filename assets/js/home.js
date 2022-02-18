console.log("js loaded")
document.getElementById("filler").remove()

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

function getColinAge() {
    d = new Date()
    console.log(d)
    currentDateRange = configureDate(d) - birthDate
    return getAge(currentDateRange)
}

var d
const birthDate = 20060809
var currentDateRange
var hello = document.getElementById("helloText")

var colinAge = getColinAge()

console.log("Calculated age: " + colinAge)

hello.innerHTML = hello.innerHTML.replace("[{1}]", colinAge)
var previousAge = colinAge.toString()

var mouseDown = false;
document.body.onmousedown = function() { 
  mouseDown = true;
  colinAge = colinAge == previousAge ? colinAge : getColinAge()
  hello.innerHTML = hello.innerHTML.replace(previousAge, colinAge)
}
document.body.onmouseup = function() {
  mouseDown = false;
}

function openTab(url) {
    window.open(url, "_blank")
}