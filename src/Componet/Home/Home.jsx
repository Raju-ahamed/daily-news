import React from "react";

const newsData = [
    {
        id: 1,
        title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
        category: "Sports",
        date: "Jan 4, 2022",
        description:
            "Bayern Munich criticized local authorities after a flight delay disrupted their travel plans to the Club World Cup.",
        image:
            "https://images.unsplash.com/photo-1518091043644-c1d4457512c6",
    },
    {
        id: 2,
        title: "Real Madrid Wins Dramatic Final",
        category: "Sports",
        date: "Jan 5, 2022",
        description:
            "Real Madrid secured a last-minute victory in a thrilling final match.",
        image:
            "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b",
    },
    {
        id: 3,
        title: "Tech Giants Announce New Innovations",
        category: "Technology",
        date: "Jan 6, 2022",
        description:
            "Leading tech companies revealed their latest innovations at a global event.",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
];

const Home = () => {
    return (
        <main className="flex-1">
            <h2 className="text-2xl font-bold mb-6">All News</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {newsData.map((news) => (
                    <div key={news.id} className="card bg-base-100 shadow-xl">

                        {/* Image */}
                        <figure>
                            <img
                                src={news.image}
                                alt={news.title}
                                className="h-48 w-full object-cover"
                            />
                        </figure>

                        {/* Content */}
                        <div className="card-body">
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span className="badge badge-outline">
                                    {news.category}
                                </span>
                                <span>{news.date}</span>
                            </div>

                            <h3 className="card-title text-lg">
                                {news.title}
                            </h3>

                            <p className="text-sm text-gray-600">
                                {news.description}
                            </p>

                            <div className="card-actions justify-end">
                                <button className="btn btn-primary btn-sm">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};


export default Home;