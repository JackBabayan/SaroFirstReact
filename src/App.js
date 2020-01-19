import React from 'react';
import './allStyle/main.scss';
import Header from './Components/header/header'
import Footer from './Components/footer/footer'
import Routes from './routes';



class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        logState:false,
        home: true
      }
  }


  render(){
    return(
      <div className="App">
        <Header logState={this.state.logState}/>
        <div  className="formSection">
          <Routes logState={ (e) => {this.setState({logState:e})}}/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
