import { useState, useEffect } from 'react';
import Part from './Part';
import Solution from './Solution';

const Day01 = () => {
    const [clicksArr, setClicksArr] = useState([]);
    const [clickZero, setClickZero] = useState(0); 

    useEffect(() => {
        fetch('/resources/day01.txt')
            .then(response => response.text())
            .then(data => { 
                const clicksList = data.split('\n');
                console.log(clicksList);
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