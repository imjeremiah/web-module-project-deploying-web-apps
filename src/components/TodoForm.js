import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        };
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.input);
        this.setState({
            input: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type="text" name="todo" value={this.state.input}/>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;