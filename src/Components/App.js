import React from 'react';
import Header from './Header'
import InputField from './InputField'
import PrintAnswer from './PrintAnswer'
import DrawImage from './DrawImage'


class App extends React.Component {

  render() {

    return (
      <div>
        <Header />
        <InputField />
        <PrintAnswer />
        <DrawImage />
      </div>
    );
  }
}

export default App;
