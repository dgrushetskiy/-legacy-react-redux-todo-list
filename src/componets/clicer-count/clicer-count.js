import {connect} from "react-redux";
import {increment, decrement, reset} from '../../store';
import {Component} from "react";

export default class ClicerCount extends Component {
    render() {
        return (
            <div>
                <h1>Counter:</h1>
                <Counter/>
            </div>
        )
    }
}

class CounterApp extends Component {

    render() {
        const {count, inc, dec, res} = this.props;
        return (
            <div>
                <h2>{count}</h2>
                <button onClick={dec}>-</button>
                <button onClick={inc}>+</button>
                <button onClick={res}>reset</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.counter,
});
const mapDispatchToProps = {
    inc: increment,
    dec: decrement,
    res: reset,
};

const Counter = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterApp)
