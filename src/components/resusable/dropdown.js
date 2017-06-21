import React from 'react';
import Select from 'react-select';

export default (props) => {


    return (
        <Select
            name="form-field-name"
            value={props.defaultvalue}
            options={props.options}
            onChange={props._onSelect}
        />
    )
}
