import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      name:{firstName:'Alberto', lastName:'Ferreira'},
      company:'Microsoft'
    }
  }
  render(){
    return [
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            I am {this.state.name.firstName} {this.state.name.lastName}, and I work at {this.state.company}
          </p>
          <button
            onClick={()=>{
              this.setState(()=>{
                return{
                  name:{firstName:'John',lastName:'Doe'},
                }
              },
              ()=>{
                console.log(this.state)
              });
            }}
          >
            Change name
          </button>
        </header>
      </div>
    ];
  }
}

export default App;
