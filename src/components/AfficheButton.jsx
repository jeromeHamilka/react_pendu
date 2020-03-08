import React, { Component } from 'react';
import randomWord from './randomWord'

class AfficheButton extends Component {
  constructor(props) {
    super(props);
        let word = randomWord()
        let newCurrentWordArray = Array.from({length: word.length}, (_, i) => "_")
        this.state = {
          currentWord: word,
          letters: Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i)),
          currentWordArray:newCurrentWordArray,
          nbEssais : 10
        }
  }      

handeClick = (event) => {
  const array = [...this.state.currentWord];
  const arraycopy = [...this.state.currentWordArray];
  let lettersCopy = [...this.state.letters];
  const value = event.currentTarget.value;
  lettersCopy = lettersCopy.filter(lettersCopy => lettersCopy !== value);
  this.setState({letters: lettersCopy});
  let i =-1;
  let verif = true;
  array.forEach(lettre => {
    i++;
    if (lettre === value) {
    arraycopy[i] = value;
    verif = false;
    }
    this.setState({currentWordArray: arraycopy});  
    })
    if (verif) {
      this.setState({nbEssais: this.state.nbEssais - 1});
    }
  return this.currentWordArray
}

initGame() {
  let newWord = randomWord();
  let newCurrentWordArray = Array.from({length: newWord.length}, (_, i) => "_")
  this.setState({
      currentWord: newWord,
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i)),
      currentWordArray:newCurrentWordArray,
      nbEssais : 10

  });
}

render() {
  console.log(this.state.currentWord)
  let i = -1;
  const affichePhrase = this.state.currentWordArray.map((phrase) => {
    i++;
    return <div key={i}>{this.state.currentWordArray[i]}</div>
  })
    return( 
    <div>
      <span className="spanclass">{affichePhrase}</span>
      <span>
      <br/>
      <br/>
      {this.state.letters.map(letter =>
      <button 
      key={letter}
      className="btn btn-outline-primary"
       value={letter}
       onClick={(event) => this.handeClick(event)}
      >{letter}
      </button>
      )}
      </span>
      {this.state.nbEssais > 0 &&
        <h2>il vous reste {this.state.nbEssais} essais</h2>
      }
      {this.state.nbEssais <= 0 &&
        <h2>
          Vous avez perdu !!!
          <br/>
          il fallait trouver : {this.state.currentWord}     <button onClick={()=> this.initGame()}>Rejouez</button>
        </h2>
      }
      {!this.state.currentWordArray.includes("_") &&
        <h2>
          Bravo vous avez gagné !!!   <button onClick={()=> this.initGame()}>Rejouez</button>
        </h2>
      }
    </div>
    )
  }
}

export default AfficheButton;

  