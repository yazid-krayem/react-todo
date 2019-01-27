import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form'
class App extends Component {
  state={
    inputValue:'',
    todo:[
      {value:'this is value 1 ', done:true},
    ]
  }
  handleChange = (e)=>{
    const value = e.target.value
    this.setState({inputValue:value})
    console.log(value)
  }
  onSubmit = (e)=>{
    e.preventDefault()
    console.log('cli')
    const todo = this.state.todo
    todo.push({ value: this.state.inputValue, done: false });
    this.setState({todo,inputValue:''})
  }
  handleClick = (index) => {
    const todo = this.state.todo;
    todo[index].done = !todo[index].done;
    this.setState({ todo });
    console.log('comp')
  }

  handlerFilter = (index) =>{
    let test = this.state.todo
    test.splice(index,1);
    this.setState({todo:test})
    console.log(test)
      
  }
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
       <h1>Todo-List</h1>
       
       <List 
       todo={this.state.todo}
       handleClick={this.handleClick}
       handlerFilter={this.handlerFilter}
       />
       <Form 
       handleChange={this.handleChange}
       onSubmit={this.onSubmit}
       value={this.state.inputValue}
       />
        </header>

      </div>
    );
  }
}

export default App;