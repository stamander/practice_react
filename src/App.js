import React from 'react';
import Language from './Language';
import Lesson from './Lesson';

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
    
    const Languagelist = [
      {
        name : " HTML & css ", 
        image :"https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg",
        introduction : "webページを構成する要素"
      },

      {
        name : "Javascript",
        image : "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg",
        introduction : "webページを構成する要素"
      },

      {
        name : "React",
        image : "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg",
        introduction : "webページを構成する要素"

      }

      
    ]




    const lessonItem = [
      {
        name : "HTML&CSS",
        image : "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg",
        introduction : "webページを構成する要素"
      }
    ]



    return (
      <div>
        <h1 className = "title">{text}</h1>
        <h1 >こんにちは{this.state.name}さん</h1>
        <button onClick = {()=> {this.hundleClick("にんじゃわんこ")}}>
          にんじゃわんこ
          </button>
        <button onClick = {() => {this.hundleClick("ひつじ仙人")}}>ひつじ仙人</button>

        <h1>{this.state.count}</h1>
        <button onClick = {() => {this.handleClick()}}>+</button>
        
        <button onClick = {() => {this.mainasClick()}}>-</button>

        <Lesson
              name = {lessonItem.name}
              img = {lessonItem.image}
              />

        <div className = "language">



          {Languagelist.map((LanguageItem)=>{
            
            return(
              <Language

              name = {LanguageItem.name}
              image = {LanguageItem.image}
              introduction ={LanguageItem.introduction}
              
              />

              );
            })}
            


        </div>
      </div>
    );
  }
}

export default App;

