import React from 'react';
import { Keyboard, BrainCircuit, CheckSquare, Database } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: Keyboard,
            title: "Input",
            desc: "Doctor enters symptoms or uploads reports (OCR+NLP)."
        },
        {
            icon: BrainCircuit,
            title: "Analysis",
            desc: "AI displays differentials, alerts, and suggestions."
        },
        {
            icon: CheckSquare,
            title: "Review",
            desc: "Doctor approves or modifies recommendations."
        },
        {
            icon: Database,
            title: "Integration",
            desc: "System generates notes/plans and saves to EMR via API/FHIR."
        }
    ];

    return (
        <section className="py-20 lg:py-24 bg-white border-b border-slate-100">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-20 text-center text-slate-900 tracking-tight">How It Works</h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center relative">
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-slate-200" />
                            )}
                            <div className="relative z-10">
                                <div className="w-20 h-20 mx-auto bg-white rounded-full border-2 border-slate-200 flex items-center justify-center mb-6 shadow-sm">
                                    <step.icon className="w-8 h-8 text-slate-600" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 text-sm px-4 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
