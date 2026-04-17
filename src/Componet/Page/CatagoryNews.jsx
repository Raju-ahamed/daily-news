import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NewsCard from '../News/NewsCard';

const CatagoryNews = () => {
    const { id } = useParams();
    const [newses, setNewses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => {
                setNewses(data);
                setLoading(false);
            });
    }, []);

    const updateNews = newses.filter((news) => news.category_id == id);
    console.log(newses.length)

    if (loading) return <p>Loading...</p>;

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