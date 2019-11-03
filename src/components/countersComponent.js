import React,{Component} from 'react'
import Counter from "./counterComponent"


class counters extends Component
{
   
    render()
    {
        return (<React.Fragment>
            <button onClick={this.props.onRes}>Reset</button>
            {this.props.counters.map(counter => (
            <Counter key={counter.id} 
            counters={counter}
            onDelete={this.props.onDel}
            onIncrement={this.props.onInc}
            onDecrement={this.props.onDec}
            >
                {<h1>Counter value #{counter.title}</h1> }
            </Counter>
        ))}
        </React.Fragment>);
    }

}

export default counters;