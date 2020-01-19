import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
import InputComp from '../main/formComponent/InputComp';

class Signup extends Component {

  constructor(props){
    super(props);
   
    this.state = {
     username: '',
     password: '',
     email: '',
     name: '',
     redirectToReferrer: false
    };

  }
 

  signup=()=> {
    console.log(this.state)
    if(this.state.username && this.state.password && this.state.email && this.state.name){
    PostData('signup',this.state).then((result) => {
      let responseJson = result;
      if(responseJson.userData){         
        sessionStorage.setItem('userData',JSON.stringify(responseJson));
        this.setState({redirectToReferrer: true});
      }
      
     });
    }
  }

  handleChange=(e)=>{
   this.setState({[e.target.name]:e.target.value});
  }

  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/home'}/>)
    }
   
  

    return (
      
        <div className="formWrapp" >
          <div className="row align-center">
              <div className="column small-9">
                  <div className="textCenter">
                      <h1>
                          Registratin
                      </h1>
                  </div>
              </div>
              <div className="column small-9">
                  <InputComp
                      otherFormat={null}
                      handleChange={this.handleChange}
                      InputTitle={"Email"}
                      InputType={"email"}
                      InputName={"email"}
                      DefoltVal={this.state.email}
                  />
              </div>
              <div className="column small-9">
                  <InputComp
                      otherFormat={null}
                      handleChange={this.handleChange}
                      InputTitle={"Name"}
                      InputType={"text"}
                      InputName={"name"}
                      DefoltVal={this.state.name}
                  />
              </div>
              <div className="column small-9">
                  <InputComp
                      otherFormat={null}
                      handleChange={this.handleChange}
                      InputTitle={"Username"}
                      InputType={"text"}
                      InputName={"username"}
                      DefoltVal={this.state.username}
                  />
              </div>
              <div className="column small-9">
                  <InputComp
                      otherFormat={null}
                      handleChange={this.handleChange}
                      InputTitle={"Password"}
                      InputType={"password"}
                      InputName={"password"}
                      DefoltVal={this.state.password}
                  />
              </div>
              <div className="column small-9 flex-container align-center align-midle" >
                <div className="column small-9 flex-container align-center">
                    <button type="submit" className="btn orange" onClick={this.signup}>
                        Մտնել
                    </button>
                </div>
                <a href="/login">Login</a>
              </div>
        </div>  
      </div>
    );
  }
}

export default Signup;