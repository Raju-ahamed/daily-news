import React from 'react';
import { NavLink } from 'react-router';

const NewsCard = ({ news }) => {

    return (
        <div>
            <div className="gap-6 md:grid-cols-2 m-4">
                <div key={news.id} className="card bg-base-100 shadow-xl">
                    {/* Image */}
                    <figure>
                        <img
                            src={news.thumbnail_url}
                            alt={news.title}
                            className="h-48 w-full object-cover"
                        />
                    </figure>

                    {/* Content */}
                    <div className="card-body">
                        <div className="flex justify-between items-center text-sm text-gray-500">

                            <img className='rounded-2xl h-10' src={news.author.img} alt="" srcset="" />

                            <span>{news.date}</span>
                        </div>

                        <h3 className="card-title text-lg">
                            {news.title}
                        </h3>

                        <p className="text-sm text-gray-600">
                            {news.description}
                        </p>

                        <div className="card-actions justify-end">
                            <NavLink to={`/details/${news.id}`}>
                                <button className="btn btn-primary btn-sm">
                                    Read More
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;