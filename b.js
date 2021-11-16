

const test = (input) => {
    const splitedInput = input.split("\n")
    const borderHeight = splitedInput[0].split(" ")[1]
    let enableCount = 0
    splitedInput[1].split(" ").forEach(height => {
        if(height >= borderHeight) {
            enableCount++
        }
    })
    console.log(enableCount);
}

test("4 150\n150 140 100 200")
test("1 500\n499")
test("5 1\n100 200 300 400 500")