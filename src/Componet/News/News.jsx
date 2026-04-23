import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const News = () => {
    const [newses, setNewses] = useState([])
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNewses(data))

    }, [])
    return (
        <div>
            {
                newses.map((news) => <NewsCard
                    key={news.id}
                    news={news}
                ></NewsCard>)
            }

        </div>
    );
};

export default News;
