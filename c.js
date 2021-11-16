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
        console.log(String(minimumCost))
    }
}