// 電車 A円
// タクシー B/N円
// N人

// A × N
// B/N × N = B

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

test("4 2 9")
test("4 2 7")
test("4 2 8")