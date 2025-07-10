import { useState } from "react"

export const Counter = () => {
  const [count,setCount] = useState(0)

  const sumOne = (value:number) => {
    setCount (count+ value)
  }

  const restOne = (value:number) => {
    setCount (count - value)
  }

  const multForNumber = (value:number) => {
    setCount (count * value)
  }

  const divForNumber = (value:number) => {
    setCount (count / value)
  }


  const volvera0 = (value:number) => {
    setCount (count * value)
  }





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

