import React from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 1,
            rate: 1
        }
    }

    changeDayRate(rate){
        this.setState({
            rate
        })
    }

    changeHours(hours){
        this.setState({
            hours
        })
    }

    render() {
        const rate = this.state.rate / this.state.hours;
        return (
            <form>
                <NumberInput id="day-rate" label="Day rate" min={0} max={5000} handleChange={(e) =>this.changeDayRate(e)}/>
                <NumberInput id="hours" label="Hours" min={1} max={12} handleChange={(e) => this.changeHours(e)}/>
                <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}
/>
            </form>
        );
    }
}

