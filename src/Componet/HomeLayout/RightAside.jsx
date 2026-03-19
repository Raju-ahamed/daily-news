import React from "react";

const trendingNews = [
    "Bayern Slams Authorities Over Flight Delay",
    "Real Madrid Wins Dramatic Final",
    "Messi Scores Stunning Goal Again",
    "Top 10 Transfers This Season",
];

const RightAside = () => {
    return (
        <aside className="w-full md:w-80 space-y-6">

            {/* 🔐 Login Section (Top) */}
            <div className="bg-base-200 p-4 rounded-xl shadow">
                <h2 className="text-lg font-bold mb-4">Login With</h2>

                <div className="space-y-3">
                    <button className="btn btn-outline w-full flex items-center gap-2">
                        {/* Google Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#FFC107"
                                d="M43.6 20.5H42V20H24v8h11.3C33.7 32.1 29.2 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 
                11-11c2.8 0 5.3 1 7.3 2.7l5.7-5.7C33.5 6.5 29 5 24 5 12.4 5 3 14.4 3 26s9.4 
                21 21 21 21-9.4 21-21c0-1.8-.2-3.5-.4-5.5z"
                            />
                        </svg>
                        Login with Google
                    </button>

                    <button className="btn btn-outline w-full flex items-center gap-2">
                        {/* GitHub Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 
              3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
              -.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
              1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 
              3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.335-5.467-5.93 
              0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
              0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 
              2.045.138 3 .405 2.28-1.552 3.285-1.23 
              3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
              1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
              5.92.435.375.81 1.102.81 2.222 
              0 1.606-.015 2.896-.015 3.286 
              0 .315.21.69.825.57C20.565 21.795 24 17.295 
              24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Login with GitHub
                    </button>
                </div>
            </div>

            {/* 🔥 Trending Section */}
            <div className="bg-base-200 p-4 rounded-xl shadow">
                <h2 className="text-lg font-bold mb-3">Trending</h2>

                <ul className="space-y-2">
                    {trendingNews.map((item, index) => (
                        <li
                            key={index}
                            className="text-sm hover:text-primary cursor-pointer border-b pb-2"
                        >
                            🔥 {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* 📢 Advertisement */}
            <div className="bg-base-200 p-4 rounded-xl shadow text-center">
                <h2 className="text-lg font-bold mb-3">Advertisement</h2>
                <div className="h-32 bg-base-300 flex items-center justify-center rounded">
                    Ads Space
                </div>
            </div>
        </aside>
    );
};


export default RightAside;