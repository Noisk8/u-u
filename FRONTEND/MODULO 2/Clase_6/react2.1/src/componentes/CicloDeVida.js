import { useEffect, useState } from "react";

const CicloDeVida =()=>{

    const [count, setCount] =useState(0);
    useEffect(
        () => {
            console.log('El componente se ha creado ')
            const instervalo =( () => {
                setCount(count +1 )
            }, 1000);
        }
    )

    return () =>{
        console.log("el componente se ha desmontado");
        clearInterval(intervalo);
    },[]);
useEffect(() =>{

    console.log(`Segundos: ${count}`)
}, [count]);

return(
    <div>
        segundos: {count}
    </div>
)}

