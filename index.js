// 1. Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false


function isString(data){
    console.log(data.constructor.name);
    const isString = data.constructor.name == "String";
    return isString;
}

console.log(isString([1, 2, 4, 0]));
console.log(isString("hello"));






// 2. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

function isBlank(string){
    let result = string ? true : false;
    return result;
}

console.log(isBlank(""));





// 3. Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

function stringToArray(string){
    const arrayOfWords = string.split(" ");
    return arrayOfWords;
}

console.log(stringToArray("This is the best Js program ever!"));






// 4. Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

function truncateString(string, index) {
    const truncatedString = string.substring(0, index);
    return truncatedString;
}


console.log(truncateString("Javascript", 4));




// 5. Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."



// function v1 -- it capitalize the 1st letter of each one, but if user inputs only the 1st name, it will pick only the 1st letter - bug
function abbrev_name(name_lastName){
    if(!typeof name_lastName === "string"){
        alert("invalid input!");
        return;
    }

    let abbrev = name_lastName.trim().substring(0, name_lastName.indexOf(" ") + 2).split("");

    
    let finalAbbrev = [];

    for(let i = 0; i < abbrev.length; i++){
        if(i === 0 || i === abbrev.length - 1){
            finalAbbrev.push(abbrev[i].toUpperCase());
        }
        else {
            finalAbbrev.push(abbrev[i]);
        }
    }

    return finalAbbrev.join("") + ".";
}

console.log(
    "version 1 --> ",
    abbrev_name("  Alvaro  ")
);





//function v2 -- it distinguishes when user inputs either first name only or first and last name - it also capitalizes the first letter of each one

function abbrev_name2(name_lastName){
    let usersInput = name_lastName.trim();

    //We checked if user inputed only firstName or first and last name
    if(usersInput.includes(" ")) {
        usersInput = usersInput.substring(0, usersInput.indexOf(" ") + 2);
        // let finalAbbrev = [];

        // for(let i = 0; i < usersInput.length; i++) {
        //     if(i === 0 || i === usersInput.length - 1){
        //         finalAbbrev.push(usersInput[i].toUpperCase());
        //     }
        //     else {
        //         finalAbbrev.push(usersInput[i]);
        //     }
        // }

        // return finalAbbrev.join("");
        return usersInput.charAt(0).toUpperCase() + usersInput.substring(1, usersInput.length - 1) + usersInput[usersInput.length - 1].toUpperCase() + ".";
    }
    else {
        return usersInput[0].toUpperCase() + usersInput.substring(1, usersInput.length);
    }

    
}

console.log(
    "Version 2 -->",
    abbrev_name2("  enrique iglesias    "));