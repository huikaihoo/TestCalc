import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { text: '' };
    this.callApi = this.callApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.callApi('/api')
      .then(res => this.setState(res))
      .catch(console.error);
  }

  callApi = async ( url ) => {
    const resp = await fetch(url);
    let text = await resp.text();

    let data = null;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.err(`Invalid json\n${e}`);
    }

    if (resp.status !== 200) {
      throw Error(data ? data.message : 'No data');
    }

    return data;
  };

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    this.callApi(`/calc/${encodeURIComponent(this.state.text)}`)
      .then(res => this.setState(res))
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Calculator
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <p><code>{this.state.message || 'unknown'}</code></p>
          <form onSubmit={this.handleSubmit}>
            <input
              id="formula"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>Calculate</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
