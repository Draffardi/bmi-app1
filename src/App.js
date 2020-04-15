import React, { Component } from 'react'
import './App.css'
import Input from './Input';
import Result from './Result';

class App extends Component {

    constructor(props){

        super(props);

        this.state = {height: 180, weight: 80, bmi: 24.69, bmiClass: 'Нормальный вес'}
    }

    heightChange = (height) => {
        this.setState({ height: height}, this.setBmi );
    }

    weightChange = (weight) => {
        this.setState({ weight: weight }, this.setBmi );
    }

    setBmi = () => {
        let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
        this.setState({ bmi: bmi, bmiClass: this.getBmiClass(bmi) });
    }

    getBmiClass = (bmi) => {
        if(bmi < 18.5) return 'Дефицит массы тела';
        if(bmi >= 18.5 && bmi <= 24.9) return 'Нормальный вес';
        if(bmi >= 25 && bmi <= 29.9) return 'Избыточный вес';
        if(bmi >= 30) return 'Ожирение';
    }

    render() {
        return (
            <div className="Main">
        <div className="Title">
                <h1> Индекс массы тела (ИМТ)</h1>
        </div>
            <div className="App">
                    <div className="rangeInput">
                        <label>Перемещайте, чтобы указать рост: </label>
                        <Input
                            value={this.state.height}
                            onChange={this.heightChange}/>
                    </div>
                    <div className="rangeInput">
                        <label>Перемещайте, чтобы указать вес: </label>
                        <Input
                            value={this.state.weight}
                            onChange={this.weightChange} />
                    </div>
                <Result data={this.state}/>
            </div>
        </div>
        );
    }
}

export default App
