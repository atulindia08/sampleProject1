import React, { Component } from "react";
import {connect} from 'react-redux'

class App extends Component {
 
  componentDidMount(state){
    console.log("state render---", state)
  }
  render() {
    
    return (
      <div className="App">
          
            <div className="col">
                <div>
                    <label>A----></label>
                    <label>{this.props.A}</label>
                    <div>
                        <button onClick={()=>this.props.ageUp(this.props.B)}>MAKE_A</button>
                    </div>
              </div>
            </div>
            <div className="col">
                <div>
                    <label>B----></label>
                    <label>{this.props.B}</label>
                    <div>
                        <button onClick={()=>this.props.ageDown(this.props.A)}>MAKE_B</button>
                    </div>
                </div> 
          </div>
      </div>
    );
  }
}
  const mapStateToProps = (state)=>{
    console.log("state ion---", state)
    return {
      A: state.rA.A,
      B: state.rB.B,
    }

  }

const mapDispachToProps = (dispach) =>{
  return {
  ageUp: (Bvalue)=> {
    // setTimeout(()=>{
    //   dispach({type:'MAKE_A', val: Bvalue})
    // },5000)

     fetch('https://reqres.in/api/users?delay=10').then(()=>{

      dispach({type:'MAKE_A', val: Bvalue})
     });

     
  },
  ageDown: (Avalue)=> dispach({type:'MAKE_B', val: Avalue}),
  }
}

export default connect(mapStateToProps,mapDispachToProps)(App);
