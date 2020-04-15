import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange = (e) => {
        this.props.onChange(this.state.value);
        this.setState({ value: e.target.value });
    }

    static defaultProps = {
        min: 40,
        max: 245,
        step: 1
    }

    render() {
        return (
            <div>
                <input
                    type="range"
                    value={this.state.value}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default Input