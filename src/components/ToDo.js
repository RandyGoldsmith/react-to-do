import React, { Component } from 'react';

class ToDo extends Component {
	render() {
		return (
			<li>
				<input type="checkbox" checkbox={ this.props.isCompleted } onChange={ this.props.toggleComplete } onChange={ this.props.deleteTodo } />
				<span>{ this.props.description }</span>
			</li>
		);
	}
}

export default ToDo;

