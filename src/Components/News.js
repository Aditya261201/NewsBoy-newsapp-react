import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pagesize: 9,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }


    // here we have made a constructor of super class..and we will use states in it...we can also pass the whole array of articles here..but we have stored it earlier and we will use it here by this keyword.
    constructor(props) {
        super(props);
        console.log("Hello I am a constructor from news component");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults:0  // by default totalResults is zero
        }
        let head = (this.props.category).toUpperCase()
        document.title = `NewsBoy | ${head}`
    }


    async updateNews() {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0621765271484497aa6617a36adb1b74&page=${this.state.page}&pagesize=${this.props.pagesize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {
        this.updateNews();
    }
    // handlePrevClick = async () => {
    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews();
    // }
    // handleNextClick = async () => {
    //     this.setState({ page: this.state.page + 1 })
    //     this.updateNews()
    // };



    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0621765271484497aa6617a36adb1b74&page=${this.state.page}&pagesize=${this.props.pagesize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    }


    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: '30px 0px 30px 0px' }}>{`NewsBoy-Top Headlines  (${this.props.category})`}</h1>
                {/* if loading is true then show spinner.*/}
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                    <div className="row my-3">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                {/* ternary operator for both title and description as if they are null set them as empty string */}
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News