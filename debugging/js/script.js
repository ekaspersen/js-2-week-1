// 1. console.log
const working = "It works";
console.log(working);
console.log("It works");

const responseDataOne = [
    {
        name: "Hesham",
        age: 29,
    },
    {
        name: "Eskil",
        age: 21,
    },
];

const responseDataTwo = [
    {
        name: "Hesham",
        age: 29,
    },
    {
        name: "Eskil",
        age: 21,
    },
];
console.log(responseDataOne, " ", "- ResponsDataOne");
console.log(responseDataTwo, " ", "- ResponseDataTwo");
console.log(`Hello ${responseDataOne.name}`);

// 2. console.clear
//console.clear(); clear out console...
// 3. console.table();
console.table(responseDataOne);

console.clear();
////

// function plus time
function counter() {
    for (let i = 1; i <= 1000; i++) {
        console.log("Count: ", i);
    }
}
//console.time();
//counter();
//console.timeEnd();
//console.warn();
//console.error();

//mathematics

// gets average with set formula only value variable
function getAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
console.log(
    "Average: ",
    getAverage(12, 20, 10, 1000, 198, 314, 122, 43, 59, 20, 23, 89)
);
// Get average with variable number values and array length
const numbersArray = [12, 20, 10, 1000, 198, 314, 122, 43, 59, 20, 23, 89];
function getNumbersAverage(arr) {
    var total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log("Average: ", total / arr.length);
}
getNumbersAverage(numbersArray);

// API CALL
function getCatFact() {
    fetch("https://catfact.ninja/facts")
        .then((response) => {
            return response.json();
        })
        .then((jsonResponse) => {
            console.log(jsonResponse.data);
        })
        .catch((error) => {});
}
console.log(getCatFact());
