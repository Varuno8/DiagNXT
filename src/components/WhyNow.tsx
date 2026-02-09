import React from 'react';
import { BookOpen, ShieldCheck, Award, Gavel } from 'lucide-react';

const WhyNow = () => {
    const items = [
        {
            icon: BookOpen,
            title: "Research Explosion",
            desc: "10k+ papers published weekly. Impossible to keep up manually.",
        },
        {
            icon: ShieldCheck,
            title: "Compliance Pressure",
            desc: "NMC and insurers demand rigorous standards.",
        },
        {
            icon: Award,
            title: "Quality Standards",
            desc: "NABH, JCI, ISO accreditation requirements.",
        },
        {
            icon: Gavel,
            title: "Rising Litigation",
            desc: "Medical litigations increased 400% in a decade.",
        }
    ];

    return (
        <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-slate-900 tracking-tight">Why the Need Is Urgent</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="card-elevated p-6 rounded-xl">
                            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-900">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyNow;
