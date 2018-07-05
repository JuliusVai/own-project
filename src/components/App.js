import React from "react";
import Content from "./Content";
import Search from "./Search";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentInput: "",
      recipeData: [],
      favourites: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToFavourites = this.addToFavourites.bind(this);
  }

  handleChange(event) {
    this.setState({ currentInput: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchingRecipes(this.state.currentInput);
  }

  fetchingRecipes(ingredient) {
    const url = `/recipes/${ingredient}`; // getting fetched through the server server.js

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ recipeData: data.recipes });
      });
  }

  componentDidMount() {
    this.fetchingRecipes("Chocolate");
  }

  addToFavourites(link, title, id) {
    console.log(link, title, id);

    this.setState(prevState => {
      const newFavourites = Object.assign({}, prevState.favourites, {
        [id]: {
          link,
          title,
          id
        }
      });

      return {
        favourites: newFavourites
      };
    });
  }

  deleteFavourite(id) {
    this.setState(prevState => {
      const newFavourites = Object.assign({}, prevState.favourites);
      delete newFavourites[id];

      return {
        favourites: newFavourites
      };
    });
  }

  render() {
    // console.log(this.state.currentInput);
    return (
      <div className="app">
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <div className="displayFavourites">
          <h2>Favourites:</h2>
          {Object.values(this.state.favourites).map(item => (
            <div key={item.id}>
              <a href={item.link} target="_blank" className="link">
                {item.title}
              </a>
              {"  "}
              <button onClick={() => this.deleteFavourite(item.id)}>
                Remove from list
              </button>
            </div>
          ))}
        </div>
        <div className="mainContent">
          {this.state.recipeData.map(recipeData => (
            <Content
              key={recipeData.recipe_id}
              title={recipeData.title}
              image={recipeData.image_url}
              publisher={recipeData.publisher}
              link={recipeData.source_url}
              addToFavourites={this.addToFavourites}
              id={recipeData.recipe_id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
