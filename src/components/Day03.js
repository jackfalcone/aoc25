import { useState, useEffect } from 'react';
import Part from './Part';
import Solution from './Solution';

const Day03 = () => {
    const [banksArr, setBanksArr] = useState([]);
    const [maxJoltages, setMaxJoltages] = useState([]);
    const [sumMaxJoltages, setSumMaxJoltages] = useState(0);

    useEffect(() => {
        fetch('/resources/day03.txt')
            .then(response => response.text())
            .then(data => { 
                const lines = data
                    .split('\n')
                    .map(line => line.trim())
                    .filter(line => line.length > 0);
                setBanksArr(lines);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    const getMaxBankJoltage = bank => {
        let maxLeftDigit = Number(bank[0]);
        let maxJoltage = -Infinity;

        for (let i = 1; i < bank.length; i++) {
            const currentDigit = Number(bank[i]);
            const joltage = maxLeftDigit * 10 + currentDigit;

            if (joltage > maxJoltage) {
                maxJoltage = joltage;
            }

            if (currentDigit > maxLeftDigit) {
                maxLeftDigit = currentDigit;
            } 
        }

        return maxJoltage;
    }

    useEffect(() => {
        if (banksArr.length > 0) {
            setMaxJoltages(banksArr.map(getMaxBankJoltage));
        }  
    }, [banksArr])

    useEffect(() => {
        if (maxJoltages.length > 0) {
            setSumMaxJoltages(maxJoltages.reduce((a, b) => a + b, 0));
        } 
    }, [maxJoltages])

    return (
        <div>
            <Part partLetter="A" />
            <Solution solutionText="Total" solutionValue={sumMaxJoltages} />
            <Part partLetter="B" />
            <Solution solutionText="Total" solutionValue={0} />
        </div>
    )
}

export default Day03;