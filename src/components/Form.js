import React, { Component } from 'react'

class Form extends Component {

render() {
return(
    <form onSubmit={this.props.onSubmit}>
        <input 
        onChange={this.props.handleChange}
        value={this.props.value}
        />
        <button>x</button>
    </form>
);
}
}
export default Form