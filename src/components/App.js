import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentInput: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ currentInput: event.target.value });
  }

  // do dummy fetch, display input

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.currentInput);
  }

  fetchingRecipes(recipe) {}

  render() {
    // console.log(this.state.currentInput);
    return (
      <div className="App">
        <div className="Search">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
