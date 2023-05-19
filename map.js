const numbers = [2,5,6,8,9,45,25,47];
const output = [];
for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled)
}
console.log(output);

function getDoubles(numbers){
    const output = [];
for(const number of numbers){
    const doubled = number * 2;
    output.push(doubled)
}
return output;
}
const result = getDoubles(numbers);
console.log("From function = ",result);

const doubleIt = num => num * 2;
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2)
console.log("Make Double Direct = ", makeDoubleDirect);
console.log("Make double 2 = ", makeDouble2);

// System One:
const marks = [2,4,6,8,10];
const outputResult = [];
for(const mark of marks){
    const doubleMark = mark *2;
    outputResult.push(doubleMark)
}
console.log("Marks = ",outputResult);

// System two
function getDoubleMarks(marks){
    const outputResult = [];
    for(const mark of marks){
        const doubleMarks = mark * 2;
        outputResult.push(doubleMarks)
    }
    return outputResult;
}
const result1 = getDoubleMarks(marks)
console.log("function double =", result1);

const students = [2,4,6,8,10];
const output2 = [];
for(const student of students){
    const doubl = student * 2;
    output2.push(doubl)
}
console.log(output2);

function getDoubl(students){
    const output2 = [];
    for(const student of students){
        const doubl = student * 2;
        output2.push(doubl)
    }
    return output2
}
const result3 = getDoubl(students);
console.log("Function double = ",result3);

const doubleIt1 = num => num * 3;
const makeDouble = numbers.map(doubleIt1)
console.log("Map double1 =", makeDouble);

const results = [3,6,9,12,15];
const output3 = [];
const triple = results.map(r => r * 3);

output3.push(triple)
console.log(output3);



const names = ['Misam', 'Marifa', 'Fatiha', 'khushboo'];
const firstLetters = names.map(name => name[0]);
const friendsLength = names.map(name => name.length);
const friendsLengthSum = names.reduce((total, name)=> total + name.length, 0)
console.log(firstLetters, friendsLength, "total sum =", friendsLengthSum);

const namess = ['Misam', 'Marifa', 'Fatiha', 'khushboo'];
namess.forEach(name => console.log(name))


