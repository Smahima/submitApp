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

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    };
    this.handleInput = this.state.handleInput.bind(this);
    this.handleSubmit = this.state.handleSubmit.bind(this);
  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: this.state.whatToSay});
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
      <div className="activity">
      <form>

        <div className="form-group">
        <input onChange={this.state.handleInput} type="text" placeholder="Say It, Don't Spray It!" />
        </div>

        <div>
          <ChildComponent onClick={this.state.handleSubmit}/>
        </div>

        <div>
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
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
      <div>
      <output> type="text" {this.props.sayWhat}</output></div>
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
