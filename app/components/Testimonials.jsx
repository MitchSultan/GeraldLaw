'use client';
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
    {
        name: "Jane Doe",
        title: "CEO, Acme Corp",
        text: "Wakili provided exceptional service and exceeded our expectations.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "John Smith",
        title: "Founder, Beta LLC",
        text: "Professional, reliable, and highly recommended!",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Alice Johnson",
        title: "Manager, Gamma Inc",
        text: "Their expertise made a real difference for our business.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Michael Lee",
        title: "Director, Delta Co",
        text: "Outstanding support and great results.",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
];

const CARD_WIDTH = 320; // px

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const maxIndex = testimonials.length - 1;
    const visibleCards = 2; // Number of cards visible at once

    const handlePrev = () => {
        setIndex((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const handleNext = () => {
        setIndex((prev) =>
            prev < maxIndex - visibleCards + 1 ? prev + 1 : prev
        );
    };

    return (
        <section className="w-full my-36 py-12 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">What Our Clients Say</h2>
                    <div className="flex space-x-2">
                        <button
                            onClick={handlePrev}
                            disabled={index === 0}
                            className={`p-2 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition ${
                                index === 0 ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                            aria-label="Previous testimonials"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={index >= maxIndex - visibleCards + 1}
                            className={`p-2 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition ${
                                index >= maxIndex - visibleCards + 1
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                            }`}
                            aria-label="Next testimonials"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${index * (CARD_WIDTH + 24)}px)`,
                            gap: "24px",
                        }}
                    >
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl shadow-md p-6 min-w-[320px] max-w-[320px] flex-shrink-0 flex flex-col items-center"
                            >
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-16 h-16 rounded-full mb-4 object-cover"
                                />
                                <p className="text-gray-700 italic mb-4 text-center">"{t.text}"</p>
                                <div className="text-gray-900 font-semibold">{t.name}</div>
                                <div className="text-gray-500 text-sm">{t.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;