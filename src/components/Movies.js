import React, { Component } from 'react'
import App from '../App'

class Movies extends Component {
  render() {
    return (
      <section className="moviePoster">
        <section>
          <head>{this.props.original_title}</head>
          <img
            alt={this.props.title}
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.poster_path}`}
          ></img>
          <h2>{this.props.original_title}</h2>
          <p>{this.props.overview}</p>
        </section>
        <section className="movieCardNumbers">
          <p>
            <h3> Release Date: {this.props.releaseDate}</h3>
          </p>
          <p>
            <h3>Popularity: {this.props.popularity}</h3>
          </p>
          <p>
            <h3>Vote Count: {this.props.voteCount}</h3>
          </p>
        </section>
      </section>
    )
  }
}

export default Movies
