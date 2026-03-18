import React, { useState } from "react";

const tabsData = [
    {
        id: "about",
        title: "About",
        content:
            "We are a modern web development company focused on building fast, scalable, and user-friendly applications using React and modern tools.",
    },
    {
        id: "mission",
        title: "Mission",
        content:
            "Our mission is to empower developers and businesses by delivering high-quality digital solutions with cutting-edge technologies.",
    },
    {
        id: "team",
        title: "Team",
        content:
            "Our team consists of passionate developers, designers, and problem solvers who love building amazing products.",
    },
    {
        id: "contact",
        title: "Contact",
        content:
            "You can reach us anytime via email or social media. We are always open to collaboration.",
    },
];

const About= () => {
    const [activeTab, setActiveTab] = useState("about");

    const activeContent = tabsData.find((tab) => tab.id === activeTab);

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center mb-6">
                About Us
            </h2>

            {/* Tabs */}
            <div className="tabs tabs-boxed justify-center mb-6">
                {tabsData.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab ${activeTab === tab.id ? "tab-active" : ""
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="bg-base-200 p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold mb-3">
                    {activeContent.title}
                </h3>
                <p className="text-gray-600">{activeContent.content}</p>
            </div>
        </div>
    );
};

export default About;