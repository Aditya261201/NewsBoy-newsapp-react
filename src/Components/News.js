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

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0621765271484497aa6617a36adb1b74&page=${this.state.page}&pagesize=${this.props.pagesize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),//concating upcoming results with previous ones.
            totalResults: parsedData.totalResults
        })
    }


    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: '30px 0px 30px 0px' }}>{`NewsBoy-Top Headlines  (${this.props.category})`}</h1>
                {this.state.loading && <Spinner/>}
                {/* added infinite scrollbar tag from its package docs.
                its added just above map function..that is determined by docs/examples in docs */}
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
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News