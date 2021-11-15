import React, { Component } from 'react'

export default class MovieCC extends Component {
    constructor(props) {
        super(props)
    
    }
    onBtn1 =()=>
    {
        console.log("Savitri, a 70-year-old woman who is unhappy with her life, accuses God for her problems. When she gets her photograph clicked at a studio, she is transformed into a beautiful 24-year-old girl")
    }
    onBtn2 =(d,e,f)=>
    {
        console.log(`${d}-${e}-${f}`)
    }
    
    render() {
        return (
            <div>
              <h2>{this.props.title}</h2>  
              <h3>{this.props.director}</h3>
              <button onClick={this.onBtn1} >Button1</button>
              <button onClick={()=>
            {
                this.onBtn2(88,99,34)
            }}>Button2</button>
            </div>
        )
    }
}
