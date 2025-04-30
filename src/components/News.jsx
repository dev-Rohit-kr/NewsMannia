import React, { Component } from 'react';  // Import React and Component class from 'react'

import NewsItem from "./NewsItem";  // Import NewsItem component to display individual news items
import Spinner from "./spinner.jsx";  // Import the Spinner component to show loading indicator

export class News extends Component {

  // Initialize the state of the component
  constructor() {
    super();  // Call the parent constructor
    this.state = {
      articles: [],  // To store the fetched articles
      loading: false,  // To track loading state
      page: 1,  // Current page number
      totalResults: 0,  // Total number of articles
    };
  }

  // Fetch news articles when the component mounts
  async componentDidMount() {
    this.updateNews();  // Fetch the initial set of news articles
  }

  // Function to fetch and update news articles based on the current page
  updateNews = async () => {
    const { page } = this.state;  // Get current page number from the state

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&page=${page}&pageSize=${this.props.articlesPerPage}&apiKey=2bdb97ec46614372b1d9a10090f98bee`;
    this.setState({ loading: true });  // Set loading state to true before fetching data

    let data = await fetch(url);  // Fetch the news articles from the API
    let parsedData = await data.json();  // Parse the JSON response

    this.setState({
      articles: parsedData.articles,  // Update articles in the state
      loading: false,  // Set loading to false after data is fetched
      totalResults: parsedData.totalResults,  // Set the total number of results
    });
  };

  // Function to handle previous button click
  handlePrevClick = () => {
    if (this.state.page > 1) {
      this.setState(
        (prevState) => ({ page: prevState.page - 1 }),  // Decrease page number
        this.updateNews  // Fetch new articles after page change
      );
    }
  };

  // Function to handle next button click
  handleNextClick = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),  // Increase page number
      this.updateNews  // Fetch new articles after page change
    );
  };

  render() {
    const { page, totalResults } = this.state;  // Destructure state values
    const { articlesPerPage } = this.props;  // Get the number of articles per page from props
    const totalPages = Math.ceil(totalResults / articlesPerPage);  // Calculate total pages

    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">NewsMannia - Top Headlines</h1>

        {this.state.loading && <Spinner />}  {/* Show the Spinner component if loading is true */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {this.state.articles.map((element) => {
            return (
              <div key={element.url} >
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={element.description ? element.description.slice(0, 83) : ""}
                  imgurl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-between mt-6">
          {/* Previous Button */}
          <button
            disabled={page <= 1}  // Disable button if on the first page
            type="button"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg disabled:bg-gray-300"
            onClick={this.handlePrevClick}  // Trigger previous page function
          >
            &larr; Previous
          </button>

          {/* Next Button */}
          <button
            disabled={page >= totalPages}  // Disable button if on the last page
            type="button"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg disabled:bg-gray-300"
            onClick={this.handleNextClick}  // Trigger next page function
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
