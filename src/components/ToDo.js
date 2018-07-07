import React, { Component } from 'react';

class ToDo extends Component {
	render() {
		return (
			<li>
				<input type="checkbox" checkbox={ this.props.isCompleted } onChange={ this.props.toggleComplete }  />
				<span>{ this.props.description }</span>
				<button onClick={ this.props.deleteTodo(id) }>Delete</button>
			</li>

		);
	}
}

export default ToDo;

