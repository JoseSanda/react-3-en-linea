import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square (props){
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNest: true,
    };
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    if (calculateWinner(this.state.squares)){
      return;
    }
    squares[i]= this.state.xIsNest?'X':'O';
    this.setState({
      squares,
      xIsNest: !this.state.xIsNest
    });
  }

  renderSquare(i) {
    return (
        <Square
          onClick={()=> this.handleClick(i)}
          value={this.state.squares[i]}/>
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status = 'Next player:'+(this.state.xIsNest?'X':'O');
    if(winner){
      status = winner +' is the winner!!!!';
    }
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

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares){
  const winnerLines = [
    [0,3,6],
    [0,1,2],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
  ];
  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
