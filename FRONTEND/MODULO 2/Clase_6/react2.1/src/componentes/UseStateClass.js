import React from 'react'

class UseStateClass extends React.Component{

    constructor(props){
        this.state ={
            count:0 
        }
    }

    incrementarContador = ()=>{
        this.setState({count: this.state.count +1})
    }
    render(){
        return(

            <div>
                <p> Haz hecho click {this.state.count}</p>
                <button onClick={this.incrementarContador}></button>
            </div>
        )
    }
}

export default UseStateClass
