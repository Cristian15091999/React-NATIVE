
interface Person {
    firstName: string;
    lastName: string;
    age: number;

    address: {
        country?: string;
        houseNo: number;
    }
}



export const ObjectLiterals = () => {

    const person: Person= {
        age: 25,
        firstName: "Cristian",
        lastName: "Ortega",
        address: {
            country : 'Chile',
            houseNo: 615
        }
    }
    return(
        <>
        <h3>Objetos Literales</h3>
        <pre>
        {JSON.stringify(person,null,2)}
        </pre>
        </> 
    )
}