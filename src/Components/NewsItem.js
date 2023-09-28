import React from "react";
import { useTheme } from '../ThemeContext';


const NewsItem =(props)=> {
        const { theme } = useTheme();
        let { title, description, imageUrl, newsUrl, date ,source } = props;

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
                    <div className={theme === "light" ? "card-body bg-dark" :"card-body bg-light"}>
                        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '85%'}}>{source}</span>
                        <h5 className={theme === "light" ? "card-title text-white" : "card-title text-dark"}>{title}</h5>
                        <p className={theme === "light" ? "card-text text-white" : "card-text text-dark"}>{description}</p>
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

export default NewsItem;
