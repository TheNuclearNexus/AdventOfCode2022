// Day 1 Index
import * as fs from 'fs'

const winTable = [
               //Rock   Paper Scissors
    /*Rock*/      [1,     0,     2],
    /*Paper*/     [2,     1,     0],
    /*Scissors*/  [0,     2,     1]
]

function pairToIndex(pair: string[]) {
    return [(pair[0].charCodeAt(0) + 1) % 3, (pair[1].charCodeAt(0) - 1) % 3]
}

async function main() {
    // Load Data
    const rawData = fs.readFileSync('input.txt', { encoding: 'utf8' })

    // Select all elf groupings of calories
    const matches = rawData.split('\n').slice(0, -1).map(e =>pairToIndex(e.split(' ')))
    
    let partOneScore = 0
    let partTwoScore = 0
    for(let m of matches) {
        partOneScore += (winTable[m[1]][m[0]] * 3) + m[1] + 1
        partTwoScore += (m[1] * 3) + winTable[m[1]][Math.abs(m[0] - 2)] + 1
    }
    console.log(partOneScore, partTwoScore)
}

main()