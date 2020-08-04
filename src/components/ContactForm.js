import React from 'react';

class ContactForm extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      isSubmitted:false,
      email:""
    }



  }

  handleSubmit(){
    this.setState({isSubmitted:true});
  }

  handle
  render() {
    let ContactForm;
    if(this.state.isSubmitted){
      ContactForm = (
        <div className = "contact-submit-message">
          送信完了
          </div>
      )

    }else{
      ContactForm = (
        <form onSubmit = {() => {this.handleSubmit()}}>
        <p>メールアドレス（必須）</p>
        {/* inputタグを追加してください */}
        <input
          value = {this.state.email}
          onChange = {(event)=>{console.log(event.target.value)}}
        />
        
        <p>お問い合わせ内容（必須）</p>
        {/* textareaタグを追加してください */}
        <textarea/>
        
        {/* 送信ボタンを追加してください */}
        <input 
          type = 'submit'
          value = '送信'
        />
        
      </form>

      )

    }

    return (
      
      <div className='contact-form'>
        {ContactForm}

      </div>
    );
  }
}

export default ContactForm;
