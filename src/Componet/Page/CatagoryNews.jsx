import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../News/NewsCard';

const CatagoryNews = () => {
    const { id } = useParams();
    const allNews = useLoaderData();
    const updateNews = allNews.filter((news) => news.category_id === Number(id));
    return (
        <div>
            {updateNews.length > 0 ? (
                updateNews.map((news) => (
                    <NewsCard key={news.id}
                        news={news} />
                ))
            ) : (
                <p>No news available for this category.</p>
            )}
        </div>
    );
};

export default CatagoryNews;