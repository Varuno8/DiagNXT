import React from 'react';

const USP = () => {
    const features = [
        {
            title: "Clinically Verified Training",
            desc: "Trained on verified medical literature, not generic GPT models.",
        },
        {
            title: "High-Volume Design",
            desc: "Purpose-built for high-volume OPDs.",
        },
        {
            title: "15-Second Workflow",
            desc: "Doctor-first UX: 15-second symptom entry generates full workup.",
        },
        {
            title: "Institution-Grade Safety",
            desc: "Built-in guardrails and traceable reasoning.",
        },
        {
            title: "Fastest Documentation",
            desc: "Industry-leading structured clinical documentation layer.",
        }
    ];

    return (
        <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-slate-900 tracking-tight">
                    What Makes DiagNXT <span className="text-blue-600">Uniquely Valuable</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="card-elevated p-8 rounded-xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-16 h-16 bg-slate-100 rounded-bl-3xl" />
                            <div className="text-5xl font-bold text-slate-200 mb-4">0{index + 1}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default USP;
