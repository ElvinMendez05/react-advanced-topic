import { useCounter } from "@/hooks/useCounter"
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number) => {
    console.time('Heavy_stuff_started');

    for (let index = 0; index < iterationNumber; index++) {
        console.log('Here we gooo');
    }

    console.timeEnd('Heavy_stuff_started');

    return `${iterationNumber} iteration performed`
}

export const MemoCounter = () => {
    
    const {counter, increment} = useCounter(50_000);
    const {counter: counter2, increment: increment2} = useCounter(10_000)
    
     const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl fond-bold"> Memo - useMemo - {myHeavyValue}</h1>
    <hr />

    <h4>Counter: {counter}</h4>
    <h4>Counter: {counter2}</h4>

    <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" 
     onClick={increment}>
       +1
     </button>

     <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" 
     onClick={increment2}>
       +1 - counter 2
     </button>
    
    </div>
  )
}
