import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class InputCountry extends Component {

    render() {
        return (
            <div>
                <InputGroup style={{width: "370px"}}>
                    <Input />
                    <InputGroupAddon addonType="append">
                        <InputGroupText style={{cursor:'pointer'}}>search</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }




}

export default InputCountry