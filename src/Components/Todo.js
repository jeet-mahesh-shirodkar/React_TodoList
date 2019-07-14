import React from 'react';
import './Todo.css';

export default class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            item:'',
            todoItems:[]
        })
    }
   
    onChangeHandler(event){
        var change=event.target.value;
        this.setState({
            item:change
        })   
        // console.log(this.state.item)  
    }
   
    addData(){
        var change = this.state.item;
        // var instanceofitem =this.state.todoItems;
        this.setState({
            todoItems:[...this.state.todoItems,change],
            item:''
        })
        // console.log(this.state.todoItems)
    }

    deleteData(event){
        var id = event.target.id;
        console.log(id)
        var instanceofitem =this.state.todoItems;
         instanceofitem.splice(id,1)
         this.setState({
             todoItems:instanceofitem
         })

    }

render(){
     var listed = this.state.todoItems.map((e,i)=>(
        <li key={i}>{e} <span id={i} onClick={this.deleteData.bind(this)}>Delete Data</span></li>
    ))
    console.log(listed)
return(
    <div className="Todo">
    <div className="heading"><h3>React Todo Task Application</h3></div>
    <div className="mains">
    <input type="text" placeholder="Enter the Task" value={this.state.item} onChange={this.onChangeHandler.bind(this)}></input>
    {/* <p>{this.state.item}</p> */}
    <button onClick={this.addData.bind(this)}>Add the items</button>
    <ul>{listed}</ul>
    </div>
    </div>
);
}
}