import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      sneakers: [],
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ sneakers: data.sneakers }));
  }

  render() {
    const { sneakers, searchField } = this.state;
    const filteredSneaker = sneakers.filter((sneaker) =>
      sneaker.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="App-title">SNEAKERS</h1>
        <SearchBox
          placeholder="Search for sneaker"
          handleChange={this.handleChange}
        />
        <CardList sneakers={filteredSneaker}></CardList>
        <footer>PROEJECT BY KIAN VILLENO</footer>
      </div>
    );
  }
}

export default App;
