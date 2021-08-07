import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'FhaCskWxrHpWnuzWtPypTAvZpwx5fpSX';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }

    updateSearchTerm = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    searchReviews = () => {
        fetch(`${URL}&query=${this.state.searchTerm}`).then(resp => resp.json()).then(movies => {
            this.setState({
                reviews: movies.results
            })
        })
    }

    displayReviews = () => this.state.reviews.length !== 0 ? <MovieReviews reviews={this.state.reviews} /> : null

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form className="review-search" onSubmit={event => {
                    event.preventDefault();
                    this.searchReviews();
                    }}>
                    <label>
                        Search Reviews:
                        <input onChange={event => this.updateSearchTerm(event)}></input>
                        <input type="submit"></input>
                    </label>
                </form>
                {this.displayReviews()}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;