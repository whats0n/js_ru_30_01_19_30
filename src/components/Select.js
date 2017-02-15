import React, { Component } from 'react';
import {connect} from 'react-redux';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import {filteredArticlesID} from '../AC';

class AwesomeSelect extends Component {
	
	render() {
		let {options, filteredID} = this.props;

		return (
			<Select 
				options={options} 
				onChange={this.handleSelectChange} 
				value={filteredID} 
				multi/>
		)
	}

	handleSelectChange = selection => {
		console.log(selection);
		this.props.filteredArticlesID(selection);
	}

}

export default connect(null, { filteredArticlesID })(AwesomeSelect)