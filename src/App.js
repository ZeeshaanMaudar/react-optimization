import React, { useState, useCallback, useMemo, useEffect, Profiler } from 'react';

import Child from './components/Child';

// const person = { name: 'ZeeDawg' };

const App = () => {

  const [count, setCount] = useState(0);
  const [numbersList, setNumbersList] = useState([39, 12, 100, 4, 37]);

  const person = { name: 'ZeeDawg' };

  const memoizedPerson = useMemo(() => person, []);

  const changeName = () => {
    // setName()
    // expensive calcs
    console.log('new name');
  }

  const cachedChangeName = useCallback(changeName, []);

  useEffect(() => {
    //api call
  }, [memoizedPerson, cachedChangeName])

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  }

  let name = 'ZeeMoney';

  
  // let ninja = { age: 29 };

  const expensiveCalculation = () => {

    console.log('expensive calc happening!!!');
    // imagine that it is super expensive
    const maxValue = Math.max(...numbersList);

    return maxValue;
  }

  const cachedMaxValue = useMemo(expensiveCalculation, [numbersList])
  // const cachedExpensiveCalc = useMemo(() => expensiveCalculation(), [numbersList])

  const renderCallback = (id, phase, actualTime, baseTime) => {
    
    console.log('phase: ', phase);
    console.log('actualTime: ', actualTime);
    console.log('baseTime: ', baseTime);
    console.log('performance boost: ', (((baseTime - actualTime) / baseTime) * 100).toFixed(2) + '%');
  }

  return (
    <Profiler id='app' onRender={renderCallback}>
      <div className="App">
        <h4>The count is {count}</h4>
        <button onClick={incrementCounter}>Increment</button>
        <Child {...{ name, cachedChangeName }} />
        <h4>The max value is: {cachedMaxValue}</h4>
      </div>
    </Profiler>
  );
}

export default App;
