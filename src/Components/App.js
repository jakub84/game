import React from 'react'
import Header from './Header'
import InputField from './InputField'
import PrintAnswer from './PrintAnswer'
import DrawImage from './DrawImage'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      UserAnswer: '',
      dinamicPassword: 'Hello',
      isSucces:false
    }
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    // alert(this.state.UserAnswer)
  }
  onChangeInput = (e) => {
    this.setState({
      UserAnswer: e.target.value
    })
    
  }
  checkAnswers = (userAnswer,pass) => {
    
    let compareAnswers = []
    userAnswer = userAnswer.toLowerCase().split('')
    pass = pass.toLowerCase().split('')
    userAnswer.forEach((userAnswers,i) => {
      pass.forEach((passwords,j) => {
        if(userAnswers === passwords && i === j) {
          compareAnswers.push(passwords)
          return
        } else if (userAnswers !== passwords && i === j) {
          compareAnswers.push('*')
        } else if (i > j) {
          return
        } 
      })
    })
    if(compareAnswers.includes('*')) {
    this.setState({
      isSucces:false
    })} else {
      this.setState({
        isSucces:true
      })
    }
    console.log(compareAnswers, this.state.isSucces)
  }
  render() {

    return (
      <div>
        <Header />
        <InputField 
          onFormSubmit = {this.onFormSubmit}
          inputValue = {this.state.UserAnswer}
          onChangeInput = {this.onChangeInput}
          checkAnswers = {() => this.checkAnswers(this.state.UserAnswer,this.state.dinamicPassword)}
          maxLength = {this.state.dinamicPassword.length}
        />
        <PrintAnswer
        password = {this.state.dinamicPassword}/>
        {/* <DrawImage /> */}
      </div>
    );
  }
}

export default App;
