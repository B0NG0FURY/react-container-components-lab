// Code MovieReviews Here
import React from "react";

const MovieReviews = props => (
    <div className="review-list">
        {props.reviews.map(review => (
            <div className="review">
                <h3><a href={review.link.url}>{review.display_title}</a></h3>
                <p>{review.summary_short}</p>
            </div>
        ))}
    </div>
);


export default MovieReviews;