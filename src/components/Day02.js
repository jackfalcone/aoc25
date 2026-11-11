import { useState, useEffect } from 'react';
import Part from './Part';
import Solution from './Solution';

const Day02 = () => {
    const [linesArr, setLinesArr] = useState([]);
    const [dupliArr, setDupliArr] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch('/resources/day02.txt')
            .then(response => response.text())
            .then(data => { 
                const lines = data
                    .split(',')
                    .map(line => line.trim())
                    .filter(line => line.length > 0);
                setLinesArr(lines);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    const checkDupli = id => /^(\d+)\1$/.test(String(id));

    useEffect(() => {
        if (linesArr.length > 0) {
            const dupli= []

            linesArr.forEach(line => {
                const [start, end] = line.split('-').map(Number);
                
                for (let i = start; i <= end; i++) {
                    if (checkDupli(i)) {
                        dupli.push(i);
                    }
                } 

                setDupliArr(dupli);
            })
        }
    }, [linesArr])

    useEffect(() => {
        if (dupliArr.length > 0) {
            setTotal(dupliArr.reduce((a, b) => a + b, 0));
        }
    }, [dupliArr])

    return (
        <div>
            <Part partLetter="A" />
            <Solution solutionText="Total" solutionValue={total} />
            <Part partLetter="B" />
            <Solution solutionText="Times every click 0" solutionValue={'0'} />
        </div>
    )
}

export default Day02;