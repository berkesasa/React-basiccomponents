import Button from '../components/Button'
import useCounter from "../hooks/use-counter";


function CounterPage({initialCount}) {

    const {count, increment} = useCounter(initialCount);

    return (
        <div>
            <h1 className='mb-2 pl-2'>Count is {count}</h1>
            <Button onClick={increment}>Increment</Button>
        </div>
    )
}

export default CounterPage