'use strict'
import react, {Component} from 'react';
import reactDom from 'react-dom';

class Hello extends Component {
	render() {
		const NAME = 'comlewod';
		return (
			<div>Hello, {NAME}</div>
		);
	}
}

//reactDom.render(<Hello/>, document.getElementById('app'));
