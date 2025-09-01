import { useState } from "react";

export default function Tabs() {
    const [active, setActive] = useState("Year");

    const tabs = ["Week", "Month", "Year"];

    return (
        <div className="inline-flex rounded-md bg-gray-100 p-1">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActive(tab)}
                    className={`px-2 py-1 text-xs rounded-md transition-colors
            ${active === tab
                            ? "bg-white shadow text-gray-900"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
