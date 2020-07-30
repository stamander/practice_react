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
        <h1>こんにちは{text}さん</h1>
        <button onClick = {()=> {console.log("にんじゃわんこ")}}>にんじゃわんこ</button>
        <button onClick = {() => {console.log("ひつじ仙人")}}>ひつじ仙人</button>


      </div>
    );
  }
}

export default App;

