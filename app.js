// Basic Unit Converter by haychpea
// Has the ability to convert:
// speed - from mph to kmh and back
// distance - from kilometers to miles and back
// temperature - from celsius to fahrenheit and back

// Define Variable names, including those whose value will be added later
let userButton = document.getElementById("enter");
let userInput;
let unitSelection = document.getElementById("unit-selection")

let chkMph = document.getElementById("chkMph");
let chkKmh = document.getElementById("chkKmh");

let resMph = document.getElementById("resMph");
let resKmh = document.getElementById("resKmh");

// assign the results div to a variable to allow for app to change DOM
let results = document.getElementById("results");

// define regex criteria for input check for floating point numbers
let numTest = new RegExp('[+-]?([0-9]*[.])?[0-9]+')

let valid = 0;
let startUnit;
let endUnit;

// define function for checking if checkboxes of the same units are active
// if they conflict, disable one of them

function enableInputs(){
    chkMph.disabled = false
    chkKmh.disabled = false
    resMph.disabled = false
    resKmh.disabled = false
}

function checkInputs(){
    enableInputs()
    valid = 0
    startUnit = ""
    endUnit = ""
    if (chkMph.checked || chkKmh.checked || resKmh.checked || resMph.checked){
        if (chkMph.checked){
            resMph.disabled = true
            resMph.checked = false
            startUnit = "mph"
            endUnit = "kmh"
            valid++
        } else if (chkKmh.checked){
            resKmh.disabled = true
            resKmh.checked = false
            startUnit = "kmh"
            endUnit = "mph"
            valid++
        } else if (resKmh.checked){
            chkKmh.disabled = true
            chkKmh.checked = false
            startUnit = "mph"
            endUnit = "kmh"
            valid++
        } else if (resMph.checked){
            chkMph.disabled = true
            chkMph.checked = false
            startUnit = "kmh"
            endUnit = "mph"
            valid++
        }
    } else {
        valid = 0
        return false
    }
}

// create function to check for valid number

function numberCheck(){
    results.innerHTML = "";
    userInput = document.getElementById("userInput").value;

    // run regex test to see if input is a number
    if (numTest.test(userInput)){
        valid++
    } else {
        valid = 0
        results.innerHTML = "<h3 style='align-text: center;'>Input is not a valid number please try again</h3>";
    }
}

// create speed conversion function
function speedConversion(startValue, startUnits){
    if (startUnits === "mph"){
        return `${parseFloat(startValue).toFixed(3)} mph is equal to ${parseFloat((startValue * 1.609344)).toFixed(3)} kmh`
    } else if (startUnits === "kmh"){
        return `${parseFloat(startValue).toFixed(3)} kmh is equal to ${parseFloat((startValue / 1.609344)).toFixed(3)} mph`
    }
}

unitSelection.onclick = () => {
    checkInputs()
}

userButton.onclick = () => {
    numberCheck()
    console.log(valid)
    if (valid == 2){
        results.innerHTML = `<h3 style='align-text: center;'>${speedConversion(userInput, startUnit)}`
    } else {
        console.log("Unsuccessful validation")
    }
}
// create distance conversion function

// create temperature conversion function

// create function to publish result to results div