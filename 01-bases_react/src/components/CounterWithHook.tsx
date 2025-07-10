import {useCounter} from '../hooks/useCounter'
export const CounterWithHook = () => {
  const {count,sumOne,restOne,multForNumber,divForNumber,volvera0} = useCounter({
    initialValue: 5
    }
  );

  return (
    <>
    <h3>
      Contador: <small>{count}</small>
    </h3>
    
    
    <div>
      <button onClick={()=>sumOne(1)}>+1</button>
      &nbsp;
      <button onClick={()=>restOne(1)}>-1</button>
      &nbsp;
      &nbsp;
      <button onClick={()=>multForNumber(8)}>multiplicar por 8</button>
      &nbsp;
      <button onClick={()=>divForNumber(2)}>Dividir por 2 </button>
      &nbsp;
      <button onClick={()=>volvera0(0)}>volver a 0</button>
    </div>

    </>
  )
}

