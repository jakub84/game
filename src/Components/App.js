import React from 'react'
import Header from './Header'
import PrintAnswer from './PrintAnswer'
import DrawImage from './DrawImage'
import Score from './Score'
import Letters from './Letters'


let userAnsToCheck = []
let letterInputs = document.querySelectorAll('.letter')
const allPaswords = [
  {
    password: 'baba',
    category: 'item'
  },
  {
    password: 'Prince',
    category: 'singer'
  },
  {
    password: 'Diablo',
    category: 'Pc game'
  },
  {
    password: 'Metallica',
    category: 'Music Band'
  },
  {
    password: 'Radom',
    category: 'Miasto'
  },
  {
    password: 'Kot',
    category: 'Zwierzak'
  },
  {
    password: 'Gitara',
    category: 'Instrument'
  },
]


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      UserAnswer: '',
      isDisabled: false,
      placeholder: 'Type your answer',
      dinamicPassword: '',
      isSucces: false,
      isLoose: false,
      counter: 0,
      compareAnswers: [],
      category: '',
      hiddenPassword: []
    }
  }

  looseGame() {
    if(this.state.counter > 5) {
      this.setState({
        isSucces: false,
        isLoose: true
      })
    }
  }

  letChoosePassword = (max) => {
    this.setState({
      dinamicPassword: ''
    })
    
    let customNr = Math.floor((Math.random() * max))
    this.setState({
      dinamicPassword: allPaswords[customNr].password,
      category: allPaswords[customNr].category,
      isSucces: false,
      isLoose: false,

    })
    this.checkAnswers(this.state.UserAnswer,allPaswords[customNr].password)
    console.log(this.state.hiddenPassword)
  }


  onClickLetters = (e) => {

    e.target.disabled = true
    this.setState({
      UserAnswer: e.target.value,
      counter: this.state.counter + 1,
    })
    this.looseGame()
    this.checkAnswers(e.target.value,this.state.dinamicPassword)
    console.log(this.state.counter)
  }

  checkAnswers = (userLetter, pass) => {
    console.log(userLetter)
    let newTab = []
    pass = pass.toLowerCase().split('')
    userAnsToCheck.push(userLetter)
    console.log(userAnsToCheck)
    pass.filter((val) => {
          if (userAnsToCheck.includes(val)) {
            console.log('plus')
            newTab.push(val)}
          else if (!userAnsToCheck.includes(val)) {
            newTab.push('_')
          }
        })
        this.state.compareAnswers = newTab
        if (this.state.compareAnswers.includes('_')) {
              this.setState({
                isSucces: false
              })
            } else if (this.state.counter === 5) {
              this.setState({
                isLoose: false
              })
            }
        
            else {
              this.setState({
                isSucces: true
              })
            }
  }

 
  render() {

    return (

      <div className="main-container">

        <Header />
        <Score
          isWinner={this.state.isSucces}
          isLoose={this.state.isLoose}
        />
        <PrintAnswer
          password={this.state.compareAnswers}
          // hiddenPassword={this.state.compareAnswers.fill('-')}
          category={this.state.category}
          tries = {5 - this.state.counter}
        />
      <Letters
      onClickLetters ={this.onClickLetters}
      letFindPass = {() => this.letChoosePassword(allPaswords.length)}
      // isDisabled = {this.state.isDisabled}
      />


      </div>
    );
  }
}

export default App;
