// Day 1 Index
import * as fs from 'fs'

async function main() {
    // Load Data
    const rawData = fs.readFileSync('input.txt', { encoding: 'utf8' })

    // I am so sorry, I wanted to do it one line because [REDACTED]
    const partOne = rawData.split('\n').slice(0, -1).map(r => r.slice(0, r.length / 2).split('').filter((c) => r.slice(r.length / 2).includes(c))[0]).map(c => c.charCodeAt(0) - (c.match(/[A-Z]/g) ? 38 : 96)).reduce((a,b) => a + b)
    const partTwo = rawData.match(/\S+\n\S+\n\S+\n/g)?.map(g => g.split('\n').slice(0, -1).map(r => r.split('').filter((c, i, arr) => i === arr.indexOf(c))).reduce((p,c) => p.concat(c)).sort().filter((v, i, arr) => arr[i+1] === v && arr[i+2] === v)[0]).map(c => c.charCodeAt(0) - (c.match(/[A-Z]/g) ? 38 : 96)).reduce((p,c) => p+c)
    
    console.log(partOne)
    console.log(partTwo)
}

main()