// impoty react and react-dom
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Square component
class Square extends React.Component {
    // sets the constructor of the class and passes a properties argument
    constructor(props) {
        // super(props) allows for "this.props" in a constructor and "super" calls the constructor of the parent class
        super(props);
        // sets the state of the component
        this.state = {
            value: null,
        };
    }

    handleClick(i) {}

    // render tells react what to render with JSX
    render() {
        return (
            <button
                className="square"
                onClick={() => {
                    // on click
                    this.props.onClick();
                }}
            >
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => {
                    this.handlClick(i);
                }}
            />
        );
    }

    render() {
        const status = "Next player: X";

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
