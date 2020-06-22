import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class InputCountry extends Component {

    state = {
        content: ' '
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("click")
        this.props.addCountry(this.state.content);
        this.props.changeList(false);
        this.setState({
            content: ''
        }

        )
    }



    render() {
        return (
            <div>
                <InputGroup style={{width: "370px"}} >
                    <Input onChange={this.handleChange} value={this.state.content} placeholder="insert country"/>
                    <InputGroupAddon addonType="append">
                        <InputGroupText style={{cursor:'pointer'}} onClick={this.handleClick}>search</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }




}

export default InputCountry