
export const BasicTypes = () =>{
    const name:string = 'Cristian';
    const age: number = 25;
    const isActive: boolean = true;

    const powers: string  [] = ['ReactNative','Angular']; // podemos agregar lo que sea si es tipo any

    return (
        <> 
        <h3>Tipos básicos</h3>

        {name}
        <br />
        {age}
        <br/>
        {powers}
        
        </>
    )
}