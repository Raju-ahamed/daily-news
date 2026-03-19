import React from "react";

const newsData = [
    {
        id: 1,
        title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
        category: "Sports",
        date: "Jan 4, 2022",
    },
    {
        id: 2,
        title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
        category: "Sports",
        date: "Jan 4, 2022",
    },
    {
        id: 3,
        title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
        category: "Sports",
        date: "Jan 4, 2022",
    },
];

const LeftAside = () => {
    return (
        <aside className="w-full md:w-80 bg-base-200 p-4 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-4">Latest News</h2>

            <div className="space-y-4">
                {newsData.map((news) => (
                    <div
                        key={news.id}
                        className="card bg-base-100 shadow hover:shadow-lg transition"
                    >
                        <div className="card-body p-4">
                            <h3 className="font-semibold text-sm leading-snug hover:text-primary cursor-pointer">
                                {news.title}
                            </h3>

                            <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                                <span className="badge badge-outline">
                                    {news.category}
                                </span>
                                <span>{news.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default LeftAside;