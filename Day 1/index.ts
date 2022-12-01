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
    const elves = rawData.match(/([0-9]+\n)+\n/g)?.map(
        r => r.split('\n')
            // Convert numbers to Number type
            .map(n => Number.parseInt(n))
            // Cull remaining whitespace from duplicate \n
            .slice(0, -2)
    )
    if (elves === undefined)
        return
    elves.sort((a, b) => sum(a) - sum(b))

    console.log('Part 1:', sum(elves[elves.length - 1]))

    const topThree = elves.splice(elves.length - 3, 3)

    console.log('Part 2: ', sum(topThree.map(e => sum(e))))
}

main()