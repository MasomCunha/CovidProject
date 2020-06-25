import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';


class InputCountry extends Component {

    state = {
        content: '',
        suggestions: []
    }

    countryData = () => {

        const country = [];

        if (this.props.data !== null) {
            this.props.data.map((element) => {
                country.push(element.country)
            })
        }
        console.log(country)
        return country;
    }

    onTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.countryData().sort().filter(v => regex.test(v))
        }

        this.setState(() => ({
            suggestions,
            content: value
        }))
    }

    selectedText(value) {
        this.setState(() => ({
            content: value,
            suggestions: [],
        }))
    }

    renderSuggestions = () => {
        let { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul >
            { suggestions.map((item, index) => (<p style={{ cursor: 'pointer' }} key={index} onClick={() => this.selectedText(item)}>{item}</p>))}
            </ul>
        );
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.addCountry(this.state.content);
        this.props.changeList(false);
        this.setState({
            content: ''
        })
    }



    render() {
        return (

            <div>
                <InputGroup style={{ width: "370px" }} >
                    <Input placeholder="insert country" onChange={this.onTextChange} value={this.state.content} />
                    <InputGroupAddon addonType="append">
                        <InputGroupText style={{ cursor: 'pointer' }} onClick={this.handleClick}>search</InputGroupText>
                    </InputGroupAddon>
                </InputGroup>
                {this.renderSuggestions()}
            </div>
        )
    }
}

export default InputCountry