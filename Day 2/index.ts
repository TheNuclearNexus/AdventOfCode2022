// Day 1 Index
import * as fs from 'fs'


const pairToIndex = (pair: string[]) => [(pair[0].charCodeAt(0) + 1) % 3, (pair[1].charCodeAt(0) - 1) % 3]
const calcResult = (i: number, j: number) => (Math.abs(i - j + 4)) % 3

async function main() {

    // Load Data
    const rawData = fs.readFileSync('input.txt', { encoding: 'utf8' })

    // Select all elf groupings of calories
    const matches = rawData.split('\n').slice(0, -1).map(e =>pairToIndex(e.split(' ')))
    console.log(
        matches
            .map(m => (calcResult(m[1], m[0]) * 3) + m[1] + 1)
            .reduce((prev, cur) => prev+cur, 0), 
        matches
            .map(m => (m[1] * 3) + calcResult(m[1], Math.abs(m[0] - 2)) + 1)
            .reduce((prev, cur) => prev+cur, 0))
}

main()