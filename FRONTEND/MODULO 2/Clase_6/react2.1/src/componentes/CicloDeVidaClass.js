import React from 'react'


class CicloDeVidaClass extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            count: 0
        }
console.log('esta creado el componente')
    }

//Fase de montaje 
componentDidMount(){
    console.log("se creo ")
    this.intervalo = setInterval(() =>{
        this.setState({counr: this.state.count +1 })
    }, 1000)
}


// Copmponente Desmontado 
componentWillUnmount(){
    console.log('Componente desmonmtado')
    console.log("segundor ")
}

// Fase Actualiacion

componentDidUpdate(){
    console.log(`"segundos" ${this.state.count +1}`)
}

    render(){
        return(
            <div>
                Hola hola 
            </div>
        )

    }
}

export default CicloDeVidaClass;