import React from "react";
import PrintAnswer from "./PrintAnswer";
import Score from "./Score";
import Letters from "./Letters";
import allPaswords from "../data";
import skull_1 from "../images/1.png";
import skull_2 from "../images/2.png";
import skull_3 from "../images/3.png";
import skull_4 from "../images/4.png";
import skull_5 from "../images/5.png";
import skull_6 from "../images/6.png";
import skull_7 from "../images/7.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UserAnswer: "",
      isDisabled: false,
      placeholder: "Type your answer",
      dinamicPassword: "",
      isSucces: false,
      isLoose: false,
      counter: 6,
      compareAnswers: [],
      category: "",
      hiddenPassword: []
    };
  }

  componentDidMount() {
    this.letChoosePassword(allPaswords.length);
  }

  looseGame() {
    this.setState({
      isSucces: false,
      isLoose: true
    });
  }

  letChoosePassword = max => {
    this.setState({
      dinamicPassword: ""
    });

    let customNr = Math.floor(Math.random() * max);
    this.setState({
      dinamicPassword: allPaswords[customNr].password,
      category: allPaswords[customNr].category,
      isSucces: false,
      isLoose: false
    });
    this.checkAnswers(this.state.UserAnswer, allPaswords[customNr].password);
    console.log(this.state.hiddenPassword);
  };

  checkYourLives = () => {
    let lives = this.state.counter;
    this.setState({
      counter: this.state.counter - 1
    });
    if (lives === 0) {
      this.looseGame();
    }
  };

  onClickLetters = event => {
    event.target.disabled = true;
    this.setState({
      UserAnswer: event.target.value
    });

    this.checkAnswers(event.target.value, this.state.dinamicPassword);
  };

  checkAnswers = (userLetter, password) => {
    const { compareAnswers } = this.state;
    let answer = [];
    password = password.toLowerCase().split("");
    password.map(passwordItem => (
      password.includes(userLetter) ? answer = [...answer, passwordItem] : answer = [...answer, "-"]
    ));


    console.log(`password: ${password.toUpperCase()}, letter: ${userLetter.toUpperCase()}, answer : ${answer}`);





    this.setState({compareAnswers: answer})



    if (password.indexOf(userLetter) === -1) {
      this.checkYourLives();
    }



  };

  render() {
    return (
      <div className='main-container'>
        <div className='image-container'>
          {this.state.counter === 5 && !this.state.isSucces && (
            <img className='title' src={skull_6} alt='' />
          )}
          {this.state.counter === 4 && !this.state.isSucces && (
            <img src={skull_1} alt='' />
          )}
          {this.state.counter === 3 && !this.state.isSucces && (
            <img src={skull_2} alt='' />
          )}
          {this.state.counter === 2 && !this.state.isSucces && (
            <img src={skull_3} alt='' />
          )}
          {this.state.counter === 1 && !this.state.isSucces && (
            <img src={skull_4} alt='' />
          )}
          {this.state.counter === 0 && !this.state.isSucces && (
            <img src={skull_5} alt='' />
          )}
          {this.state.isSucces && (
            <img className='title' src={skull_7} alt='' />
          )}
        </div>

        <Score isWinner={this.state.isSucces} isLoose={this.state.isLoose} />
        <PrintAnswer
          password={this.state.compareAnswers}
          // hiddenPassword={this.state.compareAnswers.fill("-")}
          category={this.state.category}
          tries={this.state.counter}
        />
        <Letters
          onClickLetters={this.onClickLetters}
          letFindPass={() => this.letChoosePassword(allPaswords.length)}
          isDisabled={this.state.isLoose || this.state.isSucces}
        />
      </div>
    );
  }
}

export default App;
