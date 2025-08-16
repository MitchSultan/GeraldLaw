
'use client';
import React, { useRef, useState } from "react";
import { FaBalanceScale, FaGavel, FaUserShield, FaHandshake } from "react-icons/fa";

const cards = [
    {
        icon: <FaBalanceScale size={32} />,
        title: "Expertise",
        desc: "Years of experience in diverse legal fields ensure the best advice.",
    },
    {
        icon: <FaGavel size={32} />,
        title: "Integrity",
        desc: "We uphold the highest ethical standards in all our cases.",
    },
    {
        icon: <FaUserShield size={32} />,
        title: "Client Focus",
        desc: "Your needs and interests are always our top priority.",
    },
    {
        icon: <FaHandshake size={32} />,
        title: "Trust",
        desc: "Building lasting relationships based on trust and transparency.",
    },
];

const CARD_WIDTH = 260;
const GAP = 24;

export default function Whyus() {
    const marqueeRef = useRef(null);
    const [drag, setDrag] = useState({ isDragging: false, startX: 0, scrollLeft: 0 });

    // Duplicate cards for seamless loop
    const marqueeCards = [...cards, ...cards];

    const handleMouseDown = (e) => {
        setDrag({
            isDragging: true,
            startX: e.pageX - marqueeRef.current.offsetLeft,
            scrollLeft: marqueeRef.current.scrollLeft,
        });
    };

    const handleMouseMove = (e) => {
        if (!drag.isDragging) return;
        const x = e.pageX - marqueeRef.current.offsetLeft;
        const walk = (x - drag.startX) * 1.2;
        marqueeRef.current.scrollLeft = drag.scrollLeft - walk;
    };

    const handleMouseUp = () => setDrag((d) => ({ ...d, isDragging: false }));

    // Infinite scroll effect
    const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = marqueeRef.current;
        if (scrollLeft < 1) {
            marqueeRef.current.scrollLeft = scrollWidth / 2 - clientWidth;
        } else if (scrollLeft + clientWidth >= scrollWidth - 1) {
            marqueeRef.current.scrollLeft = clientWidth;
        }
    };

    return (
        <section style={{ background: "#fafbfc", padding: "3rem 0" }}>
            <h2 style={{ textAlign: "center", marginBottom: "2rem", fontWeight: 600, fontSize: "2rem" }}>
                Why Choose Us
            </h2>
            <div
                ref={marqueeRef}
                style={{
                    overflow: "hidden",
                    cursor: drag.isDragging ? "grabbing" : "grab",
                    userSelect: "none",
                    width: "100%",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onScroll={handleScroll}
                tabIndex={0}
            >
                <div
                    style={{
                        display: "flex",
                        gap: `${GAP}px`,
                        width: `${(CARD_WIDTH + GAP) * marqueeCards.length}px`,
                        transition: drag.isDragging ? "none" : "transform 0.2s",
                    }}
                >
                    {marqueeCards.map((card, idx) => (
                        <div
                            key={idx}
                            style={{
                                minWidth: `${CARD_WIDTH}px`,
                                background: "#fff",
                                borderRadius: "16px",
                                boxShadow: "0 2px 12px #0001",
                                padding: "2rem 1.5rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                flexShrink: 0,
                            }}
                        >
                            <div style={{ color: "#1a73e8", marginBottom: "1rem" }}>{card.icon}</div>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                                {card.title}
                            </h3>
                            <p style={{ fontSize: "0.97rem", color: "#444" }}>{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                /* Hide scrollbar for marquee */
                [ref]::-webkit-scrollbar { display: none; }
            `}</style>
        </section>
    );
}