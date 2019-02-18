# react-chess-pieces

Just a little np module to give you react svg chess pieces

do with them what you please!


### getting stahted

`$ npm i -S react-chess-pieces`

OR

`$ yarn add react-chess-pieces`

then (eg in a created react app)

we can use the default export (a Component called Piece)

```js
import React, { Component } from 'react';
import './App.css';

import Piece from 'react-chess-pieces';

const initialPosition = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"]
];


class App extends Component {

  state = {
    pieces: initialPosition,
  }
  
  render() {
    return (
      <div className="App">
        <div className='Board'>
          {this.state.pieces.map((colOfPieces, rowIndex)=> (
            <div className='Row'>
              {colOfPieces.map( (piece, colIndex)=> (
                <div className='Square'>
                  <Piece piece={piece}/>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

```


the Piece Component renders into an unstyled svg, so you should be able to style it however you please



original sprite svg:

https://commons.wikimedia.org/wiki/File:Chess_Pieces_Sprite.svg

I have edited them lightly for cultural reasons

originally licensed under the Creative Commons Attribution-Share Alike 3.0 Unported license, which I think is okay to republish as ISC. 