import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { useTheme } from '../ThemeContext';


const News = (props)=> {

    const { theme } = useTheme();

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews= async()=> {
        props.setProgress(20);  // setting progress to show on loading bar.
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
        props.setProgress(40);  // setting progress to show on loading bar.
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(70);  // setting progress to show on loading bar.
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);  // setting progress to show on loading bar.
    }

    useEffect(()=>{
        let head = (props.category).toUpperCase()
        document.title = `NewsBoy | ${head}`
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }

        return (
            <>
                <div style={{ margin: '55px 0px 20px 0px' }}>
                <h1 className={theme === "light" ? "text-center text-white bg-dark" : "text-center text-dark bg-white"} style={{ margin: '0px 0px 0px 0px' }}>{`NewsBoy-Top Headlines  (${props.category})`}</h1>
                {loading && <Spinner/>}
                </div>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >
                    <div className={theme === "light" ? "container bg-dark" : "container bg-white"}>
                    <div className="row my-3">
                        {articles.map((element) => {
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

News.defaultProps = {
    country: 'in',
    pagesize: 9,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}


export default News