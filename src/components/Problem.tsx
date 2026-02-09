import React from 'react';
import { Users, AlertTriangle, Scale } from 'lucide-react';

const Problem = () => {
    const cards = [
        {
            icon: Users,
            title: "Overwhelming Patient Volumes",
            stat: "Global Shortage",
            desc: "With global physician shortages — often well below the WHO's recommended thresholds — clinicians are increasingly overburdened. Our clinical co-pilot helps bridge this gap by delivering rapid, context-aware decision support when it's needed most.",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: AlertTriangle,
            title: "Rising Clinical Errors",
            stat: "70%",
            desc: "70% of errors stem from missing symptoms, incomplete documentation, or lack of time for reference.",
            color: "text-red-600",
            bg: "bg-red-50"
        },
        {
            icon: Scale,
            title: "Mounting Pressure",
            stat: "High",
            desc: "Doctors face mounting medico-legal pressure whilst managing information overload.",
            color: "text-amber-600",
            bg: "bg-amber-50"
        }
    ];

    return (
        <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-900 tracking-tight">The Global Healthcare Crisis</h2>
                    <div className="section-divider mx-auto" />
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="card-elevated-lg p-8 rounded-xl"
                        >
                            <div className={`w-12 h-12 rounded-lg ${card.bg} flex items-center justify-center mb-6`}>
                                <card.icon className={`w-6 h-6 ${card.color}`} />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{card.stat}</h3>
                            <h4 className="text-lg font-semibold text-slate-700 mb-3">{card.title}</h4>
                            <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
