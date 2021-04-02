import React from "react";
import Layout from "./Layout/Layout";
import useFetchData from "./useFetchData";

const NewsBox = () => {
    const { fetchData: newsData, isLoading } = useFetchData(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3625826e70a34c18ad1c4a89b4a9f25b"
    );
    if (newsData) {
        console.log(newsData);
        var eachCard = newsData.data.articles.map((oneCard) => (
            <div className="card d-flex ">
                <img src={oneCard.urlToImage} alt="news " />
                <div className="card-body">
                    <h5 className="card-tittle">{oneCard.title}</h5>
                    <p className="card-text">{oneCard.description}</p>
                    <a href={oneCard.url} rel="noreferrer" target="_blank">
                        Read More...
                    </a>
                </div>
            </div>
        ));
    }

    return (
        <Layout>
            <h3>News Box</h3>
            <div className="card-container">
                {isLoading && (
                    <span className="text-danger"> Loading.... </span>
                )}
                {newsData && eachCard}
            </div>
        </Layout>
    );
};

export default NewsBox;

//3625826e70a34c18ad1c4a89b4a9f25b
//https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3625826e70a34c18ad1c4a89b4a9f25b
