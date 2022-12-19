import React, { Component } from "react";

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, date ,source } = this.props;

        return (
            <div className="my-3">
                <div className="card">
                    {/* ternary operator for image not found */}
                    <img
                        src={
                            !imageUrl
                                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
                                : imageUrl
                        }
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '85%'}}>{source}</span>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        {/* here we have created a new date obj to change the format we wnat to view.  */}
                        <p className="card-text">
                            <small className="text-muted">
                                Last updated on {new Date(date).toGMTString()}
                            </small>
                        </p>
                        <a
                            href={newsUrl}
                            rel="noreferrer"
                            target="_blank"
                            className="btn btn-sm btn-primary"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
