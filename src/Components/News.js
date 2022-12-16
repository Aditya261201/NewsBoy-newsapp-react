import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {

    // here we have made a constructor of super class..and we will use states in it...we can also pass the whole array of articles here..but we have stored it earlier and we will use it here by this keyword.
    constructor() {
        super();
        console.log("Hello I am a constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }




    // componentDidMount() is a lifecycle method which is a called after the render function.
    // here we will fetch the articles from the api and store them in the articles array which was blank above.
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0621765271484497aa6617a36adb1b74&page=1&pagesize=${this.props.pagesize}`
        this.setState({ loading: true })         // show spinner till fetching data.
        let data = await fetch(url)             // fetch data from api
        let parsedData = await data.json()      // parse data
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false                          // stop spinner.
        })    // store the articles from parsedData in articles array.

    }

    // totalResults -The total number of results available for your request.
    // pageSize -The number of results to return per page.(so we add that on all urls as &pagesize=20)

    handlePrevClick = async () => {
        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0621765271484497aa6617a36adb1b74&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
        this.setState({ loading: true })           // show spinner till fetching data.
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false                            // stop spinner.
        })
    }
    // so we set conditions(if else) as if we dont have results to show then next button wont take us to blank page.    
    handleNextClick = async () => {
        console.log("next")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {
            // nothing will happen as we dont have more articles to display
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0621765271484497aa6617a36adb1b74&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
            this.setState({ loading: true })             // show spinner till fetching data.
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false                       // stop spinner.
            })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsBoy - Top Headlines</h2>
                {/* if loading is true then show spinner.*/}
                {this.state.loading && <Spinner />}
                <div className="row my-3">
                {/* if loading is true then dont show news .only show when loading is false */}
                    {!this.state.loading &&this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            {/* ternary operator for both title and description as if they are null set them as empty string */}
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News