process.stdin.resume();
process.stdin.setEncoding('utf8');
var input_string = '';

process.stdin.on('data', function(chunk) {
    input_string += chunk;
});

process.stdin.on("end", function () {
    test(input_string)
});

const test = (input) => {
    let splitedInput = input.split(" ")
    let numOfPeople = parseInt(splitedInput[0], 10)
    let train = parseInt(splitedInput[1], 10)
    let taxi = parseInt(splitedInput[2], 10)
    let expensesOfTrain = train * numOfPeople
    let expensesOfTaxi = taxi / numOfPeople * numOfPeople
    if(expensesOfTrain > expensesOfTaxi) {
        console.log(expensesOfTaxi)
    } else {
        console.log(expensesOfTrain)
    }
}
