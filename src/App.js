import React from 'react';

class App extends React.Component {


  constructor(props){
    super(props);
   
    this.state = {count:0};
  }

  handleClick(name){
    this.setState({name:name});
    
  }

  handleClick(){
    this.setState({count:this.state.count +1 });
  }
  render() {
    const text = "Hello World";
    console.log(this.state);
    return (
      <div>
        <h1>こんにちは{this.state.name}さん</h1>
        <button onClick = {()=> {this.handleClick("にんじゃわんこ")}}>
          にんじゃわんこ
          </button>
        <button onClick = {() => {this.handleClick("ひつじ仙人")}}>ひつじ仙人</button>

        <h1>{this.state.count}</h1>
        <button onClick = {() => {this.handleClick()}}>+</button>
        
        <button>-</button>


      </div>
    );
  }
}

export default App;

