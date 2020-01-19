import React from 'react';
import InputComp from './InputComp';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../../services/PostData';

class LogIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        }
    }

    login =()=> {
        if(this.state.username && this.state.password){
            console.log(this.state)
          PostData('login',this.state).then((result) => {
           let responseJson = result;
           if(responseJson.userData){         
             sessionStorage.setItem('userData',JSON.stringify(responseJson));
             this.setState({redirectToReferrer: true});
           }
           
          });
        }
        
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log({[e.target.name]: e.target.value })
    };


    render(){

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/main'}/>)
        }
         
        if(sessionStorage.getItem('userData')){
            return (<Redirect to={'/main'}/>)
        }

          
        return(
            <div className="formWrapp" >
                <div className="row align-center">
                    <div className="column small-9">
                        <div className="textCenter">
                            <h1>
                                Մուտք
                            </h1>
                        </div>
                    </div>
                   
                    <div className="column small-9">
                        <InputComp
                            otherFormat={null}
                            handleChange={this.handleChange}
                            InputTitle={"Login"}
                            InputType={"text"}
                            InputName={"Login"}
                            DefoltVal={this.state.Login}
                        />
                    </div>
                    <div className="column small-9">
                        <InputComp
                            otherFormat={null}
                            handleChange={this.handleChange}
                            InputTitle={"Password"}
                            InputType={"password"}
                            InputName={"Password"}
                            DefoltVal={this.state.Password}
                        />
                    </div>
                    <div className="column small-9 flex-container align-center">
                        <button type="submit" className="btn orange" onClick={this.login}>
                            Մտնել
                        </button>
                    </div>
                    <a href="/signup">Registration</a>
                </div>
            </div>
        )
    }
};

export default LogIn;


