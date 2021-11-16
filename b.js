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
    const splitedInput = input.split("\n")
    const borderHeight = splitedInput[0].split(" ")[1]
    let enableCount = 0
    splitedInput[1].split(" ").forEach(height => {
        if(height >= borderHeight) {
            enableCount++
        }
    })
    console.log(String(enableCount));
}