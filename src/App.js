import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {name:"にんじゃわんこ"}


    
  }
  render() {
    const text = "Hello World";
    console.log(this.state);
    return (
      <div>
        <h1>こんにちは{this.state.name}さん</h1>
        <button onClick = {()=> {this.setState({name:"にんじゃわんこ"})}}>にんじゃわんこ</button>
        <button onClick = {() => {this.setState({name:"ひつじ仙人"})}}>ひつじ仙人</button>


      </div>
    );
  }
}

export default App;

