import React, { Component } from 'react'

class Result extends Component {
    render() {
        let height = this.props.data.height;
        let weight = this.props.data.weight;
        let bmi = this.props.data.bmi;
        let bmiClass = this.props.data.bmiClass;

        return (
            <div>
                <h4>
                    Рост: {height}см
                </h4>
                <h4>
                    Вес: {weight}кг
                </h4>
                <h2>{bmiClass}</h2>
                <h2>ИМТ: {bmi}</h2>
            </div>
        );
    }
}

export default Result