import React from 'react';

class App extends React.Component {
  render() {
    const text = "Hello World";
    return (
      <div>
        {text}
        <img src = 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/ninjawanko.png'/>

      </div>
    );
  }
}

export default App;

