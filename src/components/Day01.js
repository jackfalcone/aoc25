import { useState, useEffect } from 'react';
import Part from './Part';
import Solution from './Solution';

const Day01 = () => {
    const [clickZero, setClickZero] = useState(0); 

    useEffect(() => {
        fetch('/resources/day01.txt')
            .then(response => response.text())
            .then(data => { 
                const lines = data
                    .split('\n')
                    .map(line => line.trim())
                    .filter(line => line.length > 0);
                
                let currentPos = 50;
                let zeroCount = 0;

                lines.forEach(instruction => {
                    const direction = instruction[0];
                    const times = parseInt(instruction.slice(1), 10);

                    for (let i = 0; i < times; i++) {
                        if (direction === 'R') {
                            currentPos = currentPos === 99 ? 0 : currentPos + 1;
                        } else if (direction === 'L') {
                            currentPos = currentPos === 0 ? 99 : currentPos - 1;
                        }
                    }
                    
                    if (currentPos === 0) {
                        zeroCount++;
                    }
                })
                
                setClickZero(zeroCount);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <div>
            <Part partLetter="A" />
            <Solution solutionText="Times click 0" solutionValue={clickZero} />
        </div>
    )
}

export default Day01;