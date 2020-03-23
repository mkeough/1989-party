import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Movies from './components/Movies'

class App extends Component {
  state = {
    moviesItems: [],
    totalResults: 0,
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=2a24adb4db0e1e8ed7467cfffd3ce76d'
    )
      .then((response) => {
        console.log('then-response' + response)
        return response.json()
      })
      .then((data) => {
        console.log('then-data' + data)
        this.setState({
          moviesItems: data.results,
          totalResults: data.total_results,
        })
      })
  }
  render() {
    return (
      <>
        <body>
          <NavBar />
          <h1>The Best Movies of 1989</h1>
          <section className="posters">
            {this.state.moviesItems.map((movies) => {
              return (
                <Movies
                  original_title={movies.title}
                  alt={movies.title}
                  poster_path={movies.poster_path}
                  overview={movies.overview}
                  popularity={movies.popularity}
                  voteCount={movies.vote_count}
                  releaseDate={movies.release_date}
                />
              )
            })}
          </section>
        </body>
      </>
    )
  }
}

export default App
