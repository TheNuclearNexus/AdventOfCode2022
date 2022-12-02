// Day 1 Index
import * as fs from 'fs'

async function main() {
    // Load Data
    const rawData = fs.readFileSync('input.txt', { encoding: 'utf8' })

    // Select all elf groupings of calories
    const elves = rawData.split('\n\n').map(e => e.split('\n').map(i => i !== '' ? Number.parseInt(i) : 0).reduce((a,b)=> a+b)).sort((a,b) => a-b)
    console.log('Part 1:', elves[elves.length - 1])
    console.log('Part 2:', elves.splice(elves.length - 3, 3).reduce((a,b)=>a+b))
}

main()