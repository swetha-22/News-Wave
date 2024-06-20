import React, { useState , useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props) =>{

    const [articles,setArticles] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [totalResults,setTotalResults] = useState(0);
    const updateNews= async() =>{

        // Loading Bar 
        props.setProgress(0);
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // Spinner
        setLoading(true);
        let data= await fetch(url);
        // Loading Bar  
        props.setProgress(30);
        let parsedData= await data.json();
        // Loading Bar
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        // Spinner
        setLoading(false);
        // Loading Bar
        props.setProgress(100);
    }

    useEffect(()=>{
        document.title=`${(props.category)[0].toUpperCase()+(props.category).slice(1)} - NewsMonkey`
        updateNews();
    },[]);

    const fetchMoreData= async() =>{
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        // setLoading(true);

        let data= await fetch(url);
        let parsedData= await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }

    // const handlePrev = async ()=>{
    //     setPage(page-1);
    //     updateNews();
    // }
    // const handleNext = async ()=>{
    //     setPage(page+1);
    //     updateNews();
    // }

    return (
        <div className="container my-4">
            <h1 className='text-center' style={{margin:'30px', marginTop:'90px'}}>News-Wave - Top {(props.category)[0].toUpperCase()+(props.category).slice(1)} Headlines</h1>
            {loading && <Spinner/>}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length!==totalResults}
                loader={<Spinner/>} 
                style={{overflow:'hidden'}}>

                <div className="row">
                    {/* !loading &&  */}
                    {articles.map((element)=>{  
                        return <div className="col-md-4 my-3"  key={element.url}>
                                <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                            </div>
                    })}
                </div>

            </InfiniteScroll>

            {/* <div className="container d-flex justify-content-between">
                <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrev}> &larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr; </button>
            </div> */}
        </div>
    )
}

News.defaultProps={
    country: 'in',
    pageSize: 9
}
News.propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
}

export default News;