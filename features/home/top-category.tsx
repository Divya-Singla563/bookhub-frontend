import React from "react";
import { containerClass } from "@/lib/variables";

const TopCategory = () => {
    const categories = [
        { name: "Romance", icon: "💕" },
        { name: "Detective", icon: "🔍" },
        { name: "Mystery", icon: "🎭" },
        { name: "Cooking", icon: "🍳" },
        { name: "Fantasy", icon: "🧙" },
        { name: "Education", icon: "🎓" },
    ];

    return (
        <section className="py-20 bg-[#F4EEE0]">
            <div className={containerClass}>
                {/* Header Section */}
                <div className="flex items-start justify-between mb-16">
                    <div className="max-w-2xl">
                        <p className="text-[#084935] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                            OUR BOOKS
                        </p>
                        <h2 className="text-[#084935] text-5xl font-serif mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                            Top categories
                        </h2>
                        <p className="text-[#084935]/60 text-base leading-relaxed">
                            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur.
                        </p>
                    </div>

                    <button className="flex items-center gap-2 text-[#084935] hover:opacity-70 transition-opacity mt-16">
                        <span className="text-base">View All</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Categories Grid */}
                <div className="flex items-center justify-between gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-5 cursor-pointer group"
                        >
                            {/* Circle with Icon */}
                            <div className="w-36 h-36 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                                <div className="w-16 h-16 border-[3px] border-[#084935] rounded-lg flex items-center justify-center">
                                    <span className="text-3xl">{category.icon}</span>
                                </div>
                            </div>

                            {/* Category Name */}
                            <p className="text-[#084935] text-lg font-medium">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopCategory;
