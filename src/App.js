import React from 'react';

class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {name: "にんじゃわんこ"};
    this.state = {count:0};
  }

  hundleClick(name){
    this.setState({name:name});
    
  }

  handleClick(){
    this.setState({count:this.state.count +1 });
    
  }

  mainasClick(){
    this.setState({count:this.state.count -1 });
  }
  render() {
    const text = "Hello World";
    console.log(this.state);
    return (
      <div>
        <h1>{text}</h1>
        <h1>こんにちは{this.state.name}さん</h1>
        <button onClick = {()=> {this.hundleClick("にんじゃわんこ")}}>
          にんじゃわんこ
          </button>
        <button onClick = {() => {this.hundleClick("ひつじ仙人")}}>ひつじ仙人</button>

        <h1>{this.state.count}</h1>
        <button onClick = {() => {this.handleClick()}}>+</button>
        
        <button onClick = {() => {this.mainasClick()}}>-</button>


      </div>
    );
  }
}

export default App;

