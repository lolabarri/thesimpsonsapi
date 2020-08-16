import React, { Component } from "react";
import { SimpsonsCard } from "./components/SimpsonsCard";
import { Button } from "./components/Button";
import "./App.css";
import { getRandomSimpsonsQuote } from "./lib/theSimpsonsAPI";

class App extends Component {
  constructor() {
    super();
    this.state = {
      info: null
    };
  }

  componentDidMount() {
    getRandomSimpsonsQuote().then(info => {
      this.setState(info);
    });
  }

  render() {
    const info = this.state;
    return (
      <div className="App">
        <header className="App-header">
        <h1>The Simpsons' quote you need for today</h1>
          <SimpsonsCard
            quote={`${info.quote}`}
            character={`${info.character}`}
            image={`${info.image}`}
          />
          <Button />
        </header>
      </div>
    );
  }
}

export default App;
