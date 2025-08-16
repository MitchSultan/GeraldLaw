'use client';
import React, { useRef } from "react";

const caseStudies = [
    {
        title: "Landmark Property Dispute",
        description:
            "Successfully resolved a complex property dispute, securing client ownership rights and setting a legal precedent.",
        link: "#",
    },
    {
        title: "Corporate Merger Success",
        description:
            "Advised on a multi-million dollar merger, ensuring compliance and smooth transition for both parties.",
        link: "#",
    },
    {
        title: "Criminal Defense Victory",
        description:
            "Achieved a not-guilty verdict in a high-profile criminal case, protecting the client's reputation and freedom.",
        link: "#",
    },
    {
        title: "Intellectual Property Win",
        description:
            "Protected a client's patent against infringement, resulting in a favorable settlement.",
        link: "#",
    },
];

const Marquee = ({ children }) => {
    const marqueeRef = useRef(null);
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Pause animation on hover
    const handleMouseEnter = () => {
        marqueeRef.current.style.animationPlayState = "paused";
    };

    const handleMouseLeave = () => {
        marqueeRef.current.style.animationPlayState = "running";
    };

    // Drag to scroll
    const handleMouseDown = (e) => {
        isDragging = true;
        marqueeRef.current.classList.add("cursor-grabbing");
        startX = e.pageX - marqueeRef.current.offsetLeft;
        scrollLeft = marqueeRef.current.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - marqueeRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // scroll-fast
        marqueeRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        isDragging = false;
        marqueeRef.current.classList.remove("cursor-grabbing");
    };

    return (
        <div
            className="overflow-x-hidden relative group mt-24"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={marqueeRef}
                className="flex gap-6 animate-marquee cursor-grab"
                style={{
                    animation: "marquee 25s linear infinite",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={(e) => handleMouseDown(e.touches[0])}
                onTouchMove={(e) => handleMouseMove(e.touches[0])}
                onTouchEnd={handleMouseUp}
            >
                {children}
                {/* Duplicate for seamless loop */}
                {children}
            </div>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

const CaseCard = ({ title, description, link }) => (
    <div className="bg-white min-h-96 shadow-lg rounded-lg p-6 min-w-[300px] lg:min-w-[720px] max-w-full flex flex-col justify-end flex-shrink-0 border border-gray-100">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
            href={link}
            className="text-blue-600 max-w-52 hover:underline font-medium"
            tabIndex={0}
        >
            Read more &rarr;
        </a>
    </div>
);

const CaseStudies = () => (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                    Case Studies
                </h2>
                <a
                    href="#"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-blue-700 transition"
                >
                    More Case Studies
                </a>
            </div>
            <Marquee>
                {caseStudies.map((cs, idx) => (
                    <CaseCard key={idx} {...cs} />
                ))}
            </Marquee>
        </div>
    </section>
);

export default CaseStudies;