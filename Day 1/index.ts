// Day 1 Index
import * as fs from 'fs'

function sum(elf: number[]) {
    let sum = 0;
    elf.forEach((e) => sum += e)
    return sum
}

async function main() {
    // Load Data
    const rawData = fs.readFileSync('input.txt', { encoding: 'utf8' })

    // Select all elf groupings of calories
    const elves = rawData.split('\n\n').map(e => sum(e.split('\n').map(n => n !== '' ? Number.parseInt(n) : 0)))
    if (elves === undefined)
        return

    console.log('Part 1:', elves[elves.length - 1])
    const topThree = elves.splice(elves.length - 3, 3)
    console.log('Part 2: ', sum(topThree))
}

main()