import React from 'react';

class ContactForm extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      isSubmitted:false,
      email:"",
      hasEmailError:false,
      content:"",
    }



  }

  handleSubmit(){
    this.setState({isSubmitted:true});
  }

  handleEmailChange(event){
    const inputValue = event.target.value
    const isEmpty = inputValue ===""
    this.setState(
      {
        email:inputValue,
        hasEmailError:isEmpty,
    
    })
  }

  handleContentCharge(event){

    const inputValue = event.target.value
    const isEmpty = inputValue === ""
    this.setState({

      content:inputValue,
      hasContentError:isEmpty
    })

  }
  render() {
    let EmailErrorText;
    if(this.state.hasEmailError){
      EmailErrorText = (
        <p className = "contact-message-error">
          Emailを入力してください
        </p>
      )
    }

    let contentErrorText;
    if(this.state.hasContentError){
      contentErrorText = (
        <p className = "contact-message-error">
        お問い合わせ内容を入力してください
      </p>

      );
    }

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
          onChange = {(event)=>{this.handleEmailChange(event)}}
        />
        {EmailErrorText}
        <p>お問い合わせ内容（必須）</p>
        {/* textareaタグを追加してください */}
        <textarea 
          value = {this.state.content}
          onChange = {(event)=>{this.handleContentCharge(event)}}
          
          />
          {contentErrorText}
        
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
