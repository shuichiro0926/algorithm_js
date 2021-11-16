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
    let numArray = input.split("")
    numArray.pop()
    if(numArray.length == 1) {
        console.log(String(0))
    } else {
        let count0 = 0
        let count1 = 0
        numArray.forEach(num => {
            if(num == 0) {
                count0++
            } else {
                count1++
            }
        });
        if(count0 == 0 || count1 == 0) {
            console.log(String(0))
        } else if(count0 < count1) {
            console.log(String(count0 * 2))   
        } else {
            console.log(String(count1 * 2))
        }
    }
}