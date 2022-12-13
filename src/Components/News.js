import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    // here we have created an array of articles which we will use as states in our news.this data is a sample output from newsapi
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "'Cricket has come home to Pakistan'",
            "description": "Test Match Special commentator and comedian Aatif Nawaz reflects on the importance of England's historic tour to Pakistan.",
            "url": "http://www.bbc.co.uk/sport/cricket/63955845",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5576/production/_127987812_gettyimages-1448268827.jpg",
            "publishedAt": "2022-12-13T10:37:25.5396172Z",
            "content": "Pakistan fans have held up signs thanking England players for visiting throughout the tour\r\nAs I sat down to begin my first commentary stint of this historic tour, I couldn't help but smile. It felt … [+2810 chars]"
        },
        {
            "source": {
                "id": "new-scientist",
                "name": "New Scientist"
            },
            "author": null,
            "title": "Fossils reveal the dinosaur era's changing insect soundscape",
            "description": "Bush crickets from the Triassic era onwards evolved high-frequency songs to avoid being heard by predators",
            "url": "https://www.newscientist.com/article/2351116-fossils-reveal-the-dinosaur-eras-changing-insect-soundscape/",
            "urlToImage": "https://images.newscientist.com/wp-content/uploads/2022/12/12153643/SEI_137319297.jpg",
            "publishedAt": "2022-12-12T00:00:00Z",
            "content": "By Christa Lesté-Lasserre\r\nA male katydid fossil from the Early Cretaceous period\r\nBo Wang\r\nCricket-like insects once had a much greater musical range than those alive today, according to researchers… [+3588 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    // here we have made a constructor of super class..and we will use states in it...we can also pass the whole array of articles here..but we have stored it earlier and we will use it here by this keyword.
    constructor() {
        super();
        console.log("Hello I am a constructor from news component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsBoy - Top Headlines</h2>
                <div className="row my-3">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0,40)} description={element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News