import React from 'react'
import Header from './Header'
import PrintAnswer from './PrintAnswer'
import DrawImage from './DrawImage'
import Score from './Score'
import Letters from './Letters'
import skull_1 from '../images/1.png'
import skull_2 from '../images/2.png'
import skull_3 from '../images/3.png'
import skull_4 from '../images/4.png'
import skull_5 from '../images/5.png'
import skull_6 from '../images/6.png'
import skull_7 from '../images/7.png'


let userAnsToCheck = []
const allPaswords = [
  {
    password: 'John',
    category: 'Name'
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
    category: 'Town'
  },
  {
    password: 'Cat',
    category: 'Animal'
  },
  {
    password: 'dingding',
    category: 'What does a fox says?'
  },
  {
    password: 'interstellar',
    category: 'Movie'
  },
  {
    password: 'Sosnowiec',
    category: 'Town'
  },
  {
    password: 'Slayer',
    category: 'Music Band'
  },
  {
    password: 'Neptun',
    category: 'Cosmos'
  },
  {
    password: 'Mazowiecka',
    category: 'Street name'
  },
  {
    password: 'tarantula',
    category: 'Animal'
  },
  {
    password: 'silkworm',
    category: 'Animal'
  },
  {
    password: 'antelope',
    category: 'Animal'
  },
  {
    password: 'cuckoo',
    category: 'Animal'
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
      counter: 6,
      compareAnswers: [],
      category: '',
      hiddenPassword: []
    }
  }

  componentDidMount() {
    this.letChoosePassword(allPaswords.length)
  }

  looseGame() {

    this.setState({
      isSucces: false,
      isLoose: true
    })

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
    this.checkAnswers(this.state.UserAnswer, allPaswords[customNr].password)
    console.log(this.state.hiddenPassword)
  }

  checkYourLives = () => {
    let lives = this.state.counter
    this.setState({
      counter: this.state.counter - 1
    })
    console.log('counter = ',this.state.counter)
    if (lives === 0) {
      this.looseGame()
    }


  }


  onClickLetters = (e) => {

    e.target.disabled = true
    this.setState({
      UserAnswer: e.target.value,
      // counter: this.state.counter + 1,
    })

    this.checkAnswers(e.target.value, this.state.dinamicPassword)
    console.log(this.state.counter)
  }



  checkAnswers = (userLetter, pass) => {
    console.log(userLetter)
    let newTab = []
    pass = pass.toLowerCase().split('')
    userAnsToCheck.push(userLetter)
    console.log(userAnsToCheck)
    
    

    pass.forEach((val) => {
      if (userAnsToCheck.includes(val)) {
        newTab.push(val)
        return
      }
      else if (!userAnsToCheck.includes(val)) {
        newTab.push('_')
      }
    })

    if(pass.indexOf(userLetter) === -1) {
      this.checkYourLives()
    }



    
    this.state.compareAnswers = newTab
    if (this.state.compareAnswers.includes('_')) {
      this.setState({
        isSucces: false
      })
    } else if (this.state.counter === 0) {
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
     


        <div className="image-container">
        {this.state.counter === 5 && !this.state.isSucces && <img className="title" src={skull_6} />}
          {this.state.counter === 4 && !this.state.isSucces && <img src={skull_1} />}
          {this.state.counter === 3 && !this.state.isSucces && <img src={skull_2} />} 
          {this.state.counter === 2 && !this.state.isSucces && <img src={skull_3} />} 
          {this.state.counter === 1 && !this.state.isSucces && <img src={skull_4} />} 
          {this.state.counter === 0 && !this.state.isSucces && <img src={skull_5} />}  
          {this.state.isSucces && <img className="title" src={skull_7 } />} 
         </div>

        <Score
          isWinner={this.state.isSucces}
          isLoose={this.state.isLoose}
        />
        <PrintAnswer
          password={this.state.compareAnswers}
          // hiddenPassword={this.state.compareAnswers.fill('-')}
          category={this.state.category}
          tries={this.state.counter}
        />
        <Letters
          onClickLetters={this.onClickLetters}
          letFindPass={() => this.letChoosePassword(allPaswords.length)}
          isDisabled = {this.state.isLoose || this.state.isSucces}
        />


      </div>
    );
  }
}

export default App;
