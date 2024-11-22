import React, { useMemo, useState } from 'react';

const CounterUsingUseMemo = () => {
    const [count, setCount] = useState(0);
    const [otherValue, setOtherValue] = useState(0);

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 100000000; i++) {}
        return num * 2;
    };

    const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            
            <h2>Other Value: {otherValue}</h2>
            <button onClick={() => setOtherValue(otherValue + 1)}>Increment Other Value</button>
            
            <h3>Expensive Calculation Result: {memoizedValue}</h3>
        </div>
    );
};

export default CounterUsingUseMemo;
