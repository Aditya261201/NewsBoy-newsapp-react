import React, { Component } from "react";

export class NewsItem extends Component {
    // constructor always runs when an object is created of the class- here we have to use super class constructor otherwise it will throw an error.
    //here constructor will be called 3 times as we have 3 objects(newsitem) as of now .

    // constructor() {
    //     super();
    //     console.log("i am a constructor")
    // }
    
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;

        return(
            <div className="my-3">
            <div className="card" style={{width: '18rem'}}>
            {/* ternary operator for image not found */}
                <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
            </div>
        </div>
        )
    }
}

export default NewsItem;
