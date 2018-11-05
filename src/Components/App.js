import React from 'react'
import Header from './Header'
import InputField from './InputField'
import PrintAnswer from './PrintAnswer'
import DrawImage from './DrawImage'
import Score from './Score'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      UserAnswer: '',
      placeholder:'Type your answer',
      dinamicPassword: 'Hello',
      isSucces: false,
      isLoose: false,
      counter: 1
    }
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    // alert(this.state.UserAnswer)
    this.setState({
      // UserAnswer: e.target.value,
      counter: this.state.counter + 1
      
    })
    this.looseGame()
  }
  onChangeInput = (e) => {
    this.setState({
      UserAnswer: e.target.value,

    })

  }
  checkAnswers = (userAnswer, pass) => {
    let compareAnswers = []
    userAnswer = userAnswer.toLowerCase().split('')
    pass = pass.toLowerCase().split('')
    userAnswer.forEach((userAnswers, i) => {
      pass.forEach((passwords, j) => {
        if (userAnswers === passwords && i === j) {
          compareAnswers.push(passwords)
          return
        } else if (userAnswers !== passwords && i === j) {
          compareAnswers.push('*')
        } else if (i > j) {
          return
        }
      })
    })
    if (compareAnswers.includes('*') || userAnswer.length !== pass.length) {
      this.setState({
        isSucces: false
      })
    } else {
      this.setState({
        isSucces: true
      })
    }

    console.log(compareAnswers, this.state.isSucces, this.state.counter)
  }

  looseGame() {
    if(this.state.counter === 5) {
      this.setState({
        isLoose: true,
        placeholder:'the end'
      })
    }
  }

  render() {

    return (
      <div>
        <Header />
        <Score
          isWinner={this.state.isSucces}
          isLoose={this.state.isLoose}
        />
        <PrintAnswer
          password={this.state.dinamicPassword} />
        <InputField
          onFormSubmit={this.onFormSubmit}
          placeholder = {this.state.placeholder}
          inputValue={this.state.UserAnswer}
          onChangeInput={this.onChangeInput}
          checkAnswers={() => this.checkAnswers(this.state.UserAnswer, this.state.dinamicPassword)}
          maxLength={this.state.dinamicPassword.length}
          isBtnDisabled={this.state.isSucces || this.state.isLoose}
          isInputDisabled={this.state.isSucces || this.state.isLoose}
        />

        {/* <DrawImage /> */}

      </div>
    );
  }
}

export default App;
