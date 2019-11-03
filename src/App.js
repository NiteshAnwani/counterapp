import React,{Component} from 'react'
import Counter from "./components/countersComponent"
import Navbar from "./components/navbarComponent"

class App extends Component{
  state={
    counters:[
        {id:1, value:1, title:"first"},
        {id:2, value:2, title:"second"},
        {id:3, value:3, title:"third"},
        
    ]
}

handleIncrement = counter =>
{
    const counters =[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value=counter.value+1;
    this.setState({counters});
    
}
handleDecrement = counter =>
{
    const counters =[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value=counter.value-1;
    this.setState({counters});
}
handleDelete = counterId =>
{
    const counters = this.state.counters.filter(c => c.id!==counterId);
    this.setState({counters});
}
handleReset = () => {
    const counter=this.state.counters.map( c => {
        c.value=0;
        return c;
    });
    this.setState({counter});
};
  render(){return (
    <React.Fragment>
    <Navbar totalCount={this.state.counters.filter(c => c.value !== 0 ).length}/>
    <Counter 
    counters={this.state.counters}
    onInc={this.handleIncrement} 
    onDec={this.handleDecrement} 
    onDel={this.handleDelete} 
    onRes={this.handleReset}/>    
    </React.Fragment>
  );}
}

export default App;

