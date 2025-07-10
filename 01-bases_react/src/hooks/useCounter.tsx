import { useState } from "react"

interface Options{
    initialValue:number;
}

export const useCounter= ({initialValue}: Options) => {

const [count,setCount] = useState<number>(initialValue);


  const sumOne = (value:number) => {
    setCount (count+ value)
  }

  const restOne = (value:number) => {
    const nuevoValor = count - value;
    if (nuevoValor < 0) return;
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

  return{ 
    count,
    sumOne,
    restOne,
    multForNumber,
    divForNumber,
    volvera0
  }
}