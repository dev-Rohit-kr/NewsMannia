import React, { Component } from "react";
export class NewsItem extends Component {
    constructor() {
        super();

        this.state = {
            articles: this.articles,
            loading: false,
        };
    }
    render() {
        let { title, description, imgurl, newsUrl, } = this.props;
        return (
            <>
                <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                    <img className="w-full h-48 object-cover" src={imgurl || "https://placehold.co/300x200"} alt="News Image" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
                        <p className="text-gray-600 text-sm mb-4">
                            {description}
                        </p>
                        <a href={newsUrl} className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition">Read More</a>
                    </div>
                </div>


            </>
        );
    }
}

export default NewsItem

