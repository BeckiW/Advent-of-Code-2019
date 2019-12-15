const fs = require('fs')
const path = require('path')

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'))
    .toString()
    .trim()
    .split(/,\s*/g)
    .map(line => Number(line))



const run = (noun, verb) => {
    const ops = input.slice(0);
    ops[1] = noun;
    ops[2] = verb;

    let pointer = 0;
    while (ops[pointer] !== 99) {
        switch (ops[pointer]) {
            case 1: {
                const a = ops[pointer + 1];
                const b = ops[pointer + 2];
                const out = ops[pointer + 3];
                ops[out] = ops[a] + ops[b];
                break;
            }
            case 2: {
                const a = ops[pointer + 1];
                const b = ops[pointer + 2];
                const out = ops[pointer + 3];
                ops[out] = ops[a] * ops[b];
                break;
            }
            default:
                console.log("Unknown op");
        }
        pointer += 4;
    }

    return ops[0];
};

const find = value => {
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            const output = run(noun, verb);
            if (output === value) {
                return [noun, verb];
            }
        }
    }
};

console.log(run(12, 2));
const [noun, verb] = find(19690720);
console.log(100 * noun + verb);