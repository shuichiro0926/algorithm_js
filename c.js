
const test = (input) => {
    const splited = input.split("\n")
    limitTime = parseInt(splited[0].split(" ")[1])
    splited.shift()
    let minimumCost = 1001
    splited.forEach(e => {
        const cost = parseInt(e.split(" ")[0])
        const time = parseInt(e.split(" ")[1])
        if(time <= limitTime && cost < minimumCost) {
            minimumCost = cost
        }
    });

    if(minimumCost == 1001) {
        console.log("TLE")
    } else {
        console.log(minimumCost)
    }
}

test("3 70\n7 60\n1 80\n4 50")
test("4 3\n1 1000\n2 4\n3 1000\n4 500")
test("5 9˜\n25 8\n5 9\n4 10\n1000 1000\n6 1")