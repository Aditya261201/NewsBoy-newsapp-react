import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    // here we have made a constructor of super class..and we will use states in it...we can also pass the whole array of articles here..but we have stored it earlier and we will use it here by this keyword.
    constructor() {
        super();
        console.log("Hello I am a constructor from news component");
        this.state = {
            articles: [],
            loading: false
        }
    }




    // componentDidMount() is a lifecycle method which is a called after the render function.
    // here we will fetch the articles from the api and store them in the articles array which was blank above.
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0621765271484497aa6617a36adb1b74"
        let data = await fetch(url)             // fetch data from api
        let parsedData = await data.json()      // parse data
        this.setState({articles: parsedData.articles})    // store the articles from parsedData in articles array.

    }



    render() {
        return (
            <div className="container my-3">
                <h2>NewsBoy - Top Headlines</h2>
                <div className="row my-3">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                         {/* ternary operator for both title and description as if they are null set them as empty string */}
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News