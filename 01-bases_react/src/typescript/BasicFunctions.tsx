
export const BasicFunctions = () => {

    const addTwoNumber = (a:number,b:number) => {
        return (a+b).toString();

    }

    const restTwoNumber =  (a:number,b:number) => {
        return a-b;

    }

    const multTwoNumber =  (a:number,b:number) => {
        return a*b;

    }
    
    const divTwoNumber =  (a:number,b:number) => {
        return a/b;

    }





  return (
    <div>
      <>
      
      <h3>Funciones</h3>
      <span> El resultado de la suma : {addTwoNumber(10,2) } </span>
      <br/>
      <span>El resultado de la resta : {restTwoNumber(10,2)}</span>
      <br/>
      <span>El resultado de la multiplicacion : {multTwoNumber(10,2)}</span>
      <br/>
      <span>El resultado de la division : {divTwoNumber(10,2)}</span>
      
      
      </>
    </div>
  )
}

