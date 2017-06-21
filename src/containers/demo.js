import React, { Component } from 'react';

import DropDown from '../components/resusable/dropdown'

export default class Demo extends Component {
    constructor() {
        super()
        this.state = {
            options: [
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' }
            ],
            defaultvalue: { value: '', label: 'Please Select' }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log(e);
        this.setState({defaultvalue:e})
    }

    render() {
        return (
            <DropDown options={this.state.options} _onSelect={this.handleChange} defaultvalue={this.state.defaultvalue} />
        )
    }
}