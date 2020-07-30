import React from 'react';

class App extends React.Component {
  render() {
    const text = "Hello World";
    return (
      <div>
        <h1>こんにちは{text}さん</h1>
        <button>にんじゃわんこ</button>
        <button>ひつじ仙人</button>


      </div>
    );
  }
}

export default App;

