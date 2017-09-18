import React, { Component } from 'react';
import '../styles/App.css';
// import BaseLayout from '../components/BaseLayout.js';
// import ParentComponent from '../components/ParentComponent.js';


class Header extends Component {
  render() {
    return (
      <nav><a className="navbar" href="#">Navbar</a></nav>
      // add a tag and href
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer><a  className="footer" href="#">Footer</a></footer>
      // add a tag and href
    );
  }
}

class BaseLayout extends Component {
  render() {
    return (
      // <div>This should house Header and Footer components and be able to house any children components.</div>
      <div className="base">
       <nav className="navbar">
        <h2>Navigation Bar</h2>
       </nav>

       {this.props.children}

       <footer>
         <h2>Footer</h2>
       </footer>
     </div>
    );
  }
}

class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: ""
    }
  }
  handleInput(e) {
    e.preventDefault();
    console.log(e.target.value);
    //set the state on input change
    this.setState({whatToSay: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  render() {
    return (
      // Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
      <div className="message">
      <form>
        <div className="form-group">
        <input onChange={this.handleInput} type="text" className="form-control" placeholder="Say It, Don't Spray It!" />
        </div>

        <div>
          <ChildComponent handleSubmit={this.handleSubmit}/>
        </div>

        <div>
          <DisplayComponent whatWasSaid={this.state.whatWasSaid}/>
        </div>
      </form>

      </div>
    );
  }
}

class ChildComponent extends Component {
  render() {
    return (
      // Dumb Component receiving Props
        <div>
          <button type="submit" className="btn btn-primary" onClick={this.props.onClick}>Submit</button>
        </div>
    );
  }
}

class DisplayComponent extends Component {
  render() {
    return (
      <div className="card-block">
        <h3 className="card-title">Messages</h3>
        <h4 className="card-subtitle mb-2 text-muted">whatWasSaid={this.props.whatWasSaid}</h4>
      </div>

    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
        <div className= "main"></div>
        <ParentComponent/>
        </BaseLayout>
      </div>
    );
  }
}

export default App;
