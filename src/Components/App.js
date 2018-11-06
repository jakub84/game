import React from 'react'
import Header from './Header'
import InputField from './InputField'
import PrintAnswer from './PrintAnswer'
import DrawImage from './DrawImage'
import Score from './Score'

const allPaswords = [
  {
    password: 'Ball',
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
      placeholder:'Type your answer',
      dinamicPassword: '',
      isSucces: false,
      isLoose: false,
      counter: 0,
      compareAnswers:[],
      category:''
    }
  }


  letChoosePassword = (max) => {
    let customNr = Math.floor((Math.random() * max))
    console.log(customNr)
    this.setState({
      dinamicPassword: allPaswords[customNr].password,
      category: allPaswords[customNr].category
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    // alert(this.state.UserAnswer)
    this.setState({
      // UserAnswer: e.target.value,
      counter: this.state.counter + 1
      
    })
    // this.looseGame()
  }
  onChangeInput = (e) => {
    this.setState({
      UserAnswer: e.target.value,

    })

  }
  // checkAnswers = (userAnswer, pass) => {
  //   let newTab = []
  //   userAnswer = userAnswer.toLowerCase().split('')
  //   pass = pass.toLowerCase().split('')
  //   userAnswer.forEach((userAnswers, i) => {
  //     pass.forEach((passwords, j) => {
  //       if (userAnswers === passwords && i === j) {
  //           newTab.push(passwords)
  //         return
  //       } else if (userAnswers !== passwords && i === j) {
  //         newTab.push('*')
  //       } else if (i > j) {
  //         return
  //       }
  //     })
  //   })
  //   this.state.compareAnswers = newTab
  //   if (this.state.compareAnswers.includes('*') || userAnswer.length !== pass.length) {
  //     this.setState({
  //       isSucces: false
  //     })
  //   } else {
  //     this.setState({
  //       isSucces: true
  //     })
  //   }

  //   console.log(this.state.compareAnswers, this.state.isSucces, this.state.counter)
  // }


  checkAnswers = (userAnswer, pass) => {
    let newTab = []
    userAnswer = userAnswer.toLowerCase().split('')
    pass = pass.toLowerCase().split('')
    pass.filter((val) => {
     if (userAnswer.includes(val)) newTab.push(val)
     else if (!userAnswer.includes(val)) newTab.push('*')  
  })
    this.state.compareAnswers = newTab
    if (this.state.compareAnswers.includes('*') || userAnswer.length !== pass.length) {
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
    
        console.log(this.state.compareAnswers, this.state.isSucces, this.state.counter)
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
          password={this.state.compareAnswers}
          category = {this.state.category}
          />
        <InputField
          onFormSubmit={this.onFormSubmit}
          placeholder = {this.state.placeholder}
          inputValue={this.state.UserAnswer}
          onChangeInput={this.onChangeInput}
          checkAnswers={() => this.checkAnswers(this.state.UserAnswer, this.state.dinamicPassword)}
          maxLength={this.state.dinamicPassword.length}
          isBtnDisabled={this.state.isSucces || this.state.isLoose}
          isInputDisabled={this.state.isSucces || this.state.isLoose || this.state.counter === 0}
          chooseBtn = {() => this.letChoosePassword(allPaswords.length)}
          btnValue = {this.state.counter === 0 ? 'start' : 'check'}
          counter = {this.state.counter}
        />

        {/* <DrawImage /> */}

      </div>
    );
  }
}

export default App;
