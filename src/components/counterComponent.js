import React,{Component} from 'react';

class Counter extends Component
{
    
    
    // formatRender()
    // {
    //     if (this.state.tags.length===0) return <p>No items found</p> 
    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    // }
    // handleClick(product)
    // {
    //     if(product.id===1)
    //     {
    //     this.setState({value:this.state.value+1});
    //     console.log("Increment clicked"+this.state.value);
    //     }
    //     else if(product.id===2)
    //     {
    //     this.setState({value:this.state.value-1});
    //     console.log("Increment clicked"+this.state.value);
    //     }
    //     else{
    //         console.log("none of above"+product.id);
    //     }
        
    // }
    render()
    {
        //this.setState({count:this.props.value});
        return (<React.Fragment>
        <h1>{this.formatCount()}</h1>
        {this.props.children}
        <button className="btn btn-success sm-2" onClick={() => {this.props.onIncrement(this.props.counters)}}>Increment</button>
        <button className="btn btn-warning sm-2" onClick={() => {this.props.onDecrement(this.props.counters)}}>Decrement</button>
        <button className="btn btn-danger sm-2" onClick={() => {this.props.onDelete(this.props.counters.id)}}>Delete</button>
         {/* {this.formatRender()} */}
        </React.Fragment>);
    }
    formatCount()
    {
        const {value}=this.props.counters;
        return value===0 ? "Zero" : value;
    }
}

export default Counter;