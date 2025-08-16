import React from "react";

const laws = [
    "Criminal Law",
    "Civil Law",
    "Constitutional Law",
    "Corporate Law",
    "Family Law",
    "Intellectual Property Law",
    "Labor Law",
    "Environmental Law",
    "Tax Law",
    "International Law",
];

const marqueeStyle = {
    whiteSpace: "nowrap",
    display: "inline-block",
    animation: "marquee 20s linear infinite",
};

const containerStyle = {
    overflow: "hidden",
    width: "100%",
    background: "#f5f5f5",
    borderRadius: "8px",
    padding: "10px 0",
};

const Marquee = () => (
    <div style={containerStyle}>
        <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
            <div style={marqueeStyle}>
                {laws.concat(laws).map((law, idx) => (
                    <span key={idx} style={{ margin: "0 40px", fontWeight: "bold", fontSize: "1.1rem" }}>
                        {law}
                    </span>
                ))}
            </div>
        </div>
        <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(100%); }
            }
        `}</style>
    </div>
);

export default Marquee;